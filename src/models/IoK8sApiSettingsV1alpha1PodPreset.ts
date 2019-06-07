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
    IoK8sApiSettingsV1alpha1PodPresetSpec,
    IoK8sApiSettingsV1alpha1PodPresetSpecFromJSON,
    IoK8sApiSettingsV1alpha1PodPresetSpecToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * PodPreset is a policy resource that defines additional runtime requirements for a Pod.
 * @export
 * @interface IoK8sApiSettingsV1alpha1PodPreset
 */
export interface IoK8sApiSettingsV1alpha1PodPreset {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiSettingsV1alpha1PodPreset
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiSettingsV1alpha1PodPreset
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiSettingsV1alpha1PodPreset
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiSettingsV1alpha1PodPresetSpec}
     * @memberof IoK8sApiSettingsV1alpha1PodPreset
     */
    spec?: IoK8sApiSettingsV1alpha1PodPresetSpec;
}

export function IoK8sApiSettingsV1alpha1PodPresetFromJSON(json: any): IoK8sApiSettingsV1alpha1PodPreset {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiSettingsV1alpha1PodPresetSpecFromJSON(json['spec']),
    };
}

export function IoK8sApiSettingsV1alpha1PodPresetToJSON(value?: IoK8sApiSettingsV1alpha1PodPreset): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiSettingsV1alpha1PodPresetSpecToJSON(value.spec),
    };
}


