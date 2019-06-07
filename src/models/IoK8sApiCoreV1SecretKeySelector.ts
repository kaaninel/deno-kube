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
 * SecretKeySelector selects a key of a Secret.
 * @export
 * @interface IoK8sApiCoreV1SecretKeySelector
 */
export interface IoK8sApiCoreV1SecretKeySelector {
    /**
     * The key of the secret to select from.  Must be a valid secret key.
     * @type {string}
     * @memberof IoK8sApiCoreV1SecretKeySelector
     */
    key: string;
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     * @type {string}
     * @memberof IoK8sApiCoreV1SecretKeySelector
     */
    name?: string;
    /**
     * Specify whether the Secret or its key must be defined
     * @type {boolean}
     * @memberof IoK8sApiCoreV1SecretKeySelector
     */
    optional?: boolean;
}

export function IoK8sApiCoreV1SecretKeySelectorFromJSON(json: any): IoK8sApiCoreV1SecretKeySelector {
    return {
        'key': json['key'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'optional': !exists(json, 'optional') ? undefined : json['optional'],
    };
}

export function IoK8sApiCoreV1SecretKeySelectorToJSON(value?: IoK8sApiCoreV1SecretKeySelector): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'key': value.key,
        'name': value.name,
        'optional': value.optional,
    };
}

