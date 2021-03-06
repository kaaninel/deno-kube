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
 * CustomResourceColumnDefinition specifies a column for server side printing.
 * @export
 * @interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition
 */
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition {
    /**
     * JSONPath is a simple JSON path, i.e. with array notation.
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition
     */
    jSONPath: string;
    /**
     * description is a human readable description of this column.
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition
     */
    description?: string;
    /**
     * format is an optional OpenAPI type definition for this column. The \'name\' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for more.
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition
     */
    format?: string;
    /**
     * name is a human readable name for the column.
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition
     */
    name: string;
    /**
     * priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a higher priority.
     * @type {number}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition
     */
    priority?: number;
    /**
     * type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for more.
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition
     */
    type: string;
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinitionFromJSON(json: any): IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition {
    return {
        'jSONPath': json['JSONPath'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'format': !exists(json, 'format') ? undefined : json['format'],
        'name': json['name'],
        'priority': !exists(json, 'priority') ? undefined : json['priority'],
        'type': json['type'],
    };
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinitionToJSON(value?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'JSONPath': value.jSONPath,
        'description': value.description,
        'format': value.format,
        'name': value.name,
        'priority': value.priority,
        'type': value.type,
    };
}


