---
title: "Getting Started with Qase"
excerpt: "This page will help you get started with Qase. You'll be up and running in a jiffy!"
slug: "getting-started"
hidden: false
---

# Introduction

Welcome to the [Qase.io](https://qase.io) API! You can use our API to access Qase.io API endpoints, which allows to retrieve information about entities stored in database and perform actions with them. The API is organised around [REST](https://en.wikipedia.org/wiki/Representational_State_Transfer).
[block:api-header]

# API Rate limits

Your application can make up to 200 API requests per minute.

For Enterprise customers limits can be changed.

Once the limit is exceeded, clients receive an HTTP `429` with a `Retry-After: X` header to indicate how long their timeout period is before they will be able to send requests again. The timeout period is set to 60 seconds once the limit is exceeded.

# Authentication

Qase.io uses API tokens to authenticate requests. You can view and manage your API keys in [API tokens pages](https://app.qase.io/user/api/token).

Your API keys has the same access rights as your role in the app, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

Qase API expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Token: API_TOKEN`

All API requests must be made over [HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure). Calls made over plain HTTP will fail. API requests without authentication will also fail.

[block:callout]
{
  "type": "info",
  "body": "You must replace API_TOKEN with your personal API key."
}
[/block]

# Access rights

Qase.io is using [Role-based Access Control](https://help.qase.io/hc/en-us/articles/360014177877-Workspace-Management-Roles) system to restrict some features usage in Web interface and the same rules are applied to API methods. In description for each method you will find a rule name, that is required to perform an action through API. If you don't have enough access rights, you will receive an error with 403 status code.

# Error Codes

| Code | Meaning                                                                                  |
|------|------------------------------------------------------------------------------------------|
| 400  | Bad Request - Your request is invalid.                                                   |
| 401  | Unauthorized - Your API key is wrong.                                                    |
| 403  | Forbidden - Your role doesn't have enough permissions to perform this action.            |
| 404  | Not Found - The resource could not be found.                                             |
| 405  | Method Not Allowed - You tried to access a resource with an invalid method.              |
| 410  | Gone - The resource requested has been removed from our servers.                         |
| 413  | Payload Too Large - Your bulk request is too large. Please see the limitations.          |
| 422  | Unprocessable Entity - You have validation errors in some fields.                        |
| 429  | Too Many Requests - You're performing too many requests! Slow down!                      |
| 500  | Internal Server Error - We had a problem with our server. Try again later.               |
| 503  | Service Unavailable - We're temporarily offline for maintenance. Please try again later. |
