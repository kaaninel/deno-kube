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
    IoK8sApiCoreV1NodeConfigSource,
    IoK8sApiCoreV1NodeConfigSourceFromJSON,
    IoK8sApiCoreV1NodeConfigSourceToJSON,
    IoK8sApiCoreV1Taint,
    IoK8sApiCoreV1TaintFromJSON,
    IoK8sApiCoreV1TaintToJSON,
} from './';

/**
 * NodeSpec describes the attributes that a node is created with.
 * @export
 * @interface IoK8sApiCoreV1NodeSpec
 */
export interface IoK8sApiCoreV1NodeSpec {
    /**
     * 
     * @type {IoK8sApiCoreV1NodeConfigSource}
     * @memberof IoK8sApiCoreV1NodeSpec
     */
    configSource?: IoK8sApiCoreV1NodeConfigSource;
    /**
     * Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeSpec
     */
    externalID?: string;
    /**
     * PodCIDR represents the pod IP range assigned to the node.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeSpec
     */
    podCIDR?: string;
    /**
     * ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeSpec
     */
    providerID?: string;
    /**
     * If specified, the node\'s taints.
     * @type {Array<IoK8sApiCoreV1Taint>}
     * @memberof IoK8sApiCoreV1NodeSpec
     */
    taints?: Array<IoK8sApiCoreV1Taint>;
    /**
     * Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
     * @type {boolean}
     * @memberof IoK8sApiCoreV1NodeSpec
     */
    unschedulable?: boolean;
}

export function IoK8sApiCoreV1NodeSpecFromJSON(json: any): IoK8sApiCoreV1NodeSpec {
    return {
        'configSource': !exists(json, 'configSource') ? undefined : IoK8sApiCoreV1NodeConfigSourceFromJSON(json['configSource']),
        'externalID': !exists(json, 'externalID') ? undefined : json['externalID'],
        'podCIDR': !exists(json, 'podCIDR') ? undefined : json['podCIDR'],
        'providerID': !exists(json, 'providerID') ? undefined : json['providerID'],
        'taints': !exists(json, 'taints') ? undefined : (json['taints'] as Array<any>).map(IoK8sApiCoreV1TaintFromJSON),
        'unschedulable': !exists(json, 'unschedulable') ? undefined : json['unschedulable'],
    };
}

export function IoK8sApiCoreV1NodeSpecToJSON(value?: IoK8sApiCoreV1NodeSpec): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'configSource': IoK8sApiCoreV1NodeConfigSourceToJSON(value.configSource),
        'externalID': value.externalID,
        'podCIDR': value.podCIDR,
        'providerID': value.providerID,
        'taints': value.taints === undefined ? undefined : (value.taints as Array<any>).map(IoK8sApiCoreV1TaintToJSON),
        'unschedulable': value.unschedulable,
    };
}


