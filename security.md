---
title: Security
---

# Security 

The below code is listed to make it transparent what Dynasnap uses. 

## Content script 

```js

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

```

## Manifest 

```json
{
  "manifest_version": 3,
  "name": "Dynasnap",
  "version": "1.0",
  "description": "Capture Dynamics 365 bugs intelligently and store in Azure DevOps",
  "host_permissions": [
    "https://*.visualstudio.com/*",
    "https://app.vssps.visualstudio.com/*",
    "*://*.dynamics.com/*",
    "https://dynasnap-prod-func.azurewebsites.net/*"
  ],
  "action": {
    "default_icon": {
      "16": "icons/icon_16.png",
      "48": "icons/icon_48.png",
      "128": "icons/icon_128.png"
    }
  },
  "background": {
    "service_worker": "background.js",
    "type": "module"
  },
  "permissions": ["sidePanel", "activeTab", "identity", "storage", "scripting"],
  "side_panel": {
    "default_path": "sidebar.html"
  },
  "icons": {
    "16": "icons/icon_16.png",
    "48": "icons/icon_48.png",
    "128": "icons/icon_128.png"
  },
  "content_scripts": [
    {
      "matches": ["https://*.dynamics.com/*"],
      "js": ["content_script.js"]
    }
  ]
}

```


