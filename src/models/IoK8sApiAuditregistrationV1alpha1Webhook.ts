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
    IoK8sApiAuditregistrationV1alpha1WebhookClientConfig,
    IoK8sApiAuditregistrationV1alpha1WebhookClientConfigFromJSON,
    IoK8sApiAuditregistrationV1alpha1WebhookClientConfigToJSON,
    IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig,
    IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfigFromJSON,
    IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfigToJSON,
} from './index.ts';

/**
 * Webhook holds the configuration of the webhook
 * @export
 * @interface IoK8sApiAuditregistrationV1alpha1Webhook
 */
export interface IoK8sApiAuditregistrationV1alpha1Webhook {
    /**
     * 
     * @type {IoK8sApiAuditregistrationV1alpha1WebhookClientConfig}
     * @memberof IoK8sApiAuditregistrationV1alpha1Webhook
     */
    clientConfig: IoK8sApiAuditregistrationV1alpha1WebhookClientConfig;
    /**
     * 
     * @type {IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig}
     * @memberof IoK8sApiAuditregistrationV1alpha1Webhook
     */
    throttle?: IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig;
}

export function IoK8sApiAuditregistrationV1alpha1WebhookFromJSON(json: any): IoK8sApiAuditregistrationV1alpha1Webhook {
    return {
        'clientConfig': IoK8sApiAuditregistrationV1alpha1WebhookClientConfigFromJSON(json['clientConfig']),
        'throttle': !exists(json, 'throttle') ? undefined : IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfigFromJSON(json['throttle']),
    };
}

export function IoK8sApiAuditregistrationV1alpha1WebhookToJSON(value?: IoK8sApiAuditregistrationV1alpha1Webhook): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'clientConfig': IoK8sApiAuditregistrationV1alpha1WebhookClientConfigToJSON(value.clientConfig),
        'throttle': IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfigToJSON(value.throttle),
    };
}


