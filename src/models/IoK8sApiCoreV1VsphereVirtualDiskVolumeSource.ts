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
/**
 * Represents a vSphere volume resource.
 * @export
 * @interface IoK8sApiCoreV1VsphereVirtualDiskVolumeSource
 */
export interface IoK8sApiCoreV1VsphereVirtualDiskVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
     * @type {string}
     * @memberof IoK8sApiCoreV1VsphereVirtualDiskVolumeSource
     */
    fsType?: string;
    /**
     * Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
     * @type {string}
     * @memberof IoK8sApiCoreV1VsphereVirtualDiskVolumeSource
     */
    storagePolicyID?: string;
    /**
     * Storage Policy Based Management (SPBM) profile name.
     * @type {string}
     * @memberof IoK8sApiCoreV1VsphereVirtualDiskVolumeSource
     */
    storagePolicyName?: string;
    /**
     * Path that identifies vSphere volume vmdk
     * @type {string}
     * @memberof IoK8sApiCoreV1VsphereVirtualDiskVolumeSource
     */
    volumePath: string;
}

export function IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceFromJSON(json: any): IoK8sApiCoreV1VsphereVirtualDiskVolumeSource {
    return {
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'storagePolicyID': !exists(json, 'storagePolicyID') ? undefined : json['storagePolicyID'],
        'storagePolicyName': !exists(json, 'storagePolicyName') ? undefined : json['storagePolicyName'],
        'volumePath': json['volumePath'],
    };
}

export function IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceToJSON(value?: IoK8sApiCoreV1VsphereVirtualDiskVolumeSource): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'fsType': value.fsType,
        'storagePolicyID': value.storagePolicyID,
        'storagePolicyName': value.storagePolicyName,
        'volumePath': value.volumePath,
    };
}


