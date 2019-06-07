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
    IoK8sApiAppsV1RollingUpdateDaemonSet,
    IoK8sApiAppsV1RollingUpdateDaemonSetFromJSON,
    IoK8sApiAppsV1RollingUpdateDaemonSetToJSON,
} from './';

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 * @export
 * @interface IoK8sApiAppsV1DaemonSetUpdateStrategy
 */
export interface IoK8sApiAppsV1DaemonSetUpdateStrategy {
    /**
     * 
     * @type {IoK8sApiAppsV1RollingUpdateDaemonSet}
     * @memberof IoK8sApiAppsV1DaemonSetUpdateStrategy
     */
    rollingUpdate?: IoK8sApiAppsV1RollingUpdateDaemonSet;
    /**
     * Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is RollingUpdate.
     * @type {string}
     * @memberof IoK8sApiAppsV1DaemonSetUpdateStrategy
     */
    type?: string;
}

export function IoK8sApiAppsV1DaemonSetUpdateStrategyFromJSON(json: any): IoK8sApiAppsV1DaemonSetUpdateStrategy {
    return {
        'rollingUpdate': !exists(json, 'rollingUpdate') ? undefined : IoK8sApiAppsV1RollingUpdateDaemonSetFromJSON(json['rollingUpdate']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function IoK8sApiAppsV1DaemonSetUpdateStrategyToJSON(value?: IoK8sApiAppsV1DaemonSetUpdateStrategy): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'rollingUpdate': IoK8sApiAppsV1RollingUpdateDaemonSetToJSON(value.rollingUpdate),
        'type': value.type,
    };
}


