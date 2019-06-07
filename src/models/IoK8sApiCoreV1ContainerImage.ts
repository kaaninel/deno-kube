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
 * Describe a container image
 * @export
 * @interface IoK8sApiCoreV1ContainerImage
 */
export interface IoK8sApiCoreV1ContainerImage {
    /**
     * Names by which this image is known. e.g. [\"k8s.gcr.io/hyperkube:v1.0.7\", \"dockerhub.io/google_containers/hyperkube:v1.0.7\"]
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1ContainerImage
     */
    names: Array<string>;
    /**
     * The size of the image in bytes.
     * @type {number}
     * @memberof IoK8sApiCoreV1ContainerImage
     */
    sizeBytes?: number;
}

export function IoK8sApiCoreV1ContainerImageFromJSON(json: any): IoK8sApiCoreV1ContainerImage {
    return {
        'names': json['names'],
        'sizeBytes': !exists(json, 'sizeBytes') ? undefined : json['sizeBytes'],
    };
}

export function IoK8sApiCoreV1ContainerImageToJSON(value?: IoK8sApiCoreV1ContainerImage): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'names': value.names,
        'sizeBytes': value.sizeBytes,
    };
}


