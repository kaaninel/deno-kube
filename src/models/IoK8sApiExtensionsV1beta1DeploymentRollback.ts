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
    IoK8sApiExtensionsV1beta1RollbackConfig,
    IoK8sApiExtensionsV1beta1RollbackConfigFromJSON,
    IoK8sApiExtensionsV1beta1RollbackConfigToJSON,
} from './index.ts';

/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 * @export
 * @interface IoK8sApiExtensionsV1beta1DeploymentRollback
 */
export interface IoK8sApiExtensionsV1beta1DeploymentRollback {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1DeploymentRollback
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1DeploymentRollback
     */
    kind?: string;
    /**
     * Required: This must match the Name of a deployment.
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1DeploymentRollback
     */
    name: string;
    /**
     * 
     * @type {IoK8sApiExtensionsV1beta1RollbackConfig}
     * @memberof IoK8sApiExtensionsV1beta1DeploymentRollback
     */
    rollbackTo: IoK8sApiExtensionsV1beta1RollbackConfig;
    /**
     * The annotations to be updated to a deployment
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiExtensionsV1beta1DeploymentRollback
     */
    updatedAnnotations?: { [key: string]: string; };
}

export function IoK8sApiExtensionsV1beta1DeploymentRollbackFromJSON(json: any): IoK8sApiExtensionsV1beta1DeploymentRollback {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'name': json['name'],
        'rollbackTo': IoK8sApiExtensionsV1beta1RollbackConfigFromJSON(json['rollbackTo']),
        'updatedAnnotations': !exists(json, 'updatedAnnotations') ? undefined : json['updatedAnnotations'],
    };
}

export function IoK8sApiExtensionsV1beta1DeploymentRollbackToJSON(value?: IoK8sApiExtensionsV1beta1DeploymentRollback): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'name': value.name,
        'rollbackTo': IoK8sApiExtensionsV1beta1RollbackConfigToJSON(value.rollbackTo),
        'updatedAnnotations': value.updatedAnnotations,
    };
}


