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
 * NodeAddress contains information for the node\'s address.
 * @export
 * @interface IoK8sApiCoreV1NodeAddress
 */
export interface IoK8sApiCoreV1NodeAddress {
    /**
     * The node address.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeAddress
     */
    address: string;
    /**
     * Node address type, one of Hostname, ExternalIP or InternalIP.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeAddress
     */
    type: string;
}

export function IoK8sApiCoreV1NodeAddressFromJSON(json: any): IoK8sApiCoreV1NodeAddress {
    return {
        'address': json['address'],
        'type': json['type'],
    };
}

export function IoK8sApiCoreV1NodeAddressToJSON(value?: IoK8sApiCoreV1NodeAddress): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'address': value.address,
        'type': value.type,
    };
}


