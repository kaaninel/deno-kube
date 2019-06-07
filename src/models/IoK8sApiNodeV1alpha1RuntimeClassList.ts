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
    IoK8sApiNodeV1alpha1RuntimeClass,
    IoK8sApiNodeV1alpha1RuntimeClassFromJSON,
    IoK8sApiNodeV1alpha1RuntimeClassToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './index.ts';

/**
 * RuntimeClassList is a list of RuntimeClass objects.
 * @export
 * @interface IoK8sApiNodeV1alpha1RuntimeClassList
 */
export interface IoK8sApiNodeV1alpha1RuntimeClassList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiNodeV1alpha1RuntimeClassList
     */
    apiVersion?: string;
    /**
     * Items is a list of schema objects.
     * @type {Array<IoK8sApiNodeV1alpha1RuntimeClass>}
     * @memberof IoK8sApiNodeV1alpha1RuntimeClassList
     */
    items: Array<IoK8sApiNodeV1alpha1RuntimeClass>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiNodeV1alpha1RuntimeClassList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiNodeV1alpha1RuntimeClassList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiNodeV1alpha1RuntimeClassListFromJSON(json: any): IoK8sApiNodeV1alpha1RuntimeClassList {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': (json['items'] as Array<any>).map(IoK8sApiNodeV1alpha1RuntimeClassFromJSON),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiNodeV1alpha1RuntimeClassListToJSON(value?: IoK8sApiNodeV1alpha1RuntimeClassList): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'items': (value.items as Array<any>).map(IoK8sApiNodeV1alpha1RuntimeClassToJSON),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}


