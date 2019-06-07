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
    IoK8sApiCoreV1ReplicationControllerCondition,
    IoK8sApiCoreV1ReplicationControllerConditionFromJSON,
    IoK8sApiCoreV1ReplicationControllerConditionToJSON,
} from './';

/**
 * ReplicationControllerStatus represents the current status of a replication controller.
 * @export
 * @interface IoK8sApiCoreV1ReplicationControllerStatus
 */
export interface IoK8sApiCoreV1ReplicationControllerStatus {
    /**
     * The number of available replicas (ready for at least minReadySeconds) for this replication controller.
     * @type {number}
     * @memberof IoK8sApiCoreV1ReplicationControllerStatus
     */
    availableReplicas?: number;
    /**
     * Represents the latest available observations of a replication controller\'s current state.
     * @type {Array<IoK8sApiCoreV1ReplicationControllerCondition>}
     * @memberof IoK8sApiCoreV1ReplicationControllerStatus
     */
    conditions?: Array<IoK8sApiCoreV1ReplicationControllerCondition>;
    /**
     * The number of pods that have labels matching the labels of the pod template of the replication controller.
     * @type {number}
     * @memberof IoK8sApiCoreV1ReplicationControllerStatus
     */
    fullyLabeledReplicas?: number;
    /**
     * ObservedGeneration reflects the generation of the most recently observed replication controller.
     * @type {number}
     * @memberof IoK8sApiCoreV1ReplicationControllerStatus
     */
    observedGeneration?: number;
    /**
     * The number of ready replicas for this replication controller.
     * @type {number}
     * @memberof IoK8sApiCoreV1ReplicationControllerStatus
     */
    readyReplicas?: number;
    /**
     * Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
     * @type {number}
     * @memberof IoK8sApiCoreV1ReplicationControllerStatus
     */
    replicas: number;
}

export function IoK8sApiCoreV1ReplicationControllerStatusFromJSON(json: any): IoK8sApiCoreV1ReplicationControllerStatus {
    return {
        'availableReplicas': !exists(json, 'availableReplicas') ? undefined : json['availableReplicas'],
        'conditions': !exists(json, 'conditions') ? undefined : (json['conditions'] as Array<any>).map(IoK8sApiCoreV1ReplicationControllerConditionFromJSON),
        'fullyLabeledReplicas': !exists(json, 'fullyLabeledReplicas') ? undefined : json['fullyLabeledReplicas'],
        'observedGeneration': !exists(json, 'observedGeneration') ? undefined : json['observedGeneration'],
        'readyReplicas': !exists(json, 'readyReplicas') ? undefined : json['readyReplicas'],
        'replicas': json['replicas'],
    };
}

export function IoK8sApiCoreV1ReplicationControllerStatusToJSON(value?: IoK8sApiCoreV1ReplicationControllerStatus): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'availableReplicas': value.availableReplicas,
        'conditions': value.conditions === undefined ? undefined : (value.conditions as Array<any>).map(IoK8sApiCoreV1ReplicationControllerConditionToJSON),
        'fullyLabeledReplicas': value.fullyLabeledReplicas,
        'observedGeneration': value.observedGeneration,
        'readyReplicas': value.readyReplicas,
        'replicas': value.replicas,
    };
}


