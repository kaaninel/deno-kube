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
 * IPBlock describes a particular CIDR (Ex. \"192.168.1.1/24\") that is allowed to the pods matched by a NetworkPolicySpec\'s podSelector. The except entry describes CIDRs that should not be included within this rule.
 * @export
 * @interface IoK8sApiNetworkingV1IPBlock
 */
export interface IoK8sApiNetworkingV1IPBlock {
    /**
     * CIDR is a string representing the IP Block Valid examples are \"192.168.1.1/24\"
     * @type {string}
     * @memberof IoK8sApiNetworkingV1IPBlock
     */
    cidr: string;
    /**
     * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are \"192.168.1.1/24\" Except values will be rejected if they are outside the CIDR range
     * @type {Array<string>}
     * @memberof IoK8sApiNetworkingV1IPBlock
     */
    except?: Array<string>;
}

export function IoK8sApiNetworkingV1IPBlockFromJSON(json: any): IoK8sApiNetworkingV1IPBlock {
    return {
        'cidr': json['cidr'],
        'except': !exists(json, 'except') ? undefined : json['except'],
    };
}

export function IoK8sApiNetworkingV1IPBlockToJSON(value?: IoK8sApiNetworkingV1IPBlock): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'cidr': value.cidr,
        'except': value.except,
    };
}


