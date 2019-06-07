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
    IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration,
    IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationFromJSON,
    IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationList
 */
export interface IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationList
     */
    apiVersion?: string;
    /**
     * List of MutatingWebhookConfiguration.
     * @type {Array<IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration>}
     * @memberof IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationList
     */
    items: Array<IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfiguration>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationListFromJSON(json: any): IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationList {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': (json['items'] as Array<any>).map(IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationFromJSON),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationListToJSON(value?: IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationList): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'items': (value.items as Array<any>).map(IoK8sApiAdmissionregistrationV1beta1MutatingWebhookConfigurationToJSON),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}


