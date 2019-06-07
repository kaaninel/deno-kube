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
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn\'t significant, may contain duplicates, and possibly be incomplete.
 * @export
 * @interface IoK8sApiAuthorizationV1ResourceRule
 */
export interface IoK8sApiAuthorizationV1ResourceRule {
    /**
     * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  \"*\" means all.
     * @type {Array<string>}
     * @memberof IoK8sApiAuthorizationV1ResourceRule
     */
    apiGroups?: Array<string>;
    /**
     * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  \"*\" means all.
     * @type {Array<string>}
     * @memberof IoK8sApiAuthorizationV1ResourceRule
     */
    resourceNames?: Array<string>;
    /**
     * Resources is a list of resources this rule applies to.  \"*\" means all in the specified apiGroups.  \"*_/foo\" represents the subresource \'foo\' for all resources in the specified apiGroups.
     * @type {Array<string>}
     * @memberof IoK8sApiAuthorizationV1ResourceRule
     */
    resources?: Array<string>;
    /**
     * Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  \"*\" means all.
     * @type {Array<string>}
     * @memberof IoK8sApiAuthorizationV1ResourceRule
     */
    verbs: Array<string>;
}

export function IoK8sApiAuthorizationV1ResourceRuleFromJSON(json: any): IoK8sApiAuthorizationV1ResourceRule {
    return {
        'apiGroups': !exists(json, 'apiGroups') ? undefined : json['apiGroups'],
        'resourceNames': !exists(json, 'resourceNames') ? undefined : json['resourceNames'],
        'resources': !exists(json, 'resources') ? undefined : json['resources'],
        'verbs': json['verbs'],
    };
}

export function IoK8sApiAuthorizationV1ResourceRuleToJSON(value?: IoK8sApiAuthorizationV1ResourceRule): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiGroups': value.apiGroups,
        'resourceNames': value.resourceNames,
        'resources': value.resources,
        'verbs': value.verbs,
    };
}


