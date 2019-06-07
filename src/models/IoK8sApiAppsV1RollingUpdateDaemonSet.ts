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
/**
 * Spec to control the desired behavior of daemon set rolling update.
 * @export
 * @interface IoK8sApiAppsV1RollingUpdateDaemonSet
 */
export interface IoK8sApiAppsV1RollingUpdateDaemonSet {
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     * @type {string}
     * @memberof IoK8sApiAppsV1RollingUpdateDaemonSet
     */
    maxUnavailable?: string;
}

export function IoK8sApiAppsV1RollingUpdateDaemonSetFromJSON(json: any): IoK8sApiAppsV1RollingUpdateDaemonSet {
    return {
        'maxUnavailable': !exists(json, 'maxUnavailable') ? undefined : json['maxUnavailable'],
    };
}

export function IoK8sApiAppsV1RollingUpdateDaemonSetToJSON(value?: IoK8sApiAppsV1RollingUpdateDaemonSet): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'maxUnavailable': value.maxUnavailable,
    };
}


