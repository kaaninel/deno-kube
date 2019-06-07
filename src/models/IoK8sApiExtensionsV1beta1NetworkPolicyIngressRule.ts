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
    IoK8sApiExtensionsV1beta1NetworkPolicyPeer,
    IoK8sApiExtensionsV1beta1NetworkPolicyPeerFromJSON,
    IoK8sApiExtensionsV1beta1NetworkPolicyPeerToJSON,
    IoK8sApiExtensionsV1beta1NetworkPolicyPort,
    IoK8sApiExtensionsV1beta1NetworkPolicyPortFromJSON,
    IoK8sApiExtensionsV1beta1NetworkPolicyPortToJSON,
} from './';

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyIngressRule is deprecated by networking/v1/NetworkPolicyIngressRule. This NetworkPolicyIngressRule matches traffic if and only if the traffic matches both ports AND from.
 * @export
 * @interface IoK8sApiExtensionsV1beta1NetworkPolicyIngressRule
 */
export interface IoK8sApiExtensionsV1beta1NetworkPolicyIngressRule {
    /**
     * List of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least on item, this rule allows traffic only if the traffic matches at least one item in the from list.
     * @type {Array<IoK8sApiExtensionsV1beta1NetworkPolicyPeer>}
     * @memberof IoK8sApiExtensionsV1beta1NetworkPolicyIngressRule
     */
    from?: Array<IoK8sApiExtensionsV1beta1NetworkPolicyPeer>;
    /**
     * List of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
     * @type {Array<IoK8sApiExtensionsV1beta1NetworkPolicyPort>}
     * @memberof IoK8sApiExtensionsV1beta1NetworkPolicyIngressRule
     */
    ports?: Array<IoK8sApiExtensionsV1beta1NetworkPolicyPort>;
}

export function IoK8sApiExtensionsV1beta1NetworkPolicyIngressRuleFromJSON(json: any): IoK8sApiExtensionsV1beta1NetworkPolicyIngressRule {
    return {
        'from': !exists(json, 'from') ? undefined : (json['from'] as Array<any>).map(IoK8sApiExtensionsV1beta1NetworkPolicyPeerFromJSON),
        'ports': !exists(json, 'ports') ? undefined : (json['ports'] as Array<any>).map(IoK8sApiExtensionsV1beta1NetworkPolicyPortFromJSON),
    };
}

export function IoK8sApiExtensionsV1beta1NetworkPolicyIngressRuleToJSON(value?: IoK8sApiExtensionsV1beta1NetworkPolicyIngressRule): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'from': value.from === undefined ? undefined : (value.from as Array<any>).map(IoK8sApiExtensionsV1beta1NetworkPolicyPeerToJSON),
        'ports': value.ports === undefined ? undefined : (value.ports as Array<any>).map(IoK8sApiExtensionsV1beta1NetworkPolicyPortToJSON),
    };
}

