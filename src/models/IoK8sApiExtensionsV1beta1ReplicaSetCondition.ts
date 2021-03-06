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
 * @interface IoK8sApiExtensionsV1beta1ReplicaSetCondition
 */
export interface IoK8sApiExtensionsV1beta1ReplicaSetCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiExtensionsV1beta1ReplicaSetCondition
     */
    lastTransitionTime?: Date;
    /**
     * A human readable message indicating details about the transition.
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1ReplicaSetCondition
     */
    message?: string;
    /**
     * The reason for the condition\'s last transition.
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1ReplicaSetCondition
     */
    reason?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1ReplicaSetCondition
     */
    status: string;
    /**
     * Type of replica set condition.
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1ReplicaSetCondition
     */
    type: string;
}

export function IoK8sApiExtensionsV1beta1ReplicaSetConditionFromJSON(json: any): IoK8sApiExtensionsV1beta1ReplicaSetCondition {
    return {
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : new Date(json['lastTransitionTime']),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function IoK8sApiExtensionsV1beta1ReplicaSetConditionToJSON(value?: IoK8sApiExtensionsV1beta1ReplicaSetCondition): any {
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


