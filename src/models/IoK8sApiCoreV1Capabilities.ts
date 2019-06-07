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
 * Adds and removes POSIX capabilities from running containers.
 * @export
 * @interface IoK8sApiCoreV1Capabilities
 */
export interface IoK8sApiCoreV1Capabilities {
    /**
     * Added capabilities
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1Capabilities
     */
    add?: Array<string>;
    /**
     * Removed capabilities
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1Capabilities
     */
    drop?: Array<string>;
}

export function IoK8sApiCoreV1CapabilitiesFromJSON(json: any): IoK8sApiCoreV1Capabilities {
    return {
        'add': !exists(json, 'add') ? undefined : json['add'],
        'drop': !exists(json, 'drop') ? undefined : json['drop'],
    };
}

export function IoK8sApiCoreV1CapabilitiesToJSON(value?: IoK8sApiCoreV1Capabilities): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'add': value.add,
        'drop': value.drop,
    };
}


