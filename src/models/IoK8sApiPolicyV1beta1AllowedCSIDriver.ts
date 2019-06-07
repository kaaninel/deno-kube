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
 * AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used.
 * @export
 * @interface IoK8sApiPolicyV1beta1AllowedCSIDriver
 */
export interface IoK8sApiPolicyV1beta1AllowedCSIDriver {
    /**
     * Name is the registered name of the CSI driver
     * @type {string}
     * @memberof IoK8sApiPolicyV1beta1AllowedCSIDriver
     */
    name: string;
}

export function IoK8sApiPolicyV1beta1AllowedCSIDriverFromJSON(json: any): IoK8sApiPolicyV1beta1AllowedCSIDriver {
    return {
        'name': json['name'],
    };
}

export function IoK8sApiPolicyV1beta1AllowedCSIDriverToJSON(value?: IoK8sApiPolicyV1beta1AllowedCSIDriver): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'name': value.name,
    };
}


