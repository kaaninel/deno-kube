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
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
    IoK8sKubeAggregatorPkgApisApiregistrationV1APIService,
    IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceFromJSON,
    IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceToJSON,
} from './index.ts';

/**
 * APIServiceList is a list of APIService objects.
 * @export
 * @interface IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList
 */
export interface IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList
     */
    apiVersion?: string;
    /**
     * 
     * @type {Array<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService>}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList
     */
    items: Array<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceListFromJSON(json: any): IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': (json['items'] as Array<any>).map(IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceFromJSON),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceListToJSON(value?: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'items': (value.items as Array<any>).map(IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceToJSON),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}


