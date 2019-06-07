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
 * RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1beta1RuleWithOperations
 */
export interface IoK8sApiAdmissionregistrationV1beta1RuleWithOperations {
    /**
     * APIGroups is the API groups the resources belong to. \'*\' is all groups. If \'*\' is present, the length of the slice must be one. Required.
     * @type {Array<string>}
     * @memberof IoK8sApiAdmissionregistrationV1beta1RuleWithOperations
     */
    apiGroups?: Array<string>;
    /**
     * APIVersions is the API versions the resources belong to. \'*\' is all versions. If \'*\' is present, the length of the slice must be one. Required.
     * @type {Array<string>}
     * @memberof IoK8sApiAdmissionregistrationV1beta1RuleWithOperations
     */
    apiVersions?: Array<string>;
    /**
     * Operations is the operations the admission hook cares about - CREATE, UPDATE, or * for all operations. If \'*\' is present, the length of the slice must be one. Required.
     * @type {Array<string>}
     * @memberof IoK8sApiAdmissionregistrationV1beta1RuleWithOperations
     */
    operations?: Array<string>;
    /**
     * Resources is a list of resources this rule applies to.  For example: \'pods\' means pods. \'pods/log\' means the log subresource of pods. \'*\' means all resources, but not subresources. \'pods/_*\' means all subresources of pods. \'*_/scale\' means all scale subresources. \'*_/_*\' means all resources and their subresources.  If wildcard is present, the validation rule will ensure resources do not overlap with each other.  Depending on the enclosing object, subresources might not be allowed. Required.
     * @type {Array<string>}
     * @memberof IoK8sApiAdmissionregistrationV1beta1RuleWithOperations
     */
    resources?: Array<string>;
    /**
     * scope specifies the scope of this rule. Valid values are \"Cluster\", \"Namespaced\", and \"*\" \"Cluster\" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. \"Namespaced\" means that only namespaced resources will match this rule. \"*\" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is \"*\".
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1beta1RuleWithOperations
     */
    scope?: string;
}

export function IoK8sApiAdmissionregistrationV1beta1RuleWithOperationsFromJSON(json: any): IoK8sApiAdmissionregistrationV1beta1RuleWithOperations {
    return {
        'apiGroups': !exists(json, 'apiGroups') ? undefined : json['apiGroups'],
        'apiVersions': !exists(json, 'apiVersions') ? undefined : json['apiVersions'],
        'operations': !exists(json, 'operations') ? undefined : json['operations'],
        'resources': !exists(json, 'resources') ? undefined : json['resources'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
    };
}

export function IoK8sApiAdmissionregistrationV1beta1RuleWithOperationsToJSON(value?: IoK8sApiAdmissionregistrationV1beta1RuleWithOperations): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiGroups': value.apiGroups,
        'apiVersions': value.apiVersions,
        'operations': value.operations,
        'resources': value.resources,
        'scope': value.scope,
    };
}


