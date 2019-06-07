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
 * NodeCondition contains condition information for a node.
 * @export
 * @interface IoK8sApiCoreV1NodeCondition
 */
export interface IoK8sApiCoreV1NodeCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiCoreV1NodeCondition
     */
    lastHeartbeatTime?: Date;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiCoreV1NodeCondition
     */
    lastTransitionTime?: Date;
    /**
     * Human readable message indicating details about last transition.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeCondition
     */
    message?: string;
    /**
     * (brief) reason for the condition\'s last transition.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeCondition
     */
    reason?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeCondition
     */
    status: string;
    /**
     * Type of node condition.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeCondition
     */
    type: string;
}

export function IoK8sApiCoreV1NodeConditionFromJSON(json: any): IoK8sApiCoreV1NodeCondition {
    return {
        'lastHeartbeatTime': !exists(json, 'lastHeartbeatTime') ? undefined : new Date(json['lastHeartbeatTime']),
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : new Date(json['lastTransitionTime']),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function IoK8sApiCoreV1NodeConditionToJSON(value?: IoK8sApiCoreV1NodeCondition): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'lastHeartbeatTime': value.lastHeartbeatTime === undefined ? undefined : value.lastHeartbeatTime.toISOString(),
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : value.lastTransitionTime.toISOString(),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}


