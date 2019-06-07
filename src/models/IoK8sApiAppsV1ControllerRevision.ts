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
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
    IoK8sApimachineryPkgRuntimeRawExtension,
    IoK8sApimachineryPkgRuntimeRawExtensionFromJSON,
    IoK8sApimachineryPkgRuntimeRawExtensionToJSON,
} from './';

/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 * @export
 * @interface IoK8sApiAppsV1ControllerRevision
 */
export interface IoK8sApiAppsV1ControllerRevision {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAppsV1ControllerRevision
     */
    apiVersion?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgRuntimeRawExtension}
     * @memberof IoK8sApiAppsV1ControllerRevision
     */
    data?: IoK8sApimachineryPkgRuntimeRawExtension;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAppsV1ControllerRevision
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAppsV1ControllerRevision
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * Revision indicates the revision of the state represented by Data.
     * @type {number}
     * @memberof IoK8sApiAppsV1ControllerRevision
     */
    revision: number;
}

export function IoK8sApiAppsV1ControllerRevisionFromJSON(json: any): IoK8sApiAppsV1ControllerRevision {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'data': !exists(json, 'data') ? undefined : IoK8sApimachineryPkgRuntimeRawExtensionFromJSON(json['data']),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'revision': json['revision'],
    };
}

export function IoK8sApiAppsV1ControllerRevisionToJSON(value?: IoK8sApiAppsV1ControllerRevision): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'data': IoK8sApimachineryPkgRuntimeRawExtensionToJSON(value.data),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'revision': value.revision,
    };
}


