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
    IoK8sApiCoordinationV1beta1Lease,
    IoK8sApiCoordinationV1beta1LeaseFromJSON,
    IoK8sApiCoordinationV1beta1LeaseToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * LeaseList is a list of Lease objects.
 * @export
 * @interface IoK8sApiCoordinationV1beta1LeaseList
 */
export interface IoK8sApiCoordinationV1beta1LeaseList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoordinationV1beta1LeaseList
     */
    apiVersion?: string;
    /**
     * Items is a list of schema objects.
     * @type {Array<IoK8sApiCoordinationV1beta1Lease>}
     * @memberof IoK8sApiCoordinationV1beta1LeaseList
     */
    items: Array<IoK8sApiCoordinationV1beta1Lease>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoordinationV1beta1LeaseList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiCoordinationV1beta1LeaseList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiCoordinationV1beta1LeaseListFromJSON(json: any): IoK8sApiCoordinationV1beta1LeaseList {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': (json['items'] as Array<any>).map(IoK8sApiCoordinationV1beta1LeaseFromJSON),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiCoordinationV1beta1LeaseListToJSON(value?: IoK8sApiCoordinationV1beta1LeaseList): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'items': (value.items as Array<any>).map(IoK8sApiCoordinationV1beta1LeaseToJSON),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}


