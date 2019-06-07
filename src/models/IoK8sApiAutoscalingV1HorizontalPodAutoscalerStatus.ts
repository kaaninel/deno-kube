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
 * current status of a horizontal pod autoscaler
 * @export
 * @interface IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus
 */
export interface IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus {
    /**
     * current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU.
     * @type {number}
     * @memberof IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus
     */
    currentCPUUtilizationPercentage?: number;
    /**
     * current number of replicas of pods managed by this autoscaler.
     * @type {number}
     * @memberof IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus
     */
    currentReplicas: number;
    /**
     * desired number of replicas of pods managed by this autoscaler.
     * @type {number}
     * @memberof IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus
     */
    desiredReplicas: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus
     */
    lastScaleTime?: Date;
    /**
     * most recent generation observed by this autoscaler.
     * @type {number}
     * @memberof IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus
     */
    observedGeneration?: number;
}

export function IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusFromJSON(json: any): IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus {
    return {
        'currentCPUUtilizationPercentage': !exists(json, 'currentCPUUtilizationPercentage') ? undefined : json['currentCPUUtilizationPercentage'],
        'currentReplicas': json['currentReplicas'],
        'desiredReplicas': json['desiredReplicas'],
        'lastScaleTime': !exists(json, 'lastScaleTime') ? undefined : new Date(json['lastScaleTime']),
        'observedGeneration': !exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
    };
}

export function IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusToJSON(value?: IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'currentCPUUtilizationPercentage': value.currentCPUUtilizationPercentage,
        'currentReplicas': value.currentReplicas,
        'desiredReplicas': value.desiredReplicas,
        'lastScaleTime': value.lastScaleTime === undefined ? undefined : value.lastScaleTime.toISOString(),
        'observedGeneration': value.observedGeneration,
    };
}


