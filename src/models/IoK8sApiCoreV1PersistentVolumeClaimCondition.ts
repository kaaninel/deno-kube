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
 * PersistentVolumeClaimCondition contails details about state of pvc
 * @export
 * @interface IoK8sApiCoreV1PersistentVolumeClaimCondition
 */
export interface IoK8sApiCoreV1PersistentVolumeClaimCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimCondition
     */
    lastProbeTime?: Date;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimCondition
     */
    lastTransitionTime?: Date;
    /**
     * Human-readable message indicating details about last transition.
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimCondition
     */
    message?: string;
    /**
     * Unique, this should be a short, machine understandable string that gives the reason for condition\'s last transition. If it reports \"ResizeStarted\" that means the underlying persistent volume is being resized.
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimCondition
     */
    reason?: string;
    /**
     * 
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimCondition
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimCondition
     */
    type: string;
}

export function IoK8sApiCoreV1PersistentVolumeClaimConditionFromJSON(json: any): IoK8sApiCoreV1PersistentVolumeClaimCondition {
    return {
        'lastProbeTime': !exists(json, 'lastProbeTime') ? undefined : new Date(json['lastProbeTime']),
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : new Date(json['lastTransitionTime']),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function IoK8sApiCoreV1PersistentVolumeClaimConditionToJSON(value?: IoK8sApiCoreV1PersistentVolumeClaimCondition): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'lastProbeTime': value.lastProbeTime === undefined ? undefined : value.lastProbeTime.toISOString(),
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : value.lastTransitionTime.toISOString(),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}


