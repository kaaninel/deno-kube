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
    IoK8sApiAuditregistrationV1alpha1AuditSinkSpec,
    IoK8sApiAuditregistrationV1alpha1AuditSinkSpecFromJSON,
    IoK8sApiAuditregistrationV1alpha1AuditSinkSpecToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * AuditSink represents a cluster level audit sink
 * @export
 * @interface IoK8sApiAuditregistrationV1alpha1AuditSink
 */
export interface IoK8sApiAuditregistrationV1alpha1AuditSink {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAuditregistrationV1alpha1AuditSink
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAuditregistrationV1alpha1AuditSink
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAuditregistrationV1alpha1AuditSink
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiAuditregistrationV1alpha1AuditSinkSpec}
     * @memberof IoK8sApiAuditregistrationV1alpha1AuditSink
     */
    spec?: IoK8sApiAuditregistrationV1alpha1AuditSinkSpec;
}

export function IoK8sApiAuditregistrationV1alpha1AuditSinkFromJSON(json: any): IoK8sApiAuditregistrationV1alpha1AuditSink {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiAuditregistrationV1alpha1AuditSinkSpecFromJSON(json['spec']),
    };
}

export function IoK8sApiAuditregistrationV1alpha1AuditSinkToJSON(value?: IoK8sApiAuditregistrationV1alpha1AuditSink): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiAuditregistrationV1alpha1AuditSinkSpecToJSON(value.spec),
    };
}


