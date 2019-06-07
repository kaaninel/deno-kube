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
    IoK8sApiCoreV1LocalObjectReference,
    IoK8sApiCoreV1LocalObjectReferenceFromJSON,
    IoK8sApiCoreV1LocalObjectReferenceToJSON,
} from './index.ts';

/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface IoK8sApiCoreV1CephFSVolumeSource
 */
export interface IoK8sApiCoreV1CephFSVolumeSource {
    /**
     * Required: Monitors is a collection of Ceph monitors More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1CephFSVolumeSource
     */
    monitors: Array<string>;
    /**
     * Optional: Used as the mounted root, rather than the full Ceph tree, default is /
     * @type {string}
     * @memberof IoK8sApiCoreV1CephFSVolumeSource
     */
    path?: string;
    /**
     * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     * @type {boolean}
     * @memberof IoK8sApiCoreV1CephFSVolumeSource
     */
    readOnly?: boolean;
    /**
     * Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     * @type {string}
     * @memberof IoK8sApiCoreV1CephFSVolumeSource
     */
    secretFile?: string;
    /**
     * 
     * @type {IoK8sApiCoreV1LocalObjectReference}
     * @memberof IoK8sApiCoreV1CephFSVolumeSource
     */
    secretRef?: IoK8sApiCoreV1LocalObjectReference;
    /**
     * Optional: User is the rados user name, default is admin More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     * @type {string}
     * @memberof IoK8sApiCoreV1CephFSVolumeSource
     */
    user?: string;
}

export function IoK8sApiCoreV1CephFSVolumeSourceFromJSON(json: any): IoK8sApiCoreV1CephFSVolumeSource {
    return {
        'monitors': json['monitors'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretFile': !exists(json, 'secretFile') ? undefined : json['secretFile'],
        'secretRef': !exists(json, 'secretRef') ? undefined : IoK8sApiCoreV1LocalObjectReferenceFromJSON(json['secretRef']),
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function IoK8sApiCoreV1CephFSVolumeSourceToJSON(value?: IoK8sApiCoreV1CephFSVolumeSource): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'monitors': value.monitors,
        'path': value.path,
        'readOnly': value.readOnly,
        'secretFile': value.secretFile,
        'secretRef': IoK8sApiCoreV1LocalObjectReferenceToJSON(value.secretRef),
        'user': value.user,
    };
}


