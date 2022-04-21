---
title: "Getting Started with Qase"
excerpt: "This page will help you get started with Qase. You'll be up and running in a jiffy!"
slug: "getting-started"
hidden: false
---

[block:api-header]
{
  "title": "Introduction"
}
[/block]
Welcome to the [Qase.io](https://qase.io) API! You can use our API to access Qase.io API endpoints, which allows to retrieve information about entities stored in database and perform actions with them. The API is organised around [REST](https://en.wikipedia.org/wiki/Representational_State_Transfer).
[block:api-header]
{
  "title": "API Rate limits"
}
[/block]
Your application can make up to 200 API requests per minute.

For Enterprise customers limits can be changed.

Once the limit is exceeded, clients receive an HTTP `429` with a `Retry-After: X` header to indicate how long their timeout period is before they will be able to send requests again. The timeout period is set to 60 seconds once the limit is exceeded.
[block:api-header]
{
  "title": "Authentication"
}
[/block]
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

[block:api-header]
{
  "title": "Access rights"
}
[/block]
Qase.io is using [Role-based Access Control](https://help.qase.io/hc/en-us/articles/360014177877-Workspace-Management-Roles) system to restrict some features usage in Web interface and the same rules are applied to API methods. In description for each method you will find a rule name, that is required to perform an action through API. If you don't have enough access rights, you will receive an error with 403 status code.
[block:api-header]
{
  "title": "Error Codes"
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Code",
    "h-1": "Meaning",
    "0-0": "400",
    "1-0": "401",
    "2-0": "403",
    "3-0": "404",
    "4-0": "405",
    "5-0": "410",
    "8-0": "429",
    "9-0": "500",
    "10-0": "503",
    "10-1": "Service Unavailable - We're temporarily offline for maintenance. Please try again later.",
    "9-1": "Internal Server Error - We had a problem with our server. Try again later.",
    "8-1": "Too Many Requests - You're performing too many requests! Slow down!",
    "5-1": "Gone - The resource requested has been removed from our servers.",
    "4-1": "Method Not Allowed - You tried to access a resource with an invalid method.",
    "3-1": "Not Found - The resource could not be found.",
    "2-1": "Forbidden - Your role doesn't have enough permissions to perform this action.",
    "1-1": "Unauthorized - Your API key is wrong.",
    "0-1": "Bad Request - Your request is invalid.",
    "7-0": "422",
    "7-1": "Unprocessable Entity - You have validation errors in some fields.",
    "6-0": "413",
    "6-1": "Payload Too Large - Your bulk request is too large. Please see the limitations."
  },
  "cols": 2,
  "rows": 11
}
[/block]
