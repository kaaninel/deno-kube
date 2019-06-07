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
import {
    IoK8sApiPolicyV1beta1IDRange,
    IoK8sApiPolicyV1beta1IDRangeFromJSON,
    IoK8sApiPolicyV1beta1IDRangeToJSON,
} from './';

/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy.
 * @export
 * @interface IoK8sApiPolicyV1beta1RunAsUserStrategyOptions
 */
export interface IoK8sApiPolicyV1beta1RunAsUserStrategyOptions {
    /**
     * ranges are the allowed ranges of uids that may be used. If you would like to force a single uid then supply a single range with the same start and end. Required for MustRunAs.
     * @type {Array<IoK8sApiPolicyV1beta1IDRange>}
     * @memberof IoK8sApiPolicyV1beta1RunAsUserStrategyOptions
     */
    ranges?: Array<IoK8sApiPolicyV1beta1IDRange>;
    /**
     * rule is the strategy that will dictate the allowable RunAsUser values that may be set.
     * @type {string}
     * @memberof IoK8sApiPolicyV1beta1RunAsUserStrategyOptions
     */
    rule: string;
}

export function IoK8sApiPolicyV1beta1RunAsUserStrategyOptionsFromJSON(json: any): IoK8sApiPolicyV1beta1RunAsUserStrategyOptions {
    return {
        'ranges': !exists(json, 'ranges') ? undefined : (json['ranges'] as Array<any>).map(IoK8sApiPolicyV1beta1IDRangeFromJSON),
        'rule': json['rule'],
    };
}

export function IoK8sApiPolicyV1beta1RunAsUserStrategyOptionsToJSON(value?: IoK8sApiPolicyV1beta1RunAsUserStrategyOptions): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'ranges': value.ranges === undefined ? undefined : (value.ranges as Array<any>).map(IoK8sApiPolicyV1beta1IDRangeToJSON),
        'rule': value.rule,
    };
}


