---
title: Privacy Policy
---

# Dynasnap Privacy Policy

Last updated: November 2025

Dynasnap is a web browser extension developed by an independent developer to help users capture bug reports in Dynamics 365 and send them securely to Azure DevOps.

Your privacy is important. This policy explains what information Dynasnap handles, how it’s used, and your rights as a user.

## 1. Data Collection and Usage

Dynasnap does not collect, sell, or store personal data on external servers.
All actions take place locally within your browser or through secure communication with Microsoft Azure services.

When creating a work item (bug ), Dynasnap may temporarily process the following data to complete your request:

- Work item title and description (entered by you)

- Optional screenshot data (captured with your consent)

- Azure DevOps access token (used to authenticate your request)

- Organisation and project name (used to route your request)

- Dynamics 365 diagnostic information, including:

    - CRM environment URL
    
    - User ID and username
    
    - Security roles
    
    - Record URL and related page details

Clarification:
This diagnostic information is only captured when you manually submit a bug report.
It is transmitted securely to a protected Azure Function, used only to create your Azure DevOps work item, and is not stored or logged long-term.

## 2. Use of Azure Function API

To simplify authentication and API communication, Dynasnap uses a secure Azure Function hosted by the developer.

The Azure Function:

Acts as a proxy to communicate with the Azure DevOps REST API

Uses HTTPS for all transmissions

Does not permanently store or share user data

May generate minimal transient logs (e.g., timestamps, success/failure codes) for debugging and monitoring purposes

These logs:

Do not contain screenshots, access tokens, usernames, or CRM data

Are automatically cleared according to Azure’s standard retention policies

Diagnostic information (e.g., CRM environment details, user roles, record URLs) may be temporarily included in payloads to help reproduce or track issues, but this information is never retained beyond the completion of the request.

## 3. Third-Party Services

Dynasnap interacts only with:

Microsoft Azure DevOps to create or update work items

Azure Function (developer-owned) as a secure intermediary

Dynasnap does not use analytics, tracking, cookies, or advertising tools.

## 4. Data Security

All communication between Dynasnap, Azure Functions, and Azure DevOps uses secure HTTPS encryption.

Your Azure DevOps access tokens are stored locally on your machine using chrome.storage.local.
Tokens and configuration data remain private to your browser and are never shared with any third party.

## 5. User Control

You control all actions taken by Dynasnap.
The extension only processes data when you explicitly create a work item or perform an action.

You can remove Dynasnap at any time via your Chrome Extensions settings, which also deletes all locally stored data (including access tokens and configuration).

## 6. Updates to This Policy

This Privacy Policy may be updated periodically to reflect improvements or compliance changes.
The latest version will always be available at:
[privacy](dynasnap.dev/privacy.com)

## 7. Contact

If you have any questions or concerns about privacy or data handling, please contact the developer through:
Dynasnap GitHub Issues or Discussions

Summary:

Logs are minimal and short-lived.

You control when data is sent.

Pat tokens are not used and instead the token is created once you have logged into Azure DevOps. 

Data is transmitted securely and never stored permanently.

Built to save time for developers by letting have the details they need to fix a bug in Dynamics 365. 

Transparency matters — extension permissions and security details are publicly available at:
[security](dynasnap.dev/security)

Dynasnap is provided as-is without warranty. The developer is not responsible for data entered or transmitted through Microsoft systems.
