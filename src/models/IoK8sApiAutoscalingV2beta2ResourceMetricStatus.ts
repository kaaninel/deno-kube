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
import {
    IoK8sApiAutoscalingV2beta2MetricValueStatus,
    IoK8sApiAutoscalingV2beta2MetricValueStatusFromJSON,
    IoK8sApiAutoscalingV2beta2MetricValueStatusToJSON,
} from './index.ts';

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.
 * @export
 * @interface IoK8sApiAutoscalingV2beta2ResourceMetricStatus
 */
export interface IoK8sApiAutoscalingV2beta2ResourceMetricStatus {
    /**
     * 
     * @type {IoK8sApiAutoscalingV2beta2MetricValueStatus}
     * @memberof IoK8sApiAutoscalingV2beta2ResourceMetricStatus
     */
    current: IoK8sApiAutoscalingV2beta2MetricValueStatus;
    /**
     * Name is the name of the resource in question.
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2beta2ResourceMetricStatus
     */
    name: string;
}

export function IoK8sApiAutoscalingV2beta2ResourceMetricStatusFromJSON(json: any): IoK8sApiAutoscalingV2beta2ResourceMetricStatus {
    return {
        'current': IoK8sApiAutoscalingV2beta2MetricValueStatusFromJSON(json['current']),
        'name': json['name'],
    };
}

export function IoK8sApiAutoscalingV2beta2ResourceMetricStatusToJSON(value?: IoK8sApiAutoscalingV2beta2ResourceMetricStatus): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'current': IoK8sApiAutoscalingV2beta2MetricValueStatusToJSON(value.current),
        'name': value.name,
    };
}


