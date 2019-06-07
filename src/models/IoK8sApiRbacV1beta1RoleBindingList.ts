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
    IoK8sApiRbacV1beta1RoleBinding,
    IoK8sApiRbacV1beta1RoleBindingFromJSON,
    IoK8sApiRbacV1beta1RoleBindingToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * RoleBindingList is a collection of RoleBindings
 * @export
 * @interface IoK8sApiRbacV1beta1RoleBindingList
 */
export interface IoK8sApiRbacV1beta1RoleBindingList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiRbacV1beta1RoleBindingList
     */
    apiVersion?: string;
    /**
     * Items is a list of RoleBindings
     * @type {Array<IoK8sApiRbacV1beta1RoleBinding>}
     * @memberof IoK8sApiRbacV1beta1RoleBindingList
     */
    items: Array<IoK8sApiRbacV1beta1RoleBinding>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiRbacV1beta1RoleBindingList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiRbacV1beta1RoleBindingList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiRbacV1beta1RoleBindingListFromJSON(json: any): IoK8sApiRbacV1beta1RoleBindingList {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': (json['items'] as Array<any>).map(IoK8sApiRbacV1beta1RoleBindingFromJSON),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiRbacV1beta1RoleBindingListToJSON(value?: IoK8sApiRbacV1beta1RoleBindingList): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'items': (value.items as Array<any>).map(IoK8sApiRbacV1beta1RoleBindingToJSON),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}


