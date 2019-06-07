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
    IoK8sApimachineryPkgVersionInfo,
    IoK8sApimachineryPkgVersionInfoFromJSON,
    IoK8sApimachineryPkgVersionInfoToJSON,
} from '../models';

/**
 * no description
 */
export class VersionApi extends runtime.BaseAPI {

    /**
     * get the code version
     */
    async getCodeVersionRaw(): Promise<runtime.ApiResponse<IoK8sApimachineryPkgVersionInfo>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/version/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgVersionInfoFromJSON(jsonValue));
    }

    /**
     * get the code version
     */
    async getCodeVersion(): Promise<IoK8sApimachineryPkgVersionInfo> {
        const response = await this.getCodeVersionRaw();
        return await response.value();
    }

}
