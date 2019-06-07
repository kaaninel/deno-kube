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
    IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition,
    IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionFromJSON,
    IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionToJSON,
} from './';

/**
 * APIServiceStatus contains derived information about an API server
 * @export
 * @interface IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus
 */
export interface IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus {
    /**
     * Current service state of apiService.
     * @type {Array<IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition>}
     * @memberof IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus
     */
    conditions?: Array<IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition>;
}

export function IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatusFromJSON(json: any): IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus {
    return {
        'conditions': !exists(json, 'conditions') ? undefined : (json['conditions'] as Array<any>).map(IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionFromJSON),
    };
}

export function IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatusToJSON(value?: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'conditions': value.conditions === undefined ? undefined : (value.conditions as Array<any>).map(IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceConditionToJSON),
    };
}

