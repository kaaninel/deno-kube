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
 * ServiceReference holds a reference to Service.legacy.k8s.io
 * @export
 * @interface IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference
 */
export interface IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference {
    /**
     * Name is the name of the service
     * @type {string}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference
     */
    name?: string;
    /**
     * Namespace is the namespace of the service
     * @type {string}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference
     */
    namespace?: string;
    /**
     * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
     * @type {number}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference
     */
    port?: number;
}

export function IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReferenceFromJSON(json: any): IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference {
    return {
        'name': !exists(json, 'name') ? undefined : json['name'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'port': !exists(json, 'port') ? undefined : json['port'],
    };
}

export function IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReferenceToJSON(value?: IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'name': value.name,
        'namespace': value.namespace,
        'port': value.port,
    };
}


