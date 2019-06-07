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
/**
 * This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users.
 * @export
 * @interface IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec
 */
export interface IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec {
    /**
     * Extra information about the requesting user. See user.Info interface for details.
     * @type {{ [key: string]: Array<string>; }}
     * @memberof IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec
     */
    extra?: { [key: string]: Array<string>; };
    /**
     * Group information about the requesting user. See user.Info interface for details.
     * @type {Array<string>}
     * @memberof IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec
     */
    groups?: Array<string>;
    /**
     * Base64-encoded PKCS#10 CSR data
     * @type {string}
     * @memberof IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec
     */
    request: string;
    /**
     * UID information about the requesting user. See user.Info interface for details.
     * @type {string}
     * @memberof IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec
     */
    uid?: string;
    /**
     * allowedUsages specifies a set of usage contexts the key will be valid for. See: https://tools.ietf.org/html/rfc5280#section-4.2.1.3      https://tools.ietf.org/html/rfc5280#section-4.2.1.12
     * @type {Array<string>}
     * @memberof IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec
     */
    usages?: Array<string>;
    /**
     * Information about the requesting user. See user.Info interface for details.
     * @type {string}
     * @memberof IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec
     */
    username?: string;
}

export function IoK8sApiCertificatesV1beta1CertificateSigningRequestSpecFromJSON(json: any): IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec {
    return {
        'extra': !exists(json, 'extra') ? undefined : json['extra'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'request': json['request'],
        'uid': !exists(json, 'uid') ? undefined : json['uid'],
        'usages': !exists(json, 'usages') ? undefined : json['usages'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function IoK8sApiCertificatesV1beta1CertificateSigningRequestSpecToJSON(value?: IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'extra': value.extra,
        'groups': value.groups,
        'request': value.request,
        'uid': value.uid,
        'usages': value.usages,
        'username': value.username,
    };
}


