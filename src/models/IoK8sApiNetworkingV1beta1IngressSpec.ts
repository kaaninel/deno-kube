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
import {
    IoK8sApiNetworkingV1beta1IngressBackend,
    IoK8sApiNetworkingV1beta1IngressBackendFromJSON,
    IoK8sApiNetworkingV1beta1IngressBackendToJSON,
    IoK8sApiNetworkingV1beta1IngressRule,
    IoK8sApiNetworkingV1beta1IngressRuleFromJSON,
    IoK8sApiNetworkingV1beta1IngressRuleToJSON,
    IoK8sApiNetworkingV1beta1IngressTLS,
    IoK8sApiNetworkingV1beta1IngressTLSFromJSON,
    IoK8sApiNetworkingV1beta1IngressTLSToJSON,
} from './';

/**
 * IngressSpec describes the Ingress the user wishes to exist.
 * @export
 * @interface IoK8sApiNetworkingV1beta1IngressSpec
 */
export interface IoK8sApiNetworkingV1beta1IngressSpec {
    /**
     * 
     * @type {IoK8sApiNetworkingV1beta1IngressBackend}
     * @memberof IoK8sApiNetworkingV1beta1IngressSpec
     */
    backend?: IoK8sApiNetworkingV1beta1IngressBackend;
    /**
     * A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
     * @type {Array<IoK8sApiNetworkingV1beta1IngressRule>}
     * @memberof IoK8sApiNetworkingV1beta1IngressSpec
     */
    rules?: Array<IoK8sApiNetworkingV1beta1IngressRule>;
    /**
     * TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
     * @type {Array<IoK8sApiNetworkingV1beta1IngressTLS>}
     * @memberof IoK8sApiNetworkingV1beta1IngressSpec
     */
    tls?: Array<IoK8sApiNetworkingV1beta1IngressTLS>;
}

export function IoK8sApiNetworkingV1beta1IngressSpecFromJSON(json: any): IoK8sApiNetworkingV1beta1IngressSpec {
    return {
        'backend': !exists(json, 'backend') ? undefined : IoK8sApiNetworkingV1beta1IngressBackendFromJSON(json['backend']),
        'rules': !exists(json, 'rules') ? undefined : (json['rules'] as Array<any>).map(IoK8sApiNetworkingV1beta1IngressRuleFromJSON),
        'tls': !exists(json, 'tls') ? undefined : (json['tls'] as Array<any>).map(IoK8sApiNetworkingV1beta1IngressTLSFromJSON),
    };
}

export function IoK8sApiNetworkingV1beta1IngressSpecToJSON(value?: IoK8sApiNetworkingV1beta1IngressSpec): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'backend': IoK8sApiNetworkingV1beta1IngressBackendToJSON(value.backend),
        'rules': value.rules === undefined ? undefined : (value.rules as Array<any>).map(IoK8sApiNetworkingV1beta1IngressRuleToJSON),
        'tls': value.tls === undefined ? undefined : (value.tls as Array<any>).map(IoK8sApiNetworkingV1beta1IngressTLSToJSON),
    };
}

