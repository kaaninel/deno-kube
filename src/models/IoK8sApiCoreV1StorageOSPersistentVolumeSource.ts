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
    IoK8sApiCoreV1ObjectReference,
    IoK8sApiCoreV1ObjectReferenceFromJSON,
    IoK8sApiCoreV1ObjectReferenceToJSON,
} from './';

/**
 * Represents a StorageOS persistent volume resource.
 * @export
 * @interface IoK8sApiCoreV1StorageOSPersistentVolumeSource
 */
export interface IoK8sApiCoreV1StorageOSPersistentVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
     * @type {string}
     * @memberof IoK8sApiCoreV1StorageOSPersistentVolumeSource
     */
    fsType?: string;
    /**
     * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1StorageOSPersistentVolumeSource
     */
    readOnly?: boolean;
    /**
     * 
     * @type {IoK8sApiCoreV1ObjectReference}
     * @memberof IoK8sApiCoreV1StorageOSPersistentVolumeSource
     */
    secretRef?: IoK8sApiCoreV1ObjectReference;
    /**
     * VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
     * @type {string}
     * @memberof IoK8sApiCoreV1StorageOSPersistentVolumeSource
     */
    volumeName?: string;
    /**
     * VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod\'s namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to \"default\" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
     * @type {string}
     * @memberof IoK8sApiCoreV1StorageOSPersistentVolumeSource
     */
    volumeNamespace?: string;
}

export function IoK8sApiCoreV1StorageOSPersistentVolumeSourceFromJSON(json: any): IoK8sApiCoreV1StorageOSPersistentVolumeSource {
    return {
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'secretRef': !exists(json, 'secretRef') ? undefined : IoK8sApiCoreV1ObjectReferenceFromJSON(json['secretRef']),
        'volumeName': !exists(json, 'volumeName') ? undefined : json['volumeName'],
        'volumeNamespace': !exists(json, 'volumeNamespace') ? undefined : json['volumeNamespace'],
    };
}

export function IoK8sApiCoreV1StorageOSPersistentVolumeSourceToJSON(value?: IoK8sApiCoreV1StorageOSPersistentVolumeSource): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'fsType': value.fsType,
        'readOnly': value.readOnly,
        'secretRef': IoK8sApiCoreV1ObjectReferenceToJSON(value.secretRef),
        'volumeName': value.volumeName,
        'volumeNamespace': value.volumeNamespace,
    };
}


