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
    IoK8sApiAppsV1StatefulSetCondition,
    IoK8sApiAppsV1StatefulSetConditionFromJSON,
    IoK8sApiAppsV1StatefulSetConditionToJSON,
} from './';

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 * @export
 * @interface IoK8sApiAppsV1StatefulSetStatus
 */
export interface IoK8sApiAppsV1StatefulSetStatus {
    /**
     * collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
     * @type {number}
     * @memberof IoK8sApiAppsV1StatefulSetStatus
     */
    collisionCount?: number;
    /**
     * Represents the latest available observations of a statefulset\'s current state.
     * @type {Array<IoK8sApiAppsV1StatefulSetCondition>}
     * @memberof IoK8sApiAppsV1StatefulSetStatus
     */
    conditions?: Array<IoK8sApiAppsV1StatefulSetCondition>;
    /**
     * currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
     * @type {number}
     * @memberof IoK8sApiAppsV1StatefulSetStatus
     */
    currentReplicas?: number;
    /**
     * currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
     * @type {string}
     * @memberof IoK8sApiAppsV1StatefulSetStatus
     */
    currentRevision?: string;
    /**
     * observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet\'s generation, which is updated on mutation by the API Server.
     * @type {number}
     * @memberof IoK8sApiAppsV1StatefulSetStatus
     */
    observedGeneration?: number;
    /**
     * readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition.
     * @type {number}
     * @memberof IoK8sApiAppsV1StatefulSetStatus
     */
    readyReplicas?: number;
    /**
     * replicas is the number of Pods created by the StatefulSet controller.
     * @type {number}
     * @memberof IoK8sApiAppsV1StatefulSetStatus
     */
    replicas: number;
    /**
     * updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
     * @type {string}
     * @memberof IoK8sApiAppsV1StatefulSetStatus
     */
    updateRevision?: string;
    /**
     * updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
     * @type {number}
     * @memberof IoK8sApiAppsV1StatefulSetStatus
     */
    updatedReplicas?: number;
}

export function IoK8sApiAppsV1StatefulSetStatusFromJSON(json: any): IoK8sApiAppsV1StatefulSetStatus {
    return {
        'collisionCount': !exists(json, 'collisionCount') ? undefined : json['collisionCount'],
        'conditions': !exists(json, 'conditions') ? undefined : (json['conditions'] as Array<any>).map(IoK8sApiAppsV1StatefulSetConditionFromJSON),
        'currentReplicas': !exists(json, 'currentReplicas') ? undefined : json['currentReplicas'],
        'currentRevision': !exists(json, 'currentRevision') ? undefined : json['currentRevision'],
        'observedGeneration': !exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
        'readyReplicas': !exists(json, 'readyReplicas') ? undefined : json['readyReplicas'],
        'replicas': json['replicas'],
        'updateRevision': !exists(json, 'updateRevision') ? undefined : json['updateRevision'],
        'updatedReplicas': !exists(json, 'updatedReplicas') ? undefined : json['updatedReplicas'],
    };
}

export function IoK8sApiAppsV1StatefulSetStatusToJSON(value?: IoK8sApiAppsV1StatefulSetStatus): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'collisionCount': value.collisionCount,
        'conditions': value.conditions === undefined ? undefined : (value.conditions as Array<any>).map(IoK8sApiAppsV1StatefulSetConditionToJSON),
        'currentReplicas': value.currentReplicas,
        'currentRevision': value.currentRevision,
        'observedGeneration': value.observedGeneration,
        'readyReplicas': value.readyReplicas,
        'replicas': value.replicas,
        'updateRevision': value.updateRevision,
        'updatedReplicas': value.updatedReplicas,
    };
}

