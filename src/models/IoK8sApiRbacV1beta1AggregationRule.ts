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
    IoK8sApimachineryPkgApisMetaV1LabelSelector,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './index.ts';

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 * @export
 * @interface IoK8sApiRbacV1beta1AggregationRule
 */
export interface IoK8sApiRbacV1beta1AggregationRule {
    /**
     * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole\'s permissions will be added
     * @type {Array<IoK8sApimachineryPkgApisMetaV1LabelSelector>}
     * @memberof IoK8sApiRbacV1beta1AggregationRule
     */
    clusterRoleSelectors?: Array<IoK8sApimachineryPkgApisMetaV1LabelSelector>;
}

export function IoK8sApiRbacV1beta1AggregationRuleFromJSON(json: any): IoK8sApiRbacV1beta1AggregationRule {
    return {
        'clusterRoleSelectors': !exists(json, 'clusterRoleSelectors') ? undefined : (json['clusterRoleSelectors'] as Array<any>).map(IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON),
    };
}

export function IoK8sApiRbacV1beta1AggregationRuleToJSON(value?: IoK8sApiRbacV1beta1AggregationRule): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'clusterRoleSelectors': value.clusterRoleSelectors === undefined ? undefined : (value.clusterRoleSelectors as Array<any>).map(IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON),
    };
}


