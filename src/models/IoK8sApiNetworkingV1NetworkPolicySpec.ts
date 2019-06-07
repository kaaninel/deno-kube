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
    IoK8sApiNetworkingV1NetworkPolicyEgressRule,
    IoK8sApiNetworkingV1NetworkPolicyEgressRuleFromJSON,
    IoK8sApiNetworkingV1NetworkPolicyEgressRuleToJSON,
    IoK8sApiNetworkingV1NetworkPolicyIngressRule,
    IoK8sApiNetworkingV1NetworkPolicyIngressRuleFromJSON,
    IoK8sApiNetworkingV1NetworkPolicyIngressRuleToJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelector,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './index.ts';

/**
 * NetworkPolicySpec provides the specification of a NetworkPolicy
 * @export
 * @interface IoK8sApiNetworkingV1NetworkPolicySpec
 */
export interface IoK8sApiNetworkingV1NetworkPolicySpec {
    /**
     * List of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
     * @type {Array<IoK8sApiNetworkingV1NetworkPolicyEgressRule>}
     * @memberof IoK8sApiNetworkingV1NetworkPolicySpec
     */
    egress?: Array<IoK8sApiNetworkingV1NetworkPolicyEgressRule>;
    /**
     * List of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod\'s local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)
     * @type {Array<IoK8sApiNetworkingV1NetworkPolicyIngressRule>}
     * @memberof IoK8sApiNetworkingV1NetworkPolicySpec
     */
    ingress?: Array<IoK8sApiNetworkingV1NetworkPolicyIngressRule>;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
     * @memberof IoK8sApiNetworkingV1NetworkPolicySpec
     */
    podSelector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
    /**
     * List of rule types that the NetworkPolicy relates to. Valid options are \"Ingress\", \"Egress\", or \"Ingress,Egress\". If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ \"Egress\" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include \"Egress\" (since such a policy would not include an Egress section and would otherwise default to just [ \"Ingress\" ]). This field is beta-level in 1.8
     * @type {Array<string>}
     * @memberof IoK8sApiNetworkingV1NetworkPolicySpec
     */
    policyTypes?: Array<string>;
}

export function IoK8sApiNetworkingV1NetworkPolicySpecFromJSON(json: any): IoK8sApiNetworkingV1NetworkPolicySpec {
    return {
        'egress': !exists(json, 'egress') ? undefined : (json['egress'] as Array<any>).map(IoK8sApiNetworkingV1NetworkPolicyEgressRuleFromJSON),
        'ingress': !exists(json, 'ingress') ? undefined : (json['ingress'] as Array<any>).map(IoK8sApiNetworkingV1NetworkPolicyIngressRuleFromJSON),
        'podSelector': IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['podSelector']),
        'policyTypes': !exists(json, 'policyTypes') ? undefined : json['policyTypes'],
    };
}

export function IoK8sApiNetworkingV1NetworkPolicySpecToJSON(value?: IoK8sApiNetworkingV1NetworkPolicySpec): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'egress': value.egress === undefined ? undefined : (value.egress as Array<any>).map(IoK8sApiNetworkingV1NetworkPolicyEgressRuleToJSON),
        'ingress': value.ingress === undefined ? undefined : (value.ingress as Array<any>).map(IoK8sApiNetworkingV1NetworkPolicyIngressRuleToJSON),
        'podSelector': IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.podSelector),
        'policyTypes': value.policyTypes,
    };
}


