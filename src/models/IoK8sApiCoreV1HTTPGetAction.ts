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
    IoK8sApiCoreV1HTTPHeader,
    IoK8sApiCoreV1HTTPHeaderFromJSON,
    IoK8sApiCoreV1HTTPHeaderToJSON,
} from './index.ts';

/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 * @export
 * @interface IoK8sApiCoreV1HTTPGetAction
 */
export interface IoK8sApiCoreV1HTTPGetAction {
    /**
     * Host name to connect to, defaults to the pod IP. You probably want to set \"Host\" in httpHeaders instead.
     * @type {string}
     * @memberof IoK8sApiCoreV1HTTPGetAction
     */
    host?: string;
    /**
     * Custom headers to set in the request. HTTP allows repeated headers.
     * @type {Array<IoK8sApiCoreV1HTTPHeader>}
     * @memberof IoK8sApiCoreV1HTTPGetAction
     */
    httpHeaders?: Array<IoK8sApiCoreV1HTTPHeader>;
    /**
     * Path to access on the HTTP server.
     * @type {string}
     * @memberof IoK8sApiCoreV1HTTPGetAction
     */
    path?: string;
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     * @type {string}
     * @memberof IoK8sApiCoreV1HTTPGetAction
     */
    port: string;
    /**
     * Scheme to use for connecting to the host. Defaults to HTTP.
     * @type {string}
     * @memberof IoK8sApiCoreV1HTTPGetAction
     */
    scheme?: string;
}

export function IoK8sApiCoreV1HTTPGetActionFromJSON(json: any): IoK8sApiCoreV1HTTPGetAction {
    return {
        'host': !exists(json, 'host') ? undefined : json['host'],
        'httpHeaders': !exists(json, 'httpHeaders') ? undefined : (json['httpHeaders'] as Array<any>).map(IoK8sApiCoreV1HTTPHeaderFromJSON),
        'path': !exists(json, 'path') ? undefined : json['path'],
        'port': json['port'],
        'scheme': !exists(json, 'scheme') ? undefined : json['scheme'],
    };
}

export function IoK8sApiCoreV1HTTPGetActionToJSON(value?: IoK8sApiCoreV1HTTPGetAction): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'host': value.host,
        'httpHeaders': value.httpHeaders === undefined ? undefined : (value.httpHeaders as Array<any>).map(IoK8sApiCoreV1HTTPHeaderToJSON),
        'path': value.path,
        'port': value.port,
        'scheme': value.scheme,
    };
}


