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
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 * @export
 * @interface IoK8sApiAppsV1beta2RollingUpdateStatefulSetStrategy
 */
export interface IoK8sApiAppsV1beta2RollingUpdateStatefulSetStrategy {
    /**
     * Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0.
     * @type {number}
     * @memberof IoK8sApiAppsV1beta2RollingUpdateStatefulSetStrategy
     */
    partition?: number;
}

export function IoK8sApiAppsV1beta2RollingUpdateStatefulSetStrategyFromJSON(json: any): IoK8sApiAppsV1beta2RollingUpdateStatefulSetStrategy {
    return {
        'partition': !exists(json, 'partition') ? undefined : json['partition'],
    };
}

export function IoK8sApiAppsV1beta2RollingUpdateStatefulSetStrategyToJSON(value?: IoK8sApiAppsV1beta2RollingUpdateStatefulSetStrategy): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'partition': value.partition,
    };
}

