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
    IoK8sApiAppsV1beta2StatefulSetSpec,
    IoK8sApiAppsV1beta2StatefulSetSpecFromJSON,
    IoK8sApiAppsV1beta2StatefulSetSpecToJSON,
    IoK8sApiAppsV1beta2StatefulSetStatus,
    IoK8sApiAppsV1beta2StatefulSetStatusFromJSON,
    IoK8sApiAppsV1beta2StatefulSetStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:  - Network: A single stable DNS and hostname.  - Storage: As many VolumeClaims as requested. The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 * @export
 * @interface IoK8sApiAppsV1beta2StatefulSet
 */
export interface IoK8sApiAppsV1beta2StatefulSet {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAppsV1beta2StatefulSet
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAppsV1beta2StatefulSet
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAppsV1beta2StatefulSet
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiAppsV1beta2StatefulSetSpec}
     * @memberof IoK8sApiAppsV1beta2StatefulSet
     */
    spec?: IoK8sApiAppsV1beta2StatefulSetSpec;
    /**
     * 
     * @type {IoK8sApiAppsV1beta2StatefulSetStatus}
     * @memberof IoK8sApiAppsV1beta2StatefulSet
     */
    status?: IoK8sApiAppsV1beta2StatefulSetStatus;
}

export function IoK8sApiAppsV1beta2StatefulSetFromJSON(json: any): IoK8sApiAppsV1beta2StatefulSet {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiAppsV1beta2StatefulSetSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiAppsV1beta2StatefulSetStatusFromJSON(json['status']),
    };
}

export function IoK8sApiAppsV1beta2StatefulSetToJSON(value?: IoK8sApiAppsV1beta2StatefulSet): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiAppsV1beta2StatefulSetSpecToJSON(value.spec),
        'status': IoK8sApiAppsV1beta2StatefulSetStatusToJSON(value.status),
    };
}


