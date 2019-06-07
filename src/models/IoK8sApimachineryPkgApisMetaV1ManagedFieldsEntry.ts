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
 * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
 * @export
 * @interface IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry
 */
export interface IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry {
    /**
     * APIVersion defines the version of this resource that this field set applies to. The format is \"group/version\" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry
     */
    apiVersion?: string;
    /**
     * Fields stores a set of fields in a data structure like a Trie. To understand how this is used, see: https://github.com/kubernetes-sigs/structured-merge-diff
     * @type {object}
     * @memberof IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry
     */
    fields?: object;
    /**
     * Manager is an identifier of the workflow managing these fields.
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry
     */
    manager?: string;
    /**
     * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are \'Apply\' and \'Update\'.
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry
     */
    operation?: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry
     */
    time?: Date;
}

export function IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntryFromJSON(json: any): IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'fields': !exists(json, 'fields') ? undefined : json['fields'],
        'manager': !exists(json, 'manager') ? undefined : json['manager'],
        'operation': !exists(json, 'operation') ? undefined : json['operation'],
        'time': !exists(json, 'time') ? undefined : new Date(json['time']),
    };
}

export function IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntryToJSON(value?: IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'fields': value.fields,
        'manager': value.manager,
        'operation': value.operation,
        'time': value.time === undefined ? undefined : value.time.toISOString(),
    };
}


