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
 * ServicePort contains information on service\'s port.
 * @export
 * @interface IoK8sApiCoreV1ServicePort
 */
export interface IoK8sApiCoreV1ServicePort {
    /**
     * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. This maps to the \'Name\' field in EndpointPort objects. Optional if only one ServicePort is defined on this service.
     * @type {string}
     * @memberof IoK8sApiCoreV1ServicePort
     */
    name?: string;
    /**
     * The port on each node on which this service is exposed when type=NodePort or LoadBalancer. Usually assigned by the system. If specified, it will be allocated to the service if unused or else creation of the service will fail. Default is to auto-allocate a port if the ServiceType of this Service requires one. More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
     * @type {number}
     * @memberof IoK8sApiCoreV1ServicePort
     */
    nodePort?: number;
    /**
     * The port that will be exposed by this service.
     * @type {number}
     * @memberof IoK8sApiCoreV1ServicePort
     */
    port: number;
    /**
     * The IP protocol for this port. Supports \"TCP\", \"UDP\", and \"SCTP\". Default is TCP.
     * @type {string}
     * @memberof IoK8sApiCoreV1ServicePort
     */
    protocol?: string;
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     * @type {string}
     * @memberof IoK8sApiCoreV1ServicePort
     */
    targetPort?: string;
}

export function IoK8sApiCoreV1ServicePortFromJSON(json: any): IoK8sApiCoreV1ServicePort {
    return {
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nodePort': !exists(json, 'nodePort') ? undefined : json['nodePort'],
        'port': json['port'],
        'protocol': !exists(json, 'protocol') ? undefined : json['protocol'],
        'targetPort': !exists(json, 'targetPort') ? undefined : json['targetPort'],
    };
}

export function IoK8sApiCoreV1ServicePortToJSON(value?: IoK8sApiCoreV1ServicePort): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'name': value.name,
        'nodePort': value.nodePort,
        'port': value.port,
        'protocol': value.protocol,
        'targetPort': value.targetPort,
    };
}


