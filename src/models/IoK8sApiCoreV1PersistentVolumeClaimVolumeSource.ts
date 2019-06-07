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
 * PersistentVolumeClaimVolumeSource references the user\'s PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
 * @export
 * @interface IoK8sApiCoreV1PersistentVolumeClaimVolumeSource
 */
export interface IoK8sApiCoreV1PersistentVolumeClaimVolumeSource {
    /**
     * ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimVolumeSource
     */
    claimName: string;
    /**
     * Will force the ReadOnly setting in VolumeMounts. Default false.
     * @type {boolean}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimVolumeSource
     */
    readOnly?: boolean;
}

export function IoK8sApiCoreV1PersistentVolumeClaimVolumeSourceFromJSON(json: any): IoK8sApiCoreV1PersistentVolumeClaimVolumeSource {
    return {
        'claimName': json['claimName'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
    };
}

export function IoK8sApiCoreV1PersistentVolumeClaimVolumeSourceToJSON(value?: IoK8sApiCoreV1PersistentVolumeClaimVolumeSource): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'claimName': value.claimName,
        'readOnly': value.readOnly,
    };
}


