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
    IoK8sApiAppsV1beta2DaemonSetUpdateStrategy,
    IoK8sApiAppsV1beta2DaemonSetUpdateStrategyFromJSON,
    IoK8sApiAppsV1beta2DaemonSetUpdateStrategyToJSON,
    IoK8sApiCoreV1PodTemplateSpec,
    IoK8sApiCoreV1PodTemplateSpecFromJSON,
    IoK8sApiCoreV1PodTemplateSpecToJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelector,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './';

/**
 * DaemonSetSpec is the specification of a daemon set.
 * @export
 * @interface IoK8sApiAppsV1beta2DaemonSetSpec
 */
export interface IoK8sApiAppsV1beta2DaemonSetSpec {
    /**
     * The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
     * @type {number}
     * @memberof IoK8sApiAppsV1beta2DaemonSetSpec
     */
    minReadySeconds?: number;
    /**
     * The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
     * @type {number}
     * @memberof IoK8sApiAppsV1beta2DaemonSetSpec
     */
    revisionHistoryLimit?: number;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
     * @memberof IoK8sApiAppsV1beta2DaemonSetSpec
     */
    selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
    /**
     * 
     * @type {IoK8sApiCoreV1PodTemplateSpec}
     * @memberof IoK8sApiAppsV1beta2DaemonSetSpec
     */
    template: IoK8sApiCoreV1PodTemplateSpec;
    /**
     * 
     * @type {IoK8sApiAppsV1beta2DaemonSetUpdateStrategy}
     * @memberof IoK8sApiAppsV1beta2DaemonSetSpec
     */
    updateStrategy?: IoK8sApiAppsV1beta2DaemonSetUpdateStrategy;
}

export function IoK8sApiAppsV1beta2DaemonSetSpecFromJSON(json: any): IoK8sApiAppsV1beta2DaemonSetSpec {
    return {
        'minReadySeconds': !exists(json, 'minReadySeconds') ? undefined : json['minReadySeconds'],
        'revisionHistoryLimit': !exists(json, 'revisionHistoryLimit') ? undefined : json['revisionHistoryLimit'],
        'selector': IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['selector']),
        'template': IoK8sApiCoreV1PodTemplateSpecFromJSON(json['template']),
        'updateStrategy': !exists(json, 'updateStrategy') ? undefined : IoK8sApiAppsV1beta2DaemonSetUpdateStrategyFromJSON(json['updateStrategy']),
    };
}

export function IoK8sApiAppsV1beta2DaemonSetSpecToJSON(value?: IoK8sApiAppsV1beta2DaemonSetSpec): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'minReadySeconds': value.minReadySeconds,
        'revisionHistoryLimit': value.revisionHistoryLimit,
        'selector': IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.selector),
        'template': IoK8sApiCoreV1PodTemplateSpecToJSON(value.template),
        'updateStrategy': IoK8sApiAppsV1beta2DaemonSetUpdateStrategyToJSON(value.updateStrategy),
    };
}


