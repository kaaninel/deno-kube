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
    IoK8sApiExtensionsV1beta1ReplicaSetSpec,
    IoK8sApiExtensionsV1beta1ReplicaSetSpecFromJSON,
    IoK8sApiExtensionsV1beta1ReplicaSetSpecToJSON,
    IoK8sApiExtensionsV1beta1ReplicaSetStatus,
    IoK8sApiExtensionsV1beta1ReplicaSetStatusFromJSON,
    IoK8sApiExtensionsV1beta1ReplicaSetStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 * @export
 * @interface IoK8sApiExtensionsV1beta1ReplicaSet
 */
export interface IoK8sApiExtensionsV1beta1ReplicaSet {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1ReplicaSet
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1ReplicaSet
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiExtensionsV1beta1ReplicaSet
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiExtensionsV1beta1ReplicaSetSpec}
     * @memberof IoK8sApiExtensionsV1beta1ReplicaSet
     */
    spec?: IoK8sApiExtensionsV1beta1ReplicaSetSpec;
    /**
     * 
     * @type {IoK8sApiExtensionsV1beta1ReplicaSetStatus}
     * @memberof IoK8sApiExtensionsV1beta1ReplicaSet
     */
    status?: IoK8sApiExtensionsV1beta1ReplicaSetStatus;
}

export function IoK8sApiExtensionsV1beta1ReplicaSetFromJSON(json: any): IoK8sApiExtensionsV1beta1ReplicaSet {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiExtensionsV1beta1ReplicaSetSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiExtensionsV1beta1ReplicaSetStatusFromJSON(json['status']),
    };
}

export function IoK8sApiExtensionsV1beta1ReplicaSetToJSON(value?: IoK8sApiExtensionsV1beta1ReplicaSet): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiExtensionsV1beta1ReplicaSetSpecToJSON(value.spec),
        'status': IoK8sApiExtensionsV1beta1ReplicaSetStatusToJSON(value.status),
    };
}

