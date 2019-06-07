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
    IoK8sApiExtensionsV1beta1IDRange,
    IoK8sApiExtensionsV1beta1IDRangeFromJSON,
    IoK8sApiExtensionsV1beta1IDRangeToJSON,
} from './';

/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsGroupStrategyOptions from policy API Group instead.
 * @export
 * @interface IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptions
 */
export interface IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptions {
    /**
     * ranges are the allowed ranges of gids that may be used. If you would like to force a single gid then supply a single range with the same start and end. Required for MustRunAs.
     * @type {Array<IoK8sApiExtensionsV1beta1IDRange>}
     * @memberof IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptions
     */
    ranges?: Array<IoK8sApiExtensionsV1beta1IDRange>;
    /**
     * rule is the strategy that will dictate the allowable RunAsGroup values that may be set.
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptions
     */
    rule: string;
}

export function IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptionsFromJSON(json: any): IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptions {
    return {
        'ranges': !exists(json, 'ranges') ? undefined : (json['ranges'] as Array<any>).map(IoK8sApiExtensionsV1beta1IDRangeFromJSON),
        'rule': json['rule'],
    };
}

export function IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptionsToJSON(value?: IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptions): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'ranges': value.ranges === undefined ? undefined : (value.ranges as Array<any>).map(IoK8sApiExtensionsV1beta1IDRangeToJSON),
        'rule': value.rule,
    };
}


