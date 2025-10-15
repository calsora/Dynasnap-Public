# Dynasnap Privacy Policy

Last updated: October 2025

Dynasnap is a Chrome extension developed by an independent developer to help users capture bug reports in Dynamics 365 and to send them to Azure DevOps securely and efficiently.

Your privacy is important. This policy explains what information Dynasnap handles, how it’s used, and your rights as a user.

## 1. Data Collection and Usage

Dynasnap does not collect or store personal data.
All actions take place locally within your browser or through secure communication with Microsoft Azure services.

When creating a work item (e.g., bug or feature), Dynasnap may temporarily process:

Work item title and description (entered by you)

Optional screenshot data (captured with your consent)

Azure DevOps access token (to authenticate your request)

Organisation and project name (to route your request)

These details are only used to complete your Azure DevOps request — they are not stored by Dynasnap.

## 2. Use of Azure Function API

To simplify authentication and API communication, Dynasnap uses a secure Azure Function hosted by the developer.

The Azure Function:

Acts as a proxy to call the Azure DevOps REST API

Uses HTTPS for all transmissions

Does not permanently store or share user data

Minimal transient logs (such as timestamps and success/failure codes) may be generated for debugging and monitoring.
These logs do not contain screenshots, access tokens, or personal data and are automatically cleared according to Azure’s standard retention practices.

## 3. Third-Party Services

Dynasnap interacts only with:

Microsoft Azure DevOps (to create or update work items)

Azure Function (owned by the developer) — as a secure intermediary

No analytics, tracking, or advertising tools are used.

## 4. Data Security

All data is transmitted securely using HTTPS.
Your Azure DevOps tokens are stored locally in your browser using chrome.storage.local and are never shared with third parties.

## 5. User Control

You can remove Dynasnap at any time through your Chrome Extensions settings.
This will delete all locally stored data (such as tokens and configuration).

## 6. Updates to This Policy

This Privacy Policy may be updated occasionally to reflect improvements or compliance changes.
The latest version will always be available at:
https://github.com/calsora/Dynasnap-Public

## 7. Contact

If you have questions or concerns about privacy or data handling, you can contact the developer via GitHub Issues.

Logs are minimal and short-lived.

You control your own data at all times.

Transparency is really important and that's why the security permissions used in the extensions are available at:
https://github.com/calsora/Dynasnap-Public/tree/main/security
