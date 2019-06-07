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
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 * @export
 * @interface IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition
 */
export interface IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition
     */
    lastTransitionTime?: Date;
    /**
     * message is a human-readable explanation containing details about the transition
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition
     */
    message?: string;
    /**
     * reason is the reason for the condition\'s last transition.
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition
     */
    reason?: string;
    /**
     * status is the status of the condition (True, False, Unknown)
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition
     */
    status: string;
    /**
     * type describes the current condition
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition
     */
    type: string;
}

export function IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerConditionFromJSON(json: any): IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition {
    return {
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : new Date(json['lastTransitionTime']),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerConditionToJSON(value?: IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : value.lastTransitionTime.toISOString(),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}


