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


import * as runtime from '../runtime';
import {
    IoK8sApimachineryPkgApisMetaV1APIVersions,
    IoK8sApimachineryPkgApisMetaV1APIVersionsFromJSON,
    IoK8sApimachineryPkgApisMetaV1APIVersionsToJSON,
} from '../models';

/**
 * no description
 */
export class CoreApi extends runtime.BaseAPI {

    /**
     * get available API versions
     */
    async getCoreAPIVersionsRaw(): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIVersions>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/api/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1APIVersionsFromJSON(jsonValue));
    }

    /**
     * get available API versions
     */
    async getCoreAPIVersions(): Promise<IoK8sApimachineryPkgApisMetaV1APIVersions> {
        const response = await this.getCoreAPIVersionsRaw();
        return await response.value();
    }

}
