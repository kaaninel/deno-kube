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
    IoK8sApiCoreV1PodAffinityTerm,
    IoK8sApiCoreV1PodAffinityTermFromJSON,
    IoK8sApiCoreV1PodAffinityTermToJSON,
    IoK8sApiCoreV1WeightedPodAffinityTerm,
    IoK8sApiCoreV1WeightedPodAffinityTermFromJSON,
    IoK8sApiCoreV1WeightedPodAffinityTermToJSON,
} from './';

/**
 * Pod anti affinity is a group of inter pod anti affinity scheduling rules.
 * @export
 * @interface IoK8sApiCoreV1PodAntiAffinity
 */
export interface IoK8sApiCoreV1PodAntiAffinity {
    /**
     * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding \"weight\" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
     * @type {Array<IoK8sApiCoreV1WeightedPodAffinityTerm>}
     * @memberof IoK8sApiCoreV1PodAntiAffinity
     */
    preferredDuringSchedulingIgnoredDuringExecution?: Array<IoK8sApiCoreV1WeightedPodAffinityTerm>;
    /**
     * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
     * @type {Array<IoK8sApiCoreV1PodAffinityTerm>}
     * @memberof IoK8sApiCoreV1PodAntiAffinity
     */
    requiredDuringSchedulingIgnoredDuringExecution?: Array<IoK8sApiCoreV1PodAffinityTerm>;
}

export function IoK8sApiCoreV1PodAntiAffinityFromJSON(json: any): IoK8sApiCoreV1PodAntiAffinity {
    return {
        'preferredDuringSchedulingIgnoredDuringExecution': !exists(json, 'preferredDuringSchedulingIgnoredDuringExecution') ? undefined : (json['preferredDuringSchedulingIgnoredDuringExecution'] as Array<any>).map(IoK8sApiCoreV1WeightedPodAffinityTermFromJSON),
        'requiredDuringSchedulingIgnoredDuringExecution': !exists(json, 'requiredDuringSchedulingIgnoredDuringExecution') ? undefined : (json['requiredDuringSchedulingIgnoredDuringExecution'] as Array<any>).map(IoK8sApiCoreV1PodAffinityTermFromJSON),
    };
}

export function IoK8sApiCoreV1PodAntiAffinityToJSON(value?: IoK8sApiCoreV1PodAntiAffinity): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'preferredDuringSchedulingIgnoredDuringExecution': value.preferredDuringSchedulingIgnoredDuringExecution === undefined ? undefined : (value.preferredDuringSchedulingIgnoredDuringExecution as Array<any>).map(IoK8sApiCoreV1WeightedPodAffinityTermToJSON),
        'requiredDuringSchedulingIgnoredDuringExecution': value.requiredDuringSchedulingIgnoredDuringExecution === undefined ? undefined : (value.requiredDuringSchedulingIgnoredDuringExecution as Array<any>).map(IoK8sApiCoreV1PodAffinityTermToJSON),
    };
}


