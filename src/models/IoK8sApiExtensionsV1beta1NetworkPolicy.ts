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
    IoK8sApiExtensionsV1beta1NetworkPolicySpec,
    IoK8sApiExtensionsV1beta1NetworkPolicySpecFromJSON,
    IoK8sApiExtensionsV1beta1NetworkPolicySpecToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods
 * @export
 * @interface IoK8sApiExtensionsV1beta1NetworkPolicy
 */
export interface IoK8sApiExtensionsV1beta1NetworkPolicy {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1NetworkPolicy
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1NetworkPolicy
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiExtensionsV1beta1NetworkPolicy
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiExtensionsV1beta1NetworkPolicySpec}
     * @memberof IoK8sApiExtensionsV1beta1NetworkPolicy
     */
    spec?: IoK8sApiExtensionsV1beta1NetworkPolicySpec;
}

export function IoK8sApiExtensionsV1beta1NetworkPolicyFromJSON(json: any): IoK8sApiExtensionsV1beta1NetworkPolicy {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiExtensionsV1beta1NetworkPolicySpecFromJSON(json['spec']),
    };
}

export function IoK8sApiExtensionsV1beta1NetworkPolicyToJSON(value?: IoK8sApiExtensionsV1beta1NetworkPolicy): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiExtensionsV1beta1NetworkPolicySpecToJSON(value.spec),
    };
}


