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


import * as runtime from '../runtime.ts';
import {
    IoK8sApimachineryPkgApisMetaV1APIResourceList,
    IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON,
    IoK8sApimachineryPkgApisMetaV1APIResourceListToJSON,
    IoK8sApimachineryPkgApisMetaV1DeleteOptions,
    IoK8sApimachineryPkgApisMetaV1DeleteOptionsFromJSON,
    IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON,
    IoK8sApimachineryPkgApisMetaV1Status,
    IoK8sApimachineryPkgApisMetaV1StatusFromJSON,
    IoK8sApimachineryPkgApisMetaV1StatusToJSON,
    IoK8sApimachineryPkgApisMetaV1WatchEvent,
    IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON,
    IoK8sApimachineryPkgApisMetaV1WatchEventToJSON,
    IoK8sKubeAggregatorPkgApisApiregistrationV1APIService,
    IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceFromJSON,
    IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceToJSON,
    IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList,
    IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceListFromJSON,
    IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceListToJSON,
} from '../models.ts';

export interface CreateApiregistrationV1APIServiceRequest {
    body: IoK8sKubeAggregatorPkgApisApiregistrationV1APIService;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface DeleteApiregistrationV1APIServiceRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteApiregistrationV1CollectionAPIServiceRequest {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    dryRun?: string;
    fieldSelector?: string;
    gracePeriodSeconds?: number;
    labelSelector?: string;
    limit?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    resourceVersion?: string;
    timeoutSeconds?: number;
    watch?: boolean;
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface ListApiregistrationV1APIServiceRequest {
    pretty?: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    resourceVersion?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}

export interface PatchApiregistrationV1APIServiceRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface PatchApiregistrationV1APIServiceStatusRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface ReadApiregistrationV1APIServiceRequest {
    name: string;
    pretty?: string;
    exact?: boolean;
    _export?: boolean;
}

export interface ReadApiregistrationV1APIServiceStatusRequest {
    name: string;
    pretty?: string;
}

export interface ReplaceApiregistrationV1APIServiceRequest {
    name: string;
    body: IoK8sKubeAggregatorPkgApisApiregistrationV1APIService;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface ReplaceApiregistrationV1APIServiceStatusRequest {
    name: string;
    body: IoK8sKubeAggregatorPkgApisApiregistrationV1APIService;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface WatchApiregistrationV1APIServiceRequest {
    name: string;
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}

export interface WatchApiregistrationV1APIServiceListRequest {
    allowWatchBookmarks?: boolean;
    _continue?: string;
    fieldSelector?: string;
    labelSelector?: string;
    limit?: number;
    pretty?: string;
    resourceVersion?: string;
    timeoutSeconds?: number;
    watch?: boolean;
}

/**
 * no description
 */
export class ApiregistrationV1Api extends runtime.BaseAPI {

    /**
     * create an APIService
     */
    async createApiregistrationV1APIServiceRaw(requestParameters: CreateApiregistrationV1APIServiceRequest): Promise<runtime.ApiResponse<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createApiregistrationV1APIService.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiregistration.k8s.io/v1/apiservices`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceFromJSON(jsonValue));
    }

    /**
     * create an APIService
     */
    async createApiregistrationV1APIService(requestParameters: CreateApiregistrationV1APIServiceRequest): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService> {
        const response = await this.createApiregistrationV1APIServiceRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete an APIService
     */
    async deleteApiregistrationV1APIServiceRaw(requestParameters: DeleteApiregistrationV1APIServiceRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteApiregistrationV1APIService.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.gracePeriodSeconds !== undefined) {
            queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
        }

        if (requestParameters.orphanDependents !== undefined) {
            queryParameters['orphanDependents'] = requestParameters.orphanDependents;
        }

        if (requestParameters.propagationPolicy !== undefined) {
            queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1StatusFromJSON(jsonValue));
    }

    /**
     * delete an APIService
     */
    async deleteApiregistrationV1APIService(requestParameters: DeleteApiregistrationV1APIServiceRequest): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
        const response = await this.deleteApiregistrationV1APIServiceRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete collection of APIService
     */
    async deleteApiregistrationV1CollectionAPIServiceRaw(requestParameters: DeleteApiregistrationV1CollectionAPIServiceRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.allowWatchBookmarks !== undefined) {
            queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.gracePeriodSeconds !== undefined) {
            queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.orphanDependents !== undefined) {
            queryParameters['orphanDependents'] = requestParameters.orphanDependents;
        }

        if (requestParameters.propagationPolicy !== undefined) {
            queryParameters['propagationPolicy'] = requestParameters.propagationPolicy;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        if (requestParameters.watch !== undefined) {
            queryParameters['watch'] = requestParameters.watch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiregistration.k8s.io/v1/apiservices`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of APIService
     */
    async deleteApiregistrationV1CollectionAPIService(requestParameters: DeleteApiregistrationV1CollectionAPIServiceRequest): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
        const response = await this.deleteApiregistrationV1CollectionAPIServiceRaw(requestParameters);
        return await response.value();
    }

    /**
     * get available resources
     */
    async getApiregistrationV1APIResourcesRaw(): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIResourceList>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiregistration.k8s.io/v1/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON(jsonValue));
    }

    /**
     * get available resources
     */
    async getApiregistrationV1APIResources(): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
        const response = await this.getApiregistrationV1APIResourcesRaw();
        return await response.value();
    }

    /**
     * list or watch objects of kind APIService
     */
    async listApiregistrationV1APIServiceRaw(requestParameters: ListApiregistrationV1APIServiceRequest): Promise<runtime.ApiResponse<IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.allowWatchBookmarks !== undefined) {
            queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        if (requestParameters.watch !== undefined) {
            queryParameters['watch'] = requestParameters.watch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiregistration.k8s.io/v1/apiservices`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind APIService
     */
    async listApiregistrationV1APIService(requestParameters: ListApiregistrationV1APIServiceRequest): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceList> {
        const response = await this.listApiregistrationV1APIServiceRaw(requestParameters);
        return await response.value();
    }

    /**
     * partially update the specified APIService
     */
    async patchApiregistrationV1APIServiceRaw(requestParameters: PatchApiregistrationV1APIServiceRequest): Promise<runtime.ApiResponse<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchApiregistrationV1APIService.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchApiregistrationV1APIService.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.force !== undefined) {
            queryParameters['force'] = requestParameters.force;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceFromJSON(jsonValue));
    }

    /**
     * partially update the specified APIService
     */
    async patchApiregistrationV1APIService(requestParameters: PatchApiregistrationV1APIServiceRequest): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService> {
        const response = await this.patchApiregistrationV1APIServiceRaw(requestParameters);
        return await response.value();
    }

    /**
     * partially update status of the specified APIService
     */
    async patchApiregistrationV1APIServiceStatusRaw(requestParameters: PatchApiregistrationV1APIServiceStatusRequest): Promise<runtime.ApiResponse<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchApiregistrationV1APIServiceStatus.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchApiregistrationV1APIServiceStatus.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        if (requestParameters.force !== undefined) {
            queryParameters['force'] = requestParameters.force;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceFromJSON(jsonValue));
    }

    /**
     * partially update status of the specified APIService
     */
    async patchApiregistrationV1APIServiceStatus(requestParameters: PatchApiregistrationV1APIServiceStatusRequest): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService> {
        const response = await this.patchApiregistrationV1APIServiceStatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * read the specified APIService
     */
    async readApiregistrationV1APIServiceRaw(requestParameters: ReadApiregistrationV1APIServiceRequest): Promise<runtime.ApiResponse<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readApiregistrationV1APIService.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.exact !== undefined) {
            queryParameters['exact'] = requestParameters.exact;
        }

        if (requestParameters._export !== undefined) {
            queryParameters['export'] = requestParameters._export;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceFromJSON(jsonValue));
    }

    /**
     * read the specified APIService
     */
    async readApiregistrationV1APIService(requestParameters: ReadApiregistrationV1APIServiceRequest): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService> {
        const response = await this.readApiregistrationV1APIServiceRaw(requestParameters);
        return await response.value();
    }

    /**
     * read status of the specified APIService
     */
    async readApiregistrationV1APIServiceStatusRaw(requestParameters: ReadApiregistrationV1APIServiceStatusRequest): Promise<runtime.ApiResponse<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readApiregistrationV1APIServiceStatus.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceFromJSON(jsonValue));
    }

    /**
     * read status of the specified APIService
     */
    async readApiregistrationV1APIServiceStatus(requestParameters: ReadApiregistrationV1APIServiceStatusRequest): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService> {
        const response = await this.readApiregistrationV1APIServiceStatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * replace the specified APIService
     */
    async replaceApiregistrationV1APIServiceRaw(requestParameters: ReplaceApiregistrationV1APIServiceRequest): Promise<runtime.ApiResponse<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceApiregistrationV1APIService.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceApiregistrationV1APIService.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceFromJSON(jsonValue));
    }

    /**
     * replace the specified APIService
     */
    async replaceApiregistrationV1APIService(requestParameters: ReplaceApiregistrationV1APIServiceRequest): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService> {
        const response = await this.replaceApiregistrationV1APIServiceRaw(requestParameters);
        return await response.value();
    }

    /**
     * replace status of the specified APIService
     */
    async replaceApiregistrationV1APIServiceStatusRaw(requestParameters: ReplaceApiregistrationV1APIServiceStatusRequest): Promise<runtime.ApiResponse<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceApiregistrationV1APIServiceStatus.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceApiregistrationV1APIServiceStatus.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.dryRun !== undefined) {
            queryParameters['dryRun'] = requestParameters.dryRun;
        }

        if (requestParameters.fieldManager !== undefined) {
            queryParameters['fieldManager'] = requestParameters.fieldManager;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiregistration.k8s.io/v1/apiservices/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceFromJSON(jsonValue));
    }

    /**
     * replace status of the specified APIService
     */
    async replaceApiregistrationV1APIServiceStatus(requestParameters: ReplaceApiregistrationV1APIServiceStatusRequest): Promise<IoK8sKubeAggregatorPkgApisApiregistrationV1APIService> {
        const response = await this.replaceApiregistrationV1APIServiceStatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * watch changes to an object of kind APIService. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
     */
    async watchApiregistrationV1APIServiceRaw(requestParameters: WatchApiregistrationV1APIServiceRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling watchApiregistrationV1APIService.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.allowWatchBookmarks !== undefined) {
            queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        if (requestParameters.watch !== undefined) {
            queryParameters['watch'] = requestParameters.watch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiregistration.k8s.io/v1/watch/apiservices/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON(jsonValue));
    }

    /**
     * watch changes to an object of kind APIService. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
     */
    async watchApiregistrationV1APIService(requestParameters: WatchApiregistrationV1APIServiceRequest): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        const response = await this.watchApiregistrationV1APIServiceRaw(requestParameters);
        return await response.value();
    }

    /**
     * watch individual changes to a list of APIService. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    async watchApiregistrationV1APIServiceListRaw(requestParameters: WatchApiregistrationV1APIServiceListRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.allowWatchBookmarks !== undefined) {
            queryParameters['allowWatchBookmarks'] = requestParameters.allowWatchBookmarks;
        }

        if (requestParameters._continue !== undefined) {
            queryParameters['continue'] = requestParameters._continue;
        }

        if (requestParameters.fieldSelector !== undefined) {
            queryParameters['fieldSelector'] = requestParameters.fieldSelector;
        }

        if (requestParameters.labelSelector !== undefined) {
            queryParameters['labelSelector'] = requestParameters.labelSelector;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.pretty !== undefined) {
            queryParameters['pretty'] = requestParameters.pretty;
        }

        if (requestParameters.resourceVersion !== undefined) {
            queryParameters['resourceVersion'] = requestParameters.resourceVersion;
        }

        if (requestParameters.timeoutSeconds !== undefined) {
            queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds;
        }

        if (requestParameters.watch !== undefined) {
            queryParameters['watch'] = requestParameters.watch;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/apiregistration.k8s.io/v1/watch/apiservices`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON(jsonValue));
    }

    /**
     * watch individual changes to a list of APIService. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    async watchApiregistrationV1APIServiceList(requestParameters: WatchApiregistrationV1APIServiceListRequest): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        const response = await this.watchApiregistrationV1APIServiceListRaw(requestParameters);
        return await response.value();
    }

}
