(() => {
  const apiBase = "/api/data/v9.2"; // scoped inside IIFE

  let bugDiagnostics = {
    environmentUrl: window.location.origin,
    userId: null,
    userFullName: null,
    roles: [],
    currentUrl: window.location.href,
  };

  async function getCurrentUserRoles() {
    try {
      const whoAmIResponse = await fetch(`${apiBase}/WhoAmI`, {
        method: "GET",
        credentials: "include",
        headers: {
          "OData-MaxVersion": "4.0",
          "OData-Version": "4.0",
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      const whoAmI = await whoAmIResponse.json();
      bugDiagnostics.userId = whoAmI.UserId;

      const userResponse = await fetch(
        `${apiBase}/systemusers(${whoAmI.UserId})?$select=fullname`,
        { credentials: "include", headers: { Accept: "application/json" } }
      );
      const user = await userResponse.json();
      bugDiagnostics.userFullName = user.fullname;

      const rolesResponse = await fetch(
        `${apiBase}/systemusers(${bugDiagnostics.userId})?$expand=systemuserroles_association($select=roleid,name)`,
        { credentials: "include", headers: { Accept: "application/json" } }
      );
      const userWithRoles = await rolesResponse.json();

      if (userWithRoles.systemuserroles_association?.length > 0) {
        bugDiagnostics.roles = userWithRoles.systemuserroles_association.map(
          (r) => ({ name: r.name })
        );
      }

      chrome.runtime.sendMessage({
        action: "bugDiagnosticsResult",
        data: bugDiagnostics,
      });
    } catch (err) {
      console.error("Error fetching roles:", err);
    }
  }

  // Run immediately when injected
  getCurrentUserRoles();
})();
