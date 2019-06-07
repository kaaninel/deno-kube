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
 * 
 * @export
 * @interface IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition
 */
export interface IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition
     */
    lastUpdateTime?: Date;
    /**
     * human readable message with details about the request state
     * @type {string}
     * @memberof IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition
     */
    message?: string;
    /**
     * brief reason for the request state
     * @type {string}
     * @memberof IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition
     */
    reason?: string;
    /**
     * request approval state, currently Approved or Denied.
     * @type {string}
     * @memberof IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition
     */
    type: string;
}

export function IoK8sApiCertificatesV1beta1CertificateSigningRequestConditionFromJSON(json: any): IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition {
    return {
        'lastUpdateTime': !exists(json, 'lastUpdateTime') ? undefined : new Date(json['lastUpdateTime']),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'type': json['type'],
    };
}

export function IoK8sApiCertificatesV1beta1CertificateSigningRequestConditionToJSON(value?: IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'lastUpdateTime': value.lastUpdateTime === undefined ? undefined : value.lastUpdateTime.toISOString(),
        'message': value.message,
        'reason': value.reason,
        'type': value.type,
    };
}

