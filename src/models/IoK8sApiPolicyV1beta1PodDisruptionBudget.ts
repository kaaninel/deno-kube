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
import {
    IoK8sApiPolicyV1beta1PodDisruptionBudgetSpec,
    IoK8sApiPolicyV1beta1PodDisruptionBudgetSpecFromJSON,
    IoK8sApiPolicyV1beta1PodDisruptionBudgetSpecToJSON,
    IoK8sApiPolicyV1beta1PodDisruptionBudgetStatus,
    IoK8sApiPolicyV1beta1PodDisruptionBudgetStatusFromJSON,
    IoK8sApiPolicyV1beta1PodDisruptionBudgetStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './index.ts';

/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 * @export
 * @interface IoK8sApiPolicyV1beta1PodDisruptionBudget
 */
export interface IoK8sApiPolicyV1beta1PodDisruptionBudget {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiPolicyV1beta1PodDisruptionBudget
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiPolicyV1beta1PodDisruptionBudget
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiPolicyV1beta1PodDisruptionBudget
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiPolicyV1beta1PodDisruptionBudgetSpec}
     * @memberof IoK8sApiPolicyV1beta1PodDisruptionBudget
     */
    spec?: IoK8sApiPolicyV1beta1PodDisruptionBudgetSpec;
    /**
     * 
     * @type {IoK8sApiPolicyV1beta1PodDisruptionBudgetStatus}
     * @memberof IoK8sApiPolicyV1beta1PodDisruptionBudget
     */
    status?: IoK8sApiPolicyV1beta1PodDisruptionBudgetStatus;
}

export function IoK8sApiPolicyV1beta1PodDisruptionBudgetFromJSON(json: any): IoK8sApiPolicyV1beta1PodDisruptionBudget {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiPolicyV1beta1PodDisruptionBudgetSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiPolicyV1beta1PodDisruptionBudgetStatusFromJSON(json['status']),
    };
}

export function IoK8sApiPolicyV1beta1PodDisruptionBudgetToJSON(value?: IoK8sApiPolicyV1beta1PodDisruptionBudget): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiPolicyV1beta1PodDisruptionBudgetSpecToJSON(value.spec),
        'status': IoK8sApiPolicyV1beta1PodDisruptionBudgetStatusToJSON(value.status),
    };
}


