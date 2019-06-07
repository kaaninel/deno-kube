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
    IoK8sApiAutoscalingV2beta1ExternalMetricStatus,
    IoK8sApiAutoscalingV2beta1ExternalMetricStatusFromJSON,
    IoK8sApiAutoscalingV2beta1ExternalMetricStatusToJSON,
    IoK8sApiAutoscalingV2beta1ObjectMetricStatus,
    IoK8sApiAutoscalingV2beta1ObjectMetricStatusFromJSON,
    IoK8sApiAutoscalingV2beta1ObjectMetricStatusToJSON,
    IoK8sApiAutoscalingV2beta1PodsMetricStatus,
    IoK8sApiAutoscalingV2beta1PodsMetricStatusFromJSON,
    IoK8sApiAutoscalingV2beta1PodsMetricStatusToJSON,
    IoK8sApiAutoscalingV2beta1ResourceMetricStatus,
    IoK8sApiAutoscalingV2beta1ResourceMetricStatusFromJSON,
    IoK8sApiAutoscalingV2beta1ResourceMetricStatusToJSON,
} from './';

/**
 * MetricStatus describes the last-read state of a single metric.
 * @export
 * @interface IoK8sApiAutoscalingV2beta1MetricStatus
 */
export interface IoK8sApiAutoscalingV2beta1MetricStatus {
    /**
     * 
     * @type {IoK8sApiAutoscalingV2beta1ExternalMetricStatus}
     * @memberof IoK8sApiAutoscalingV2beta1MetricStatus
     */
    external?: IoK8sApiAutoscalingV2beta1ExternalMetricStatus;
    /**
     * 
     * @type {IoK8sApiAutoscalingV2beta1ObjectMetricStatus}
     * @memberof IoK8sApiAutoscalingV2beta1MetricStatus
     */
    object?: IoK8sApiAutoscalingV2beta1ObjectMetricStatus;
    /**
     * 
     * @type {IoK8sApiAutoscalingV2beta1PodsMetricStatus}
     * @memberof IoK8sApiAutoscalingV2beta1MetricStatus
     */
    pods?: IoK8sApiAutoscalingV2beta1PodsMetricStatus;
    /**
     * 
     * @type {IoK8sApiAutoscalingV2beta1ResourceMetricStatus}
     * @memberof IoK8sApiAutoscalingV2beta1MetricStatus
     */
    resource?: IoK8sApiAutoscalingV2beta1ResourceMetricStatus;
    /**
     * type is the type of metric source.  It will be one of \"Object\", \"Pods\" or \"Resource\", each corresponds to a matching field in the object.
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2beta1MetricStatus
     */
    type: string;
}

export function IoK8sApiAutoscalingV2beta1MetricStatusFromJSON(json: any): IoK8sApiAutoscalingV2beta1MetricStatus {
    return {
        'external': !exists(json, 'external') ? undefined : IoK8sApiAutoscalingV2beta1ExternalMetricStatusFromJSON(json['external']),
        'object': !exists(json, 'object') ? undefined : IoK8sApiAutoscalingV2beta1ObjectMetricStatusFromJSON(json['object']),
        'pods': !exists(json, 'pods') ? undefined : IoK8sApiAutoscalingV2beta1PodsMetricStatusFromJSON(json['pods']),
        'resource': !exists(json, 'resource') ? undefined : IoK8sApiAutoscalingV2beta1ResourceMetricStatusFromJSON(json['resource']),
        'type': json['type'],
    };
}

export function IoK8sApiAutoscalingV2beta1MetricStatusToJSON(value?: IoK8sApiAutoscalingV2beta1MetricStatus): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'external': IoK8sApiAutoscalingV2beta1ExternalMetricStatusToJSON(value.external),
        'object': IoK8sApiAutoscalingV2beta1ObjectMetricStatusToJSON(value.object),
        'pods': IoK8sApiAutoscalingV2beta1PodsMetricStatusToJSON(value.pods),
        'resource': IoK8sApiAutoscalingV2beta1ResourceMetricStatusToJSON(value.resource),
        'type': value.type,
    };
}

