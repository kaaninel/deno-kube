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
    IoK8sApiCoreV1PersistentVolumeSpec,
    IoK8sApiCoreV1PersistentVolumeSpecFromJSON,
    IoK8sApiCoreV1PersistentVolumeSpecToJSON,
} from './index.ts';

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 * @export
 * @interface IoK8sApiStorageV1beta1VolumeAttachmentSource
 */
export interface IoK8sApiStorageV1beta1VolumeAttachmentSource {
    /**
     * 
     * @type {IoK8sApiCoreV1PersistentVolumeSpec}
     * @memberof IoK8sApiStorageV1beta1VolumeAttachmentSource
     */
    inlineVolumeSpec?: IoK8sApiCoreV1PersistentVolumeSpec;
    /**
     * Name of the persistent volume to attach.
     * @type {string}
     * @memberof IoK8sApiStorageV1beta1VolumeAttachmentSource
     */
    persistentVolumeName?: string;
}

export function IoK8sApiStorageV1beta1VolumeAttachmentSourceFromJSON(json: any): IoK8sApiStorageV1beta1VolumeAttachmentSource {
    return {
        'inlineVolumeSpec': !exists(json, 'inlineVolumeSpec') ? undefined : IoK8sApiCoreV1PersistentVolumeSpecFromJSON(json['inlineVolumeSpec']),
        'persistentVolumeName': !exists(json, 'persistentVolumeName') ? undefined : json['persistentVolumeName'],
    };
}

export function IoK8sApiStorageV1beta1VolumeAttachmentSourceToJSON(value?: IoK8sApiStorageV1beta1VolumeAttachmentSource): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'inlineVolumeSpec': IoK8sApiCoreV1PersistentVolumeSpecToJSON(value.inlineVolumeSpec),
        'persistentVolumeName': value.persistentVolumeName,
    };
}


