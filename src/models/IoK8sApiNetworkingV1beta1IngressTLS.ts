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
 * IngressTLS describes the transport layer security associated with an Ingress.
 * @export
 * @interface IoK8sApiNetworkingV1beta1IngressTLS
 */
export interface IoK8sApiNetworkingV1beta1IngressTLS {
    /**
     * Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
     * @type {Array<string>}
     * @memberof IoK8sApiNetworkingV1beta1IngressTLS
     */
    hosts?: Array<string>;
    /**
     * SecretName is the name of the secret used to terminate SSL traffic on 443. Field is left optional to allow SSL routing based on SNI hostname alone. If the SNI host in a listener conflicts with the \"Host\" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.
     * @type {string}
     * @memberof IoK8sApiNetworkingV1beta1IngressTLS
     */
    secretName?: string;
}

export function IoK8sApiNetworkingV1beta1IngressTLSFromJSON(json: any): IoK8sApiNetworkingV1beta1IngressTLS {
    return {
        'hosts': !exists(json, 'hosts') ? undefined : json['hosts'],
        'secretName': !exists(json, 'secretName') ? undefined : json['secretName'],
    };
}

export function IoK8sApiNetworkingV1beta1IngressTLSToJSON(value?: IoK8sApiNetworkingV1beta1IngressTLS): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'hosts': value.hosts,
        'secretName': value.secretName,
    };
}


