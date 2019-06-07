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
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 * @export
 * @interface IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement
 */
export interface IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement {
    /**
     * key is the label key that the selector applies to.
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement
     */
    key: string;
    /**
     * operator represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement
     */
    operator: string;
    /**
     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
     * @type {Array<string>}
     * @memberof IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement
     */
    values?: Array<string>;
}

export function IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementFromJSON(json: any): IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement {
    return {
        'key': json['key'],
        'operator': json['operator'],
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementToJSON(value?: IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'key': value.key,
        'operator': value.operator,
        'values': value.values,
    };
}


