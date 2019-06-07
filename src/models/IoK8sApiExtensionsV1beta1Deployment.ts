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
    IoK8sApiExtensionsV1beta1DeploymentSpec,
    IoK8sApiExtensionsV1beta1DeploymentSpecFromJSON,
    IoK8sApiExtensionsV1beta1DeploymentSpecToJSON,
    IoK8sApiExtensionsV1beta1DeploymentStatus,
    IoK8sApiExtensionsV1beta1DeploymentStatusFromJSON,
    IoK8sApiExtensionsV1beta1DeploymentStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './index.ts';

/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 * @export
 * @interface IoK8sApiExtensionsV1beta1Deployment
 */
export interface IoK8sApiExtensionsV1beta1Deployment {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1Deployment
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1Deployment
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiExtensionsV1beta1Deployment
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiExtensionsV1beta1DeploymentSpec}
     * @memberof IoK8sApiExtensionsV1beta1Deployment
     */
    spec?: IoK8sApiExtensionsV1beta1DeploymentSpec;
    /**
     * 
     * @type {IoK8sApiExtensionsV1beta1DeploymentStatus}
     * @memberof IoK8sApiExtensionsV1beta1Deployment
     */
    status?: IoK8sApiExtensionsV1beta1DeploymentStatus;
}

export function IoK8sApiExtensionsV1beta1DeploymentFromJSON(json: any): IoK8sApiExtensionsV1beta1Deployment {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiExtensionsV1beta1DeploymentSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiExtensionsV1beta1DeploymentStatusFromJSON(json['status']),
    };
}

export function IoK8sApiExtensionsV1beta1DeploymentToJSON(value?: IoK8sApiExtensionsV1beta1Deployment): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiExtensionsV1beta1DeploymentSpecToJSON(value.spec),
        'status': IoK8sApiExtensionsV1beta1DeploymentStatusToJSON(value.status),
    };
}


