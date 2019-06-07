// tslint:disable
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.16.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 * @export
 * @interface IoK8sApiAuthorizationV1NonResourceAttributes
 */
export interface IoK8sApiAuthorizationV1NonResourceAttributes {
    /**
     * Path is the URL path of the request
     * @type {string}
     * @memberof IoK8sApiAuthorizationV1NonResourceAttributes
     */
    path?: string;
    /**
     * Verb is the standard HTTP verb
     * @type {string}
     * @memberof IoK8sApiAuthorizationV1NonResourceAttributes
     */
    verb?: string;
}

export function IoK8sApiAuthorizationV1NonResourceAttributesFromJSON(json: any): IoK8sApiAuthorizationV1NonResourceAttributes {
    return {
        'path': !exists(json, 'path') ? undefined : json['path'],
        'verb': !exists(json, 'verb') ? undefined : json['verb'],
    };
}

export function IoK8sApiAuthorizationV1NonResourceAttributesToJSON(value?: IoK8sApiAuthorizationV1NonResourceAttributes): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'path': value.path,
        'verb': value.verb,
    };
}


