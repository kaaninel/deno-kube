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
    IoK8sApiStorageV1alpha1VolumeError,
    IoK8sApiStorageV1alpha1VolumeErrorFromJSON,
    IoK8sApiStorageV1alpha1VolumeErrorToJSON,
} from './index.ts';

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 * @export
 * @interface IoK8sApiStorageV1alpha1VolumeAttachmentStatus
 */
export interface IoK8sApiStorageV1alpha1VolumeAttachmentStatus {
    /**
     * 
     * @type {IoK8sApiStorageV1alpha1VolumeError}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttachmentStatus
     */
    attachError?: IoK8sApiStorageV1alpha1VolumeError;
    /**
     * Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
     * @type {boolean}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttachmentStatus
     */
    attached: boolean;
    /**
     * Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttachmentStatus
     */
    attachmentMetadata?: { [key: string]: string; };
    /**
     * 
     * @type {IoK8sApiStorageV1alpha1VolumeError}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttachmentStatus
     */
    detachError?: IoK8sApiStorageV1alpha1VolumeError;
}

export function IoK8sApiStorageV1alpha1VolumeAttachmentStatusFromJSON(json: any): IoK8sApiStorageV1alpha1VolumeAttachmentStatus {
    return {
        'attachError': !exists(json, 'attachError') ? undefined : IoK8sApiStorageV1alpha1VolumeErrorFromJSON(json['attachError']),
        'attached': json['attached'],
        'attachmentMetadata': !exists(json, 'attachmentMetadata') ? undefined : json['attachmentMetadata'],
        'detachError': !exists(json, 'detachError') ? undefined : IoK8sApiStorageV1alpha1VolumeErrorFromJSON(json['detachError']),
    };
}

export function IoK8sApiStorageV1alpha1VolumeAttachmentStatusToJSON(value?: IoK8sApiStorageV1alpha1VolumeAttachmentStatus): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'attachError': IoK8sApiStorageV1alpha1VolumeErrorToJSON(value.attachError),
        'attached': value.attached,
        'attachmentMetadata': value.attachmentMetadata,
        'detachError': IoK8sApiStorageV1alpha1VolumeErrorToJSON(value.detachError),
    };
}


