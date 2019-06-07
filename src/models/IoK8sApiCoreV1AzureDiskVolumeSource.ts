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
/**
 * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
 * @export
 * @interface IoK8sApiCoreV1AzureDiskVolumeSource
 */
export interface IoK8sApiCoreV1AzureDiskVolumeSource {
    /**
     * Host Caching mode: None, Read Only, Read Write.
     * @type {string}
     * @memberof IoK8sApiCoreV1AzureDiskVolumeSource
     */
    cachingMode?: string;
    /**
     * The Name of the data disk in the blob storage
     * @type {string}
     * @memberof IoK8sApiCoreV1AzureDiskVolumeSource
     */
    diskName: string;
    /**
     * The URI the data disk in the blob storage
     * @type {string}
     * @memberof IoK8sApiCoreV1AzureDiskVolumeSource
     */
    diskURI: string;
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
     * @type {string}
     * @memberof IoK8sApiCoreV1AzureDiskVolumeSource
     */
    fsType?: string;
    /**
     * Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared
     * @type {string}
     * @memberof IoK8sApiCoreV1AzureDiskVolumeSource
     */
    kind?: string;
    /**
     * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1AzureDiskVolumeSource
     */
    readOnly?: boolean;
}

export function IoK8sApiCoreV1AzureDiskVolumeSourceFromJSON(json: any): IoK8sApiCoreV1AzureDiskVolumeSource {
    return {
        'cachingMode': !exists(json, 'cachingMode') ? undefined : json['cachingMode'],
        'diskName': json['diskName'],
        'diskURI': json['diskURI'],
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
    };
}

export function IoK8sApiCoreV1AzureDiskVolumeSourceToJSON(value?: IoK8sApiCoreV1AzureDiskVolumeSource): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'cachingMode': value.cachingMode,
        'diskName': value.diskName,
        'diskURI': value.diskURI,
        'fsType': value.fsType,
        'kind': value.kind,
        'readOnly': value.readOnly,
    };
}


