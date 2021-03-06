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
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
    IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpec,
    IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpecFromJSON,
    IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpecToJSON,
    IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus,
    IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatusFromJSON,
    IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatusToJSON,
} from './index.ts';

/**
 * APIService represents a server for a particular GroupVersion. Name must be \"version.group\".
 * @export
 * @interface IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService
 */
export interface IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpec}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService
     */
    spec?: IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpec;
    /**
     * 
     * @type {IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService
     */
    status?: IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus;
}

export function IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceFromJSON(json: any): IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatusFromJSON(json['status']),
    };
}

export function IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceToJSON(value?: IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIService): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpecToJSON(value.spec),
        'status': IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatusToJSON(value.status),
    };
}


