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
    IoK8sApimachineryPkgApisMetaV1Initializer,
    IoK8sApimachineryPkgApisMetaV1InitializerFromJSON,
    IoK8sApimachineryPkgApisMetaV1InitializerToJSON,
    IoK8sApimachineryPkgApisMetaV1Status,
    IoK8sApimachineryPkgApisMetaV1StatusFromJSON,
    IoK8sApimachineryPkgApisMetaV1StatusToJSON,
} from './index.ts';

/**
 * Initializers tracks the progress of initialization.
 * @export
 * @interface IoK8sApimachineryPkgApisMetaV1Initializers
 */
export interface IoK8sApimachineryPkgApisMetaV1Initializers {
    /**
     * Pending is a list of initializers that must execute in order before this object is visible. When the last pending initializer is removed, and no failing result is set, the initializers struct will be set to nil and the object is considered as initialized and visible to all clients.
     * @type {Array<IoK8sApimachineryPkgApisMetaV1Initializer>}
     * @memberof IoK8sApimachineryPkgApisMetaV1Initializers
     */
    pending: Array<IoK8sApimachineryPkgApisMetaV1Initializer>;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1Status}
     * @memberof IoK8sApimachineryPkgApisMetaV1Initializers
     */
    result?: IoK8sApimachineryPkgApisMetaV1Status;
}

export function IoK8sApimachineryPkgApisMetaV1InitializersFromJSON(json: any): IoK8sApimachineryPkgApisMetaV1Initializers {
    return {
        'pending': (json['pending'] as Array<any>).map(IoK8sApimachineryPkgApisMetaV1InitializerFromJSON),
        'result': !exists(json, 'result') ? undefined : IoK8sApimachineryPkgApisMetaV1StatusFromJSON(json['result']),
    };
}

export function IoK8sApimachineryPkgApisMetaV1InitializersToJSON(value?: IoK8sApimachineryPkgApisMetaV1Initializers): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'pending': (value.pending as Array<any>).map(IoK8sApimachineryPkgApisMetaV1InitializerToJSON),
        'result': IoK8sApimachineryPkgApisMetaV1StatusToJSON(value.result),
    };
}


