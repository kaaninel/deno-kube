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
 * NamespaceStatus is information about the current status of a Namespace.
 * @export
 * @interface IoK8sApiCoreV1NamespaceStatus
 */
export interface IoK8sApiCoreV1NamespaceStatus {
    /**
     * Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
     * @type {string}
     * @memberof IoK8sApiCoreV1NamespaceStatus
     */
    phase?: string;
}

export function IoK8sApiCoreV1NamespaceStatusFromJSON(json: any): IoK8sApiCoreV1NamespaceStatus {
    return {
        'phase': !exists(json, 'phase') ? undefined : json['phase'],
    };
}

export function IoK8sApiCoreV1NamespaceStatusToJSON(value?: IoK8sApiCoreV1NamespaceStatus): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'phase': value.phase,
    };
}


