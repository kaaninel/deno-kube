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
    IoK8sApiAuthorizationV1NonResourceAttributes,
    IoK8sApiAuthorizationV1NonResourceAttributesFromJSON,
    IoK8sApiAuthorizationV1NonResourceAttributesToJSON,
    IoK8sApiAuthorizationV1ResourceAttributes,
    IoK8sApiAuthorizationV1ResourceAttributesFromJSON,
    IoK8sApiAuthorizationV1ResourceAttributesToJSON,
} from './';

/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 * @export
 * @interface IoK8sApiAuthorizationV1SubjectAccessReviewSpec
 */
export interface IoK8sApiAuthorizationV1SubjectAccessReviewSpec {
    /**
     * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
     * @type {{ [key: string]: Array<string>; }}
     * @memberof IoK8sApiAuthorizationV1SubjectAccessReviewSpec
     */
    extra?: { [key: string]: Array<string>; };
    /**
     * Groups is the groups you\'re testing for.
     * @type {Array<string>}
     * @memberof IoK8sApiAuthorizationV1SubjectAccessReviewSpec
     */
    groups?: Array<string>;
    /**
     * 
     * @type {IoK8sApiAuthorizationV1NonResourceAttributes}
     * @memberof IoK8sApiAuthorizationV1SubjectAccessReviewSpec
     */
    nonResourceAttributes?: IoK8sApiAuthorizationV1NonResourceAttributes;
    /**
     * 
     * @type {IoK8sApiAuthorizationV1ResourceAttributes}
     * @memberof IoK8sApiAuthorizationV1SubjectAccessReviewSpec
     */
    resourceAttributes?: IoK8sApiAuthorizationV1ResourceAttributes;
    /**
     * UID information about the requesting user.
     * @type {string}
     * @memberof IoK8sApiAuthorizationV1SubjectAccessReviewSpec
     */
    uid?: string;
    /**
     * User is the user you\'re testing for. If you specify \"User\" but not \"Groups\", then is it interpreted as \"What if User were not a member of any groups
     * @type {string}
     * @memberof IoK8sApiAuthorizationV1SubjectAccessReviewSpec
     */
    user?: string;
}

export function IoK8sApiAuthorizationV1SubjectAccessReviewSpecFromJSON(json: any): IoK8sApiAuthorizationV1SubjectAccessReviewSpec {
    return {
        'extra': !exists(json, 'extra') ? undefined : json['extra'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'nonResourceAttributes': !exists(json, 'nonResourceAttributes') ? undefined : IoK8sApiAuthorizationV1NonResourceAttributesFromJSON(json['nonResourceAttributes']),
        'resourceAttributes': !exists(json, 'resourceAttributes') ? undefined : IoK8sApiAuthorizationV1ResourceAttributesFromJSON(json['resourceAttributes']),
        'uid': !exists(json, 'uid') ? undefined : json['uid'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function IoK8sApiAuthorizationV1SubjectAccessReviewSpecToJSON(value?: IoK8sApiAuthorizationV1SubjectAccessReviewSpec): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'extra': value.extra,
        'groups': value.groups,
        'nonResourceAttributes': IoK8sApiAuthorizationV1NonResourceAttributesToJSON(value.nonResourceAttributes),
        'resourceAttributes': IoK8sApiAuthorizationV1ResourceAttributesToJSON(value.resourceAttributes),
        'uid': value.uid,
        'user': value.user,
    };
}

