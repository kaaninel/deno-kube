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
    IoK8sApiCoreV1SecretReference,
    IoK8sApiCoreV1SecretReferenceFromJSON,
    IoK8sApiCoreV1SecretReferenceToJSON,
} from './';

/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 * @export
 * @interface IoK8sApiCoreV1CinderPersistentVolumeSource
 */
export interface IoK8sApiCoreV1CinderPersistentVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
     * @type {string}
     * @memberof IoK8sApiCoreV1CinderPersistentVolumeSource
     */
    fsType?: string;
    /**
     * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
     * @type {boolean}
     * @memberof IoK8sApiCoreV1CinderPersistentVolumeSource
     */
    readOnly?: boolean;
    /**
     * 
     * @type {IoK8sApiCoreV1SecretReference}
     * @memberof IoK8sApiCoreV1CinderPersistentVolumeSource
     */
    secretRef?: IoK8sApiCoreV1SecretReference;
    /**
     * volume id used to identify the volume in cinder More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
     * @type {string}
     * @memberof IoK8sApiCoreV1CinderPersistentVolumeSource
     */
    volumeID: string;
}

export function IoK8sApiCoreV1CinderPersistentVolumeSourceFromJSON(json: any): IoK8sApiCoreV1CinderPersistentVolumeSource {
    return {
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretRef': !exists(json, 'secretRef') ? undefined : IoK8sApiCoreV1SecretReferenceFromJSON(json['secretRef']),
        'volumeID': json['volumeID'],
    };
}

export function IoK8sApiCoreV1CinderPersistentVolumeSourceToJSON(value?: IoK8sApiCoreV1CinderPersistentVolumeSource): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'fsType': value.fsType,
        'readOnly': value.readOnly,
        'secretRef': IoK8sApiCoreV1SecretReferenceToJSON(value.secretRef),
        'volumeID': value.volumeID,
    };
}

