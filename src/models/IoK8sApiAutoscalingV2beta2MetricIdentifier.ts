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
    IoK8sApimachineryPkgApisMetaV1LabelSelector,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './';

/**
 * MetricIdentifier defines the name and optionally selector for a metric
 * @export
 * @interface IoK8sApiAutoscalingV2beta2MetricIdentifier
 */
export interface IoK8sApiAutoscalingV2beta2MetricIdentifier {
    /**
     * name is the name of the given metric
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2beta2MetricIdentifier
     */
    name: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
     * @memberof IoK8sApiAutoscalingV2beta2MetricIdentifier
     */
    selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
}

export function IoK8sApiAutoscalingV2beta2MetricIdentifierFromJSON(json: any): IoK8sApiAutoscalingV2beta2MetricIdentifier {
    return {
        'name': json['name'],
        'selector': !exists(json, 'selector') ? undefined : IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['selector']),
    };
}

export function IoK8sApiAutoscalingV2beta2MetricIdentifierToJSON(value?: IoK8sApiAutoscalingV2beta2MetricIdentifier): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'name': value.name,
        'selector': IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.selector),
    };
}


