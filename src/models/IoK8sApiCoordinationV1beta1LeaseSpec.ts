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
/**
 * LeaseSpec is a specification of a Lease.
 * @export
 * @interface IoK8sApiCoordinationV1beta1LeaseSpec
 */
export interface IoK8sApiCoordinationV1beta1LeaseSpec {
    /**
     * MicroTime is version of Time with microsecond level precision.
     * @type {Date}
     * @memberof IoK8sApiCoordinationV1beta1LeaseSpec
     */
    acquireTime?: Date;
    /**
     * holderIdentity contains the identity of the holder of a current lease.
     * @type {string}
     * @memberof IoK8sApiCoordinationV1beta1LeaseSpec
     */
    holderIdentity?: string;
    /**
     * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime.
     * @type {number}
     * @memberof IoK8sApiCoordinationV1beta1LeaseSpec
     */
    leaseDurationSeconds?: number;
    /**
     * leaseTransitions is the number of transitions of a lease between holders.
     * @type {number}
     * @memberof IoK8sApiCoordinationV1beta1LeaseSpec
     */
    leaseTransitions?: number;
    /**
     * MicroTime is version of Time with microsecond level precision.
     * @type {Date}
     * @memberof IoK8sApiCoordinationV1beta1LeaseSpec
     */
    renewTime?: Date;
}

export function IoK8sApiCoordinationV1beta1LeaseSpecFromJSON(json: any): IoK8sApiCoordinationV1beta1LeaseSpec {
    return {
        'acquireTime': !exists(json, 'acquireTime') ? undefined : new Date(json['acquireTime']),
        'holderIdentity': !exists(json, 'holderIdentity') ? undefined : json['holderIdentity'],
        'leaseDurationSeconds': !exists(json, 'leaseDurationSeconds') ? undefined : json['leaseDurationSeconds'],
        'leaseTransitions': !exists(json, 'leaseTransitions') ? undefined : json['leaseTransitions'],
        'renewTime': !exists(json, 'renewTime') ? undefined : new Date(json['renewTime']),
    };
}

export function IoK8sApiCoordinationV1beta1LeaseSpecToJSON(value?: IoK8sApiCoordinationV1beta1LeaseSpec): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'acquireTime': value.acquireTime === undefined ? undefined : value.acquireTime.toISOString(),
        'holderIdentity': value.holderIdentity,
        'leaseDurationSeconds': value.leaseDurationSeconds,
        'leaseTransitions': value.leaseTransitions,
        'renewTime': value.renewTime === undefined ? undefined : value.renewTime.toISOString(),
    };
}

