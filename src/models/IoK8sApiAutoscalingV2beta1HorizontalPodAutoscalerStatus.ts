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
    IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition,
    IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerConditionFromJSON,
    IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerConditionToJSON,
    IoK8sApiAutoscalingV2beta1MetricStatus,
    IoK8sApiAutoscalingV2beta1MetricStatusFromJSON,
    IoK8sApiAutoscalingV2beta1MetricStatusToJSON,
} from './';

/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 * @export
 * @interface IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus
 */
export interface IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus {
    /**
     * conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
     * @type {Array<IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition>}
     * @memberof IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus
     */
    conditions: Array<IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition>;
    /**
     * currentMetrics is the last read state of the metrics used by this autoscaler.
     * @type {Array<IoK8sApiAutoscalingV2beta1MetricStatus>}
     * @memberof IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus
     */
    currentMetrics?: Array<IoK8sApiAutoscalingV2beta1MetricStatus>;
    /**
     * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
     * @type {number}
     * @memberof IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus
     */
    currentReplicas: number;
    /**
     * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
     * @type {number}
     * @memberof IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus
     */
    desiredReplicas: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus
     */
    lastScaleTime?: Date;
    /**
     * observedGeneration is the most recent generation observed by this autoscaler.
     * @type {number}
     * @memberof IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus
     */
    observedGeneration?: number;
}

export function IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatusFromJSON(json: any): IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus {
    return {
        'conditions': (json['conditions'] as Array<any>).map(IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerConditionFromJSON),
        'currentMetrics': !exists(json, 'currentMetrics') ? undefined : (json['currentMetrics'] as Array<any>).map(IoK8sApiAutoscalingV2beta1MetricStatusFromJSON),
        'currentReplicas': json['currentReplicas'],
        'desiredReplicas': json['desiredReplicas'],
        'lastScaleTime': !exists(json, 'lastScaleTime') ? undefined : new Date(json['lastScaleTime']),
        'observedGeneration': !exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
    };
}

export function IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatusToJSON(value?: IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'conditions': (value.conditions as Array<any>).map(IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerConditionToJSON),
        'currentMetrics': value.currentMetrics === undefined ? undefined : (value.currentMetrics as Array<any>).map(IoK8sApiAutoscalingV2beta1MetricStatusToJSON),
        'currentReplicas': value.currentReplicas,
        'desiredReplicas': value.desiredReplicas,
        'lastScaleTime': value.lastScaleTime === undefined ? undefined : value.lastScaleTime.toISOString(),
        'observedGeneration': value.observedGeneration,
    };
}

