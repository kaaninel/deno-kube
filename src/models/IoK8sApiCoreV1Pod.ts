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
    IoK8sApiCoreV1PodSpec,
    IoK8sApiCoreV1PodSpecFromJSON,
    IoK8sApiCoreV1PodSpecToJSON,
    IoK8sApiCoreV1PodStatus,
    IoK8sApiCoreV1PodStatusFromJSON,
    IoK8sApiCoreV1PodStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
 * @export
 * @interface IoK8sApiCoreV1Pod
 */
export interface IoK8sApiCoreV1Pod {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1Pod
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1Pod
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiCoreV1Pod
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiCoreV1PodSpec}
     * @memberof IoK8sApiCoreV1Pod
     */
    spec?: IoK8sApiCoreV1PodSpec;
    /**
     * 
     * @type {IoK8sApiCoreV1PodStatus}
     * @memberof IoK8sApiCoreV1Pod
     */
    status?: IoK8sApiCoreV1PodStatus;
}

export function IoK8sApiCoreV1PodFromJSON(json: any): IoK8sApiCoreV1Pod {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiCoreV1PodSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiCoreV1PodStatusFromJSON(json['status']),
    };
}

export function IoK8sApiCoreV1PodToJSON(value?: IoK8sApiCoreV1Pod): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiCoreV1PodSpecToJSON(value.spec),
        'status': IoK8sApiCoreV1PodStatusToJSON(value.status),
    };
}


