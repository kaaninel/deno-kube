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
    IoK8sApiAppsV1beta2RollingUpdateDaemonSet,
    IoK8sApiAppsV1beta2RollingUpdateDaemonSetFromJSON,
    IoK8sApiAppsV1beta2RollingUpdateDaemonSetToJSON,
} from './index.ts';

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 * @export
 * @interface IoK8sApiAppsV1beta2DaemonSetUpdateStrategy
 */
export interface IoK8sApiAppsV1beta2DaemonSetUpdateStrategy {
    /**
     * 
     * @type {IoK8sApiAppsV1beta2RollingUpdateDaemonSet}
     * @memberof IoK8sApiAppsV1beta2DaemonSetUpdateStrategy
     */
    rollingUpdate?: IoK8sApiAppsV1beta2RollingUpdateDaemonSet;
    /**
     * Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is RollingUpdate.
     * @type {string}
     * @memberof IoK8sApiAppsV1beta2DaemonSetUpdateStrategy
     */
    type?: string;
}

export function IoK8sApiAppsV1beta2DaemonSetUpdateStrategyFromJSON(json: any): IoK8sApiAppsV1beta2DaemonSetUpdateStrategy {
    return {
        'rollingUpdate': !exists(json, 'rollingUpdate') ? undefined : IoK8sApiAppsV1beta2RollingUpdateDaemonSetFromJSON(json['rollingUpdate']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function IoK8sApiAppsV1beta2DaemonSetUpdateStrategyToJSON(value?: IoK8sApiAppsV1beta2DaemonSetUpdateStrategy): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'rollingUpdate': IoK8sApiAppsV1beta2RollingUpdateDaemonSetToJSON(value.rollingUpdate),
        'type': value.type,
    };
}


