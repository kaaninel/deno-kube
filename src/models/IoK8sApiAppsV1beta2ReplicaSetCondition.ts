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
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 * @export
 * @interface IoK8sApiAppsV1beta2ReplicaSetCondition
 */
export interface IoK8sApiAppsV1beta2ReplicaSetCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiAppsV1beta2ReplicaSetCondition
     */
    lastTransitionTime?: Date;
    /**
     * A human readable message indicating details about the transition.
     * @type {string}
     * @memberof IoK8sApiAppsV1beta2ReplicaSetCondition
     */
    message?: string;
    /**
     * The reason for the condition\'s last transition.
     * @type {string}
     * @memberof IoK8sApiAppsV1beta2ReplicaSetCondition
     */
    reason?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     * @type {string}
     * @memberof IoK8sApiAppsV1beta2ReplicaSetCondition
     */
    status: string;
    /**
     * Type of replica set condition.
     * @type {string}
     * @memberof IoK8sApiAppsV1beta2ReplicaSetCondition
     */
    type: string;
}

export function IoK8sApiAppsV1beta2ReplicaSetConditionFromJSON(json: any): IoK8sApiAppsV1beta2ReplicaSetCondition {
    return {
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : new Date(json['lastTransitionTime']),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function IoK8sApiAppsV1beta2ReplicaSetConditionToJSON(value?: IoK8sApiAppsV1beta2ReplicaSetCondition): any {
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


