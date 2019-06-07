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
 * PodDNSConfigOption defines DNS resolver options of a pod.
 * @export
 * @interface IoK8sApiCoreV1PodDNSConfigOption
 */
export interface IoK8sApiCoreV1PodDNSConfigOption {
    /**
     * Required.
     * @type {string}
     * @memberof IoK8sApiCoreV1PodDNSConfigOption
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof IoK8sApiCoreV1PodDNSConfigOption
     */
    value?: string;
}

export function IoK8sApiCoreV1PodDNSConfigOptionFromJSON(json: any): IoK8sApiCoreV1PodDNSConfigOption {
    return {
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function IoK8sApiCoreV1PodDNSConfigOptionToJSON(value?: IoK8sApiCoreV1PodDNSConfigOption): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'name': value.name,
        'value': value.value,
    };
}


