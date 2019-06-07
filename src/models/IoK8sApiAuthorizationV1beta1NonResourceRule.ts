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
 * NonResourceRule holds information that describes a rule for the non-resource
 * @export
 * @interface IoK8sApiAuthorizationV1beta1NonResourceRule
 */
export interface IoK8sApiAuthorizationV1beta1NonResourceRule {
    /**
     * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  \"*\" means all.
     * @type {Array<string>}
     * @memberof IoK8sApiAuthorizationV1beta1NonResourceRule
     */
    nonResourceURLs?: Array<string>;
    /**
     * Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  \"*\" means all.
     * @type {Array<string>}
     * @memberof IoK8sApiAuthorizationV1beta1NonResourceRule
     */
    verbs: Array<string>;
}

export function IoK8sApiAuthorizationV1beta1NonResourceRuleFromJSON(json: any): IoK8sApiAuthorizationV1beta1NonResourceRule {
    return {
        'nonResourceURLs': !exists(json, 'nonResourceURLs') ? undefined : json['nonResourceURLs'],
        'verbs': json['verbs'],
    };
}

export function IoK8sApiAuthorizationV1beta1NonResourceRuleToJSON(value?: IoK8sApiAuthorizationV1beta1NonResourceRule): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'nonResourceURLs': value.nonResourceURLs,
        'verbs': value.verbs,
    };
}


