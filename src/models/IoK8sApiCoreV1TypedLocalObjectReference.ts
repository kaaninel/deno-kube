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

import { exists, mapValues } from '../runtime.ts';
/**
 * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
 * @export
 * @interface IoK8sApiCoreV1TypedLocalObjectReference
 */
export interface IoK8sApiCoreV1TypedLocalObjectReference {
    /**
     * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
     * @type {string}
     * @memberof IoK8sApiCoreV1TypedLocalObjectReference
     */
    apiGroup?: string;
    /**
     * Kind is the type of resource being referenced
     * @type {string}
     * @memberof IoK8sApiCoreV1TypedLocalObjectReference
     */
    kind: string;
    /**
     * Name is the name of resource being referenced
     * @type {string}
     * @memberof IoK8sApiCoreV1TypedLocalObjectReference
     */
    name: string;
}

export function IoK8sApiCoreV1TypedLocalObjectReferenceFromJSON(json: any): IoK8sApiCoreV1TypedLocalObjectReference {
    return {
        'apiGroup': !exists(json, 'apiGroup') ? undefined : json['apiGroup'],
        'kind': json['kind'],
        'name': json['name'],
    };
}

export function IoK8sApiCoreV1TypedLocalObjectReferenceToJSON(value?: IoK8sApiCoreV1TypedLocalObjectReference): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiGroup': value.apiGroup,
        'kind': value.kind,
        'name': value.name,
    };
}


