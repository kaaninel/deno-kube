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
    IoK8sApiCoreV1DownwardAPIVolumeFile,
    IoK8sApiCoreV1DownwardAPIVolumeFileFromJSON,
    IoK8sApiCoreV1DownwardAPIVolumeFileToJSON,
} from './';

/**
 * DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
 * @export
 * @interface IoK8sApiCoreV1DownwardAPIVolumeSource
 */
export interface IoK8sApiCoreV1DownwardAPIVolumeSource {
    /**
     * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     * @type {number}
     * @memberof IoK8sApiCoreV1DownwardAPIVolumeSource
     */
    defaultMode?: number;
    /**
     * Items is a list of downward API volume file
     * @type {Array<IoK8sApiCoreV1DownwardAPIVolumeFile>}
     * @memberof IoK8sApiCoreV1DownwardAPIVolumeSource
     */
    items?: Array<IoK8sApiCoreV1DownwardAPIVolumeFile>;
}

export function IoK8sApiCoreV1DownwardAPIVolumeSourceFromJSON(json: any): IoK8sApiCoreV1DownwardAPIVolumeSource {
    return {
        'defaultMode': !exists(json, 'defaultMode') ? undefined : json['defaultMode'],
        'items': !exists(json, 'items') ? undefined : (json['items'] as Array<any>).map(IoK8sApiCoreV1DownwardAPIVolumeFileFromJSON),
    };
}

export function IoK8sApiCoreV1DownwardAPIVolumeSourceToJSON(value?: IoK8sApiCoreV1DownwardAPIVolumeSource): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'defaultMode': value.defaultMode,
        'items': value.items === undefined ? undefined : (value.items as Array<any>).map(IoK8sApiCoreV1DownwardAPIVolumeFileToJSON),
    };
}


