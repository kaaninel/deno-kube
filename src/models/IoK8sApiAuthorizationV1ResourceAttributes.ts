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
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 * @export
 * @interface IoK8sApiAuthorizationV1ResourceAttributes
 */
export interface IoK8sApiAuthorizationV1ResourceAttributes {
    /**
     * Group is the API Group of the Resource.  \"*\" means all.
     * @type {string}
     * @memberof IoK8sApiAuthorizationV1ResourceAttributes
     */
    group?: string;
    /**
     * Name is the name of the resource being requested for a \"get\" or deleted for a \"delete\". \"\" (empty) means all.
     * @type {string}
     * @memberof IoK8sApiAuthorizationV1ResourceAttributes
     */
    name?: string;
    /**
     * Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces \"\" (empty) is defaulted for LocalSubjectAccessReviews \"\" (empty) is empty for cluster-scoped resources \"\" (empty) means \"all\" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
     * @type {string}
     * @memberof IoK8sApiAuthorizationV1ResourceAttributes
     */
    namespace?: string;
    /**
     * Resource is one of the existing resource types.  \"*\" means all.
     * @type {string}
     * @memberof IoK8sApiAuthorizationV1ResourceAttributes
     */
    resource?: string;
    /**
     * Subresource is one of the existing resource types.  \"\" means none.
     * @type {string}
     * @memberof IoK8sApiAuthorizationV1ResourceAttributes
     */
    subresource?: string;
    /**
     * Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  \"*\" means all.
     * @type {string}
     * @memberof IoK8sApiAuthorizationV1ResourceAttributes
     */
    verb?: string;
    /**
     * Version is the API Version of the Resource.  \"*\" means all.
     * @type {string}
     * @memberof IoK8sApiAuthorizationV1ResourceAttributes
     */
    version?: string;
}

export function IoK8sApiAuthorizationV1ResourceAttributesFromJSON(json: any): IoK8sApiAuthorizationV1ResourceAttributes {
    return {
        'group': !exists(json, 'group') ? undefined : json['group'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'resource': !exists(json, 'resource') ? undefined : json['resource'],
        'subresource': !exists(json, 'subresource') ? undefined : json['subresource'],
        'verb': !exists(json, 'verb') ? undefined : json['verb'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function IoK8sApiAuthorizationV1ResourceAttributesToJSON(value?: IoK8sApiAuthorizationV1ResourceAttributes): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'group': value.group,
        'name': value.name,
        'namespace': value.namespace,
        'resource': value.resource,
        'subresource': value.subresource,
        'verb': value.verb,
        'version': value.version,
    };
}


