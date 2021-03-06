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
    IoK8sApiAppsV1beta1ScaleSpec,
    IoK8sApiAppsV1beta1ScaleSpecFromJSON,
    IoK8sApiAppsV1beta1ScaleSpecToJSON,
    IoK8sApiAppsV1beta1ScaleStatus,
    IoK8sApiAppsV1beta1ScaleStatusFromJSON,
    IoK8sApiAppsV1beta1ScaleStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './index.ts';

/**
 * Scale represents a scaling request for a resource.
 * @export
 * @interface IoK8sApiAppsV1beta1Scale
 */
export interface IoK8sApiAppsV1beta1Scale {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAppsV1beta1Scale
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAppsV1beta1Scale
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAppsV1beta1Scale
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiAppsV1beta1ScaleSpec}
     * @memberof IoK8sApiAppsV1beta1Scale
     */
    spec?: IoK8sApiAppsV1beta1ScaleSpec;
    /**
     * 
     * @type {IoK8sApiAppsV1beta1ScaleStatus}
     * @memberof IoK8sApiAppsV1beta1Scale
     */
    status?: IoK8sApiAppsV1beta1ScaleStatus;
}

export function IoK8sApiAppsV1beta1ScaleFromJSON(json: any): IoK8sApiAppsV1beta1Scale {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiAppsV1beta1ScaleSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiAppsV1beta1ScaleStatusFromJSON(json['status']),
    };
}

export function IoK8sApiAppsV1beta1ScaleToJSON(value?: IoK8sApiAppsV1beta1Scale): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiAppsV1beta1ScaleSpecToJSON(value.spec),
        'status': IoK8sApiAppsV1beta1ScaleStatusToJSON(value.status),
    };
}


