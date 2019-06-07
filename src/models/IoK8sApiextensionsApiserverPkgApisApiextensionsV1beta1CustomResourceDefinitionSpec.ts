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
import {
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinitionFromJSON,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinitionToJSON,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversionFromJSON,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversionToJSON,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNamesFromJSON,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNamesToJSON,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionVersion,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionVersionFromJSON,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionVersionToJSON,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresources,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourcesFromJSON,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourcesToJSON,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidation,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidationFromJSON,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidationToJSON,
} from './index.ts';

/**
 * CustomResourceDefinitionSpec describes how a user wants their resource to appear
 * @export
 * @interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec
 */
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec {
    /**
     * AdditionalPrinterColumns are additional columns shown e.g. in kubectl next to the name. Defaults to a created-at column. Optional, the global columns for all versions. Top-level and per-version columns are mutually exclusive.
     * @type {Array<IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition>}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec
     */
    additionalPrinterColumns?: Array<IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition>;
    /**
     * 
     * @type {IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec
     */
    conversion?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion;
    /**
     * Group is the group this resource belongs in
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec
     */
    group: string;
    /**
     * 
     * @type {IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec
     */
    names: IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames;
    /**
     * preserveUnknownFields disables pruning of object fields which are not specified in the OpenAPI schema. apiVersion, kind, metadata and known fields inside metadata are always preserved. Defaults to true in v1beta and will default to false in v1.
     * @type {boolean}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec
     */
    preserveUnknownFields?: boolean;
    /**
     * Scope indicates whether this resource is cluster or namespace scoped.  Default is namespaced
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec
     */
    scope: string;
    /**
     * 
     * @type {IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresources}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec
     */
    subresources?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresources;
    /**
     * 
     * @type {IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidation}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec
     */
    validation?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidation;
    /**
     * Version is the version this resource belongs in Should be always first item in Versions field if provided. Optional, but at least one of Version or Versions must be set. Deprecated: Please use `Versions`.
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec
     */
    version?: string;
    /**
     * Versions is the list of all supported versions for this resource. If Version field is provided, this field is optional. Validation: All versions must use the same validation schema for now. i.e., top level Validation field is applied to all of these versions. Order: The version name will be used to compute the order. If the version string is \"kube-like\", it will sort above non \"kube-like\" version strings, which are ordered lexicographically. \"Kube-like\" versions start with a \"v\", then are followed by a number (the major version), then optionally the string \"alpha\" or \"beta\" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
     * @type {Array<IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionVersion>}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec
     */
    versions?: Array<IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionVersion>;
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpecFromJSON(json: any): IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec {
    return {
        'additionalPrinterColumns': !exists(json, 'additionalPrinterColumns') ? undefined : (json['additionalPrinterColumns'] as Array<any>).map(IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinitionFromJSON),
        'conversion': !exists(json, 'conversion') ? undefined : IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversionFromJSON(json['conversion']),
        'group': json['group'],
        'names': IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNamesFromJSON(json['names']),
        'preserveUnknownFields': !exists(json, 'preserveUnknownFields') ? undefined : json['preserveUnknownFields'],
        'scope': json['scope'],
        'subresources': !exists(json, 'subresources') ? undefined : IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourcesFromJSON(json['subresources']),
        'validation': !exists(json, 'validation') ? undefined : IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidationFromJSON(json['validation']),
        'version': !exists(json, 'version') ? undefined : json['version'],
        'versions': !exists(json, 'versions') ? undefined : (json['versions'] as Array<any>).map(IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionVersionFromJSON),
    };
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpecToJSON(value?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'additionalPrinterColumns': value.additionalPrinterColumns === undefined ? undefined : (value.additionalPrinterColumns as Array<any>).map(IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinitionToJSON),
        'conversion': IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversionToJSON(value.conversion),
        'group': value.group,
        'names': IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNamesToJSON(value.names),
        'preserveUnknownFields': value.preserveUnknownFields,
        'scope': value.scope,
        'subresources': IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourcesToJSON(value.subresources),
        'validation': IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidationToJSON(value.validation),
        'version': value.version,
        'versions': value.versions === undefined ? undefined : (value.versions as Array<any>).map(IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionVersionToJSON),
    };
}


