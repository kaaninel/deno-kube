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
    IoK8sApiExtensionsV1beta1ReplicaSet,
    IoK8sApiExtensionsV1beta1ReplicaSetFromJSON,
    IoK8sApiExtensionsV1beta1ReplicaSetToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './index.ts';

/**
 * ReplicaSetList is a collection of ReplicaSets.
 * @export
 * @interface IoK8sApiExtensionsV1beta1ReplicaSetList
 */
export interface IoK8sApiExtensionsV1beta1ReplicaSetList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1ReplicaSetList
     */
    apiVersion?: string;
    /**
     * List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
     * @type {Array<IoK8sApiExtensionsV1beta1ReplicaSet>}
     * @memberof IoK8sApiExtensionsV1beta1ReplicaSetList
     */
    items: Array<IoK8sApiExtensionsV1beta1ReplicaSet>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1ReplicaSetList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiExtensionsV1beta1ReplicaSetList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiExtensionsV1beta1ReplicaSetListFromJSON(json: any): IoK8sApiExtensionsV1beta1ReplicaSetList {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': (json['items'] as Array<any>).map(IoK8sApiExtensionsV1beta1ReplicaSetFromJSON),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiExtensionsV1beta1ReplicaSetListToJSON(value?: IoK8sApiExtensionsV1beta1ReplicaSetList): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'items': (value.items as Array<any>).map(IoK8sApiExtensionsV1beta1ReplicaSetToJSON),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}


