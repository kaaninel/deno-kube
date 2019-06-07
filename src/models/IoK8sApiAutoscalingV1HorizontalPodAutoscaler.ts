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
    IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec,
    IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpecFromJSON,
    IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpecToJSON,
    IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus,
    IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusFromJSON,
    IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * configuration of a horizontal pod autoscaler.
 * @export
 * @interface IoK8sApiAutoscalingV1HorizontalPodAutoscaler
 */
export interface IoK8sApiAutoscalingV1HorizontalPodAutoscaler {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAutoscalingV1HorizontalPodAutoscaler
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAutoscalingV1HorizontalPodAutoscaler
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAutoscalingV1HorizontalPodAutoscaler
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec}
     * @memberof IoK8sApiAutoscalingV1HorizontalPodAutoscaler
     */
    spec?: IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec;
    /**
     * 
     * @type {IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus}
     * @memberof IoK8sApiAutoscalingV1HorizontalPodAutoscaler
     */
    status?: IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus;
}

export function IoK8sApiAutoscalingV1HorizontalPodAutoscalerFromJSON(json: any): IoK8sApiAutoscalingV1HorizontalPodAutoscaler {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusFromJSON(json['status']),
    };
}

export function IoK8sApiAutoscalingV1HorizontalPodAutoscalerToJSON(value?: IoK8sApiAutoscalingV1HorizontalPodAutoscaler): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpecToJSON(value.spec),
        'status': IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusToJSON(value.status),
    };
}


