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
    IoK8sApiCoreV1EnvVarSource,
    IoK8sApiCoreV1EnvVarSourceFromJSON,
    IoK8sApiCoreV1EnvVarSourceToJSON,
} from './';

/**
 * EnvVar represents an environment variable present in a Container.
 * @export
 * @interface IoK8sApiCoreV1EnvVar
 */
export interface IoK8sApiCoreV1EnvVar {
    /**
     * Name of the environment variable. Must be a C_IDENTIFIER.
     * @type {string}
     * @memberof IoK8sApiCoreV1EnvVar
     */
    name: string;
    /**
     * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to \"\".
     * @type {string}
     * @memberof IoK8sApiCoreV1EnvVar
     */
    value?: string;
    /**
     * 
     * @type {IoK8sApiCoreV1EnvVarSource}
     * @memberof IoK8sApiCoreV1EnvVar
     */
    valueFrom?: IoK8sApiCoreV1EnvVarSource;
}

export function IoK8sApiCoreV1EnvVarFromJSON(json: any): IoK8sApiCoreV1EnvVar {
    return {
        'name': json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'valueFrom': !exists(json, 'valueFrom') ? undefined : IoK8sApiCoreV1EnvVarSourceFromJSON(json['valueFrom']),
    };
}

export function IoK8sApiCoreV1EnvVarToJSON(value?: IoK8sApiCoreV1EnvVar): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'name': value.name,
        'value': value.value,
        'valueFrom': IoK8sApiCoreV1EnvVarSourceToJSON(value.valueFrom),
    };
}

