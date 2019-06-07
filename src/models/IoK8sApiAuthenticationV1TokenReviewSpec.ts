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
 * TokenReviewSpec is a description of the token authentication request.
 * @export
 * @interface IoK8sApiAuthenticationV1TokenReviewSpec
 */
export interface IoK8sApiAuthenticationV1TokenReviewSpec {
    /**
     * Audiences is a list of the identifiers that the resource server presented with the token identifies as. Audience-aware token authenticators will verify that the token was intended for at least one of the audiences in this list. If no audiences are provided, the audience will default to the audience of the Kubernetes apiserver.
     * @type {Array<string>}
     * @memberof IoK8sApiAuthenticationV1TokenReviewSpec
     */
    audiences?: Array<string>;
    /**
     * Token is the opaque bearer token.
     * @type {string}
     * @memberof IoK8sApiAuthenticationV1TokenReviewSpec
     */
    token?: string;
}

export function IoK8sApiAuthenticationV1TokenReviewSpecFromJSON(json: any): IoK8sApiAuthenticationV1TokenReviewSpec {
    return {
        'audiences': !exists(json, 'audiences') ? undefined : json['audiences'],
        'token': !exists(json, 'token') ? undefined : json['token'],
    };
}

export function IoK8sApiAuthenticationV1TokenReviewSpecToJSON(value?: IoK8sApiAuthenticationV1TokenReviewSpec): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'audiences': value.audiences,
        'token': value.token,
    };
}


