/* tslint:disable */
/* eslint-disable */
/**
 * Qase.io API
 * # Introduction  You can use our API to access [Qase.io](https://qase.io) API endpoints, which allows to retrieve information about entities stored in database and perform actions with them. The API is organized around [REST](http://en.wikipedia.org/wiki/Representational_State_Transfer).  # API Rate limits  Your application can make up to 200 API requests per minute.  Once the limit is exceeded, clients receive an HTTP 429 with a Retry-After: X header to indicate how long their timeout period is before they will be able to send requests again. The timeout period is set to 60 seconds once the limit is exceeded.  # Authentication  To authorize, use this code:  ```shell # With shell, you can just pass the correct header with each request curl \"https://api.qase.io/v1/api_endpoint\"   -H \"Token: api_token\"   -H \"Content-Type: application/json\" ```  Make sure to replace `api_token` with your API key.  Qase.io uses API tokens to authenticate requests. You can view an manage your API keys in [API tokens pages](https://app.qase.io/user/api/token).  Your API keys has the same access rights as your role in the app, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.  Qase API expects for the API key to be included in all API requests to the server in a header that looks like the following:  `Token: api_token`  You must replace `api_token` with your personal API key.  All API requests must be made over [HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure). Calls made over plain HTTP will fail. API requests without authentication will also fail.  # Access rights  Qase.io is using Role-based Access Control system to restrict some features usage in Web interface and the same rules are applied to API methods. In description for each method you will find a rule name, that is required to perform an action through API. If you don\'t have enough access rights, you will receive an error with `403` status code.  # Errors  Qase API uses the following error codes:  Code | Meaning ---------- | ------- 400 | Bad Request - Your request is invalid. 401 | Unauthorized - Your API key is wrong. 403 | Forbidden - Your role doesn\'t have enough permissions to perform this action 404 | Not Found - The resource could not be found. 405 | Method Not Allowed - You tried to access a resource with an invalid method. 406 | Not Acceptable - You requested a format that isn\'t json. 410 | Gone - The resource requested has been removed from our servers. 429 | Too Many Requests - You\'re performing too many requests! Slow down! 500 | Internal Server Error - We had a problem with our server. Try again later. 503 | Service Unavailable - We\'re temporarily offline for maintenance. Please try again later. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@qase.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DefectUpdate
 */
export interface DefectUpdate {
    /**
     * 
     * @type {string}
     * @memberof DefectUpdate
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof DefectUpdate
     */
    actualResult?: string;
    /**
     * 
     * @type {number}
     * @memberof DefectUpdate
     */
    severity?: number;
    /**
     * 
     * @type {number}
     * @memberof DefectUpdate
     */
    milestoneId?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof DefectUpdate
     */
    attachments?: Array<string>;
    /**
     * A map of custom fields values (id => value)
     * @type {{ [key: string]: string; }}
     * @memberof DefectUpdate
     */
    customField?: { [key: string]: string; };
    /**
     * 
     * @type {Array<string>}
     * @memberof DefectUpdate
     */
    tags?: Array<string>;
}

export function DefectUpdateFromJSON(json: any): DefectUpdate {
    return DefectUpdateFromJSONTyped(json, false);
}

export function DefectUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefectUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'actualResult': !exists(json, 'actual_result') ? undefined : json['actual_result'],
        'severity': !exists(json, 'severity') ? undefined : json['severity'],
        'milestoneId': !exists(json, 'milestone_id') ? undefined : json['milestone_id'],
        'attachments': !exists(json, 'attachments') ? undefined : json['attachments'],
        'customField': !exists(json, 'custom_field') ? undefined : json['custom_field'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function DefectUpdateToJSON(value?: DefectUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'actual_result': value.actualResult,
        'severity': value.severity,
        'milestone_id': value.milestoneId,
        'attachments': value.attachments,
        'custom_field': value.customField,
        'tags': value.tags,
    };
}

