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
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. Deprecated: use HostPortRange from policy API Group instead.
 * @export
 * @interface IoK8sApiExtensionsV1beta1HostPortRange
 */
export interface IoK8sApiExtensionsV1beta1HostPortRange {
    /**
     * max is the end of the range, inclusive.
     * @type {number}
     * @memberof IoK8sApiExtensionsV1beta1HostPortRange
     */
    max: number;
    /**
     * min is the start of the range, inclusive.
     * @type {number}
     * @memberof IoK8sApiExtensionsV1beta1HostPortRange
     */
    min: number;
}

export function IoK8sApiExtensionsV1beta1HostPortRangeFromJSON(json: any): IoK8sApiExtensionsV1beta1HostPortRange {
    return {
        'max': json['max'],
        'min': json['min'],
    };
}

export function IoK8sApiExtensionsV1beta1HostPortRangeToJSON(value?: IoK8sApiExtensionsV1beta1HostPortRange): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'max': value.max,
        'min': value.min,
    };
}


