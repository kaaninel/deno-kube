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
    IoK8sApiRbacV1beta1ClusterRoleBinding,
    IoK8sApiRbacV1beta1ClusterRoleBindingFromJSON,
    IoK8sApiRbacV1beta1ClusterRoleBindingToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 * @export
 * @interface IoK8sApiRbacV1beta1ClusterRoleBindingList
 */
export interface IoK8sApiRbacV1beta1ClusterRoleBindingList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiRbacV1beta1ClusterRoleBindingList
     */
    apiVersion?: string;
    /**
     * Items is a list of ClusterRoleBindings
     * @type {Array<IoK8sApiRbacV1beta1ClusterRoleBinding>}
     * @memberof IoK8sApiRbacV1beta1ClusterRoleBindingList
     */
    items: Array<IoK8sApiRbacV1beta1ClusterRoleBinding>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiRbacV1beta1ClusterRoleBindingList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiRbacV1beta1ClusterRoleBindingList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiRbacV1beta1ClusterRoleBindingListFromJSON(json: any): IoK8sApiRbacV1beta1ClusterRoleBindingList {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': (json['items'] as Array<any>).map(IoK8sApiRbacV1beta1ClusterRoleBindingFromJSON),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiRbacV1beta1ClusterRoleBindingListToJSON(value?: IoK8sApiRbacV1beta1ClusterRoleBindingList): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'items': (value.items as Array<any>).map(IoK8sApiRbacV1beta1ClusterRoleBindingToJSON),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}


