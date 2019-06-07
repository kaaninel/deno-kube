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
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfig,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfigFromJSON,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfigToJSON,
} from './';

/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 * @export
 * @interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion
 */
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion {
    /**
     * ConversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, conversion will fail for this object. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail. Default to `[\'v1beta1\']`.
     * @type {Array<string>}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion
     */
    conversionReviewVersions?: Array<string>;
    /**
     * `strategy` specifies the conversion strategy. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the CR. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information   is needed for this option. This requires spec.preserveUnknownFields to be false.
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion
     */
    strategy: string;
    /**
     * 
     * @type {IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfig}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion
     */
    webhookClientConfig?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfig;
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversionFromJSON(json: any): IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion {
    return {
        'conversionReviewVersions': !exists(json, 'conversionReviewVersions') ? undefined : json['conversionReviewVersions'],
        'strategy': json['strategy'],
        'webhookClientConfig': !exists(json, 'webhookClientConfig') ? undefined : IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfigFromJSON(json['webhookClientConfig']),
    };
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversionToJSON(value?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'conversionReviewVersions': value.conversionReviewVersions,
        'strategy': value.strategy,
        'webhookClientConfig': IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfigToJSON(value.webhookClientConfig),
    };
}


