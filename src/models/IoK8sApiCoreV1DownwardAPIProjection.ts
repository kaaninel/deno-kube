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
    IoK8sApiCoreV1DownwardAPIVolumeFile,
    IoK8sApiCoreV1DownwardAPIVolumeFileFromJSON,
    IoK8sApiCoreV1DownwardAPIVolumeFileToJSON,
} from './index.ts';

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 * @export
 * @interface IoK8sApiCoreV1DownwardAPIProjection
 */
export interface IoK8sApiCoreV1DownwardAPIProjection {
    /**
     * Items is a list of DownwardAPIVolume file
     * @type {Array<IoK8sApiCoreV1DownwardAPIVolumeFile>}
     * @memberof IoK8sApiCoreV1DownwardAPIProjection
     */
    items?: Array<IoK8sApiCoreV1DownwardAPIVolumeFile>;
}

export function IoK8sApiCoreV1DownwardAPIProjectionFromJSON(json: any): IoK8sApiCoreV1DownwardAPIProjection {
    return {
        'items': !exists(json, 'items') ? undefined : (json['items'] as Array<any>).map(IoK8sApiCoreV1DownwardAPIVolumeFileFromJSON),
    };
}

export function IoK8sApiCoreV1DownwardAPIProjectionToJSON(value?: IoK8sApiCoreV1DownwardAPIProjection): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'items': value.items === undefined ? undefined : (value.items as Array<any>).map(IoK8sApiCoreV1DownwardAPIVolumeFileToJSON),
    };
}


