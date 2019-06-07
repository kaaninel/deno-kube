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
    IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    IoK8sApimachineryPkgApisMetaV1DeleteOptionsFromJSON,
    IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 * @export
 * @interface IoK8sApiPolicyV1beta1Eviction
 */
export interface IoK8sApiPolicyV1beta1Eviction {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiPolicyV1beta1Eviction
     */
    apiVersion?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1DeleteOptions}
     * @memberof IoK8sApiPolicyV1beta1Eviction
     */
    deleteOptions?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiPolicyV1beta1Eviction
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiPolicyV1beta1Eviction
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
}

export function IoK8sApiPolicyV1beta1EvictionFromJSON(json: any): IoK8sApiPolicyV1beta1Eviction {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'deleteOptions': !exists(json, 'deleteOptions') ? undefined : IoK8sApimachineryPkgApisMetaV1DeleteOptionsFromJSON(json['deleteOptions']),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiPolicyV1beta1EvictionToJSON(value?: IoK8sApiPolicyV1beta1Eviction): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'deleteOptions': IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON(value.deleteOptions),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
    };
}


