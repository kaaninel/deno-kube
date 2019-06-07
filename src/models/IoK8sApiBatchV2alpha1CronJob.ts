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
    IoK8sApiBatchV2alpha1CronJobSpec,
    IoK8sApiBatchV2alpha1CronJobSpecFromJSON,
    IoK8sApiBatchV2alpha1CronJobSpecToJSON,
    IoK8sApiBatchV2alpha1CronJobStatus,
    IoK8sApiBatchV2alpha1CronJobStatusFromJSON,
    IoK8sApiBatchV2alpha1CronJobStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * CronJob represents the configuration of a single cron job.
 * @export
 * @interface IoK8sApiBatchV2alpha1CronJob
 */
export interface IoK8sApiBatchV2alpha1CronJob {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiBatchV2alpha1CronJob
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiBatchV2alpha1CronJob
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiBatchV2alpha1CronJob
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiBatchV2alpha1CronJobSpec}
     * @memberof IoK8sApiBatchV2alpha1CronJob
     */
    spec?: IoK8sApiBatchV2alpha1CronJobSpec;
    /**
     * 
     * @type {IoK8sApiBatchV2alpha1CronJobStatus}
     * @memberof IoK8sApiBatchV2alpha1CronJob
     */
    status?: IoK8sApiBatchV2alpha1CronJobStatus;
}

export function IoK8sApiBatchV2alpha1CronJobFromJSON(json: any): IoK8sApiBatchV2alpha1CronJob {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiBatchV2alpha1CronJobSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiBatchV2alpha1CronJobStatusFromJSON(json['status']),
    };
}

export function IoK8sApiBatchV2alpha1CronJobToJSON(value?: IoK8sApiBatchV2alpha1CronJob): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiBatchV2alpha1CronJobSpecToJSON(value.spec),
        'status': IoK8sApiBatchV2alpha1CronJobStatusToJSON(value.status),
    };
}


