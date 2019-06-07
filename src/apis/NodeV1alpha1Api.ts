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
    IoK8sApiNodeV1alpha1RuntimeClass,
    IoK8sApiNodeV1alpha1RuntimeClassFromJSON,
    IoK8sApiNodeV1alpha1RuntimeClassToJSON,
    IoK8sApiNodeV1alpha1RuntimeClassList,
    IoK8sApiNodeV1alpha1RuntimeClassListFromJSON,
    IoK8sApiNodeV1alpha1RuntimeClassListToJSON,
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
} from '../models/index.ts';

export interface CreateNodeV1alpha1RuntimeClassRequest {
    body: IoK8sApiNodeV1alpha1RuntimeClass;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface DeleteNodeV1alpha1CollectionRuntimeClassRequest {
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

export interface DeleteNodeV1alpha1RuntimeClassRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface ListNodeV1alpha1RuntimeClassRequest {
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

export interface PatchNodeV1alpha1RuntimeClassRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface ReadNodeV1alpha1RuntimeClassRequest {
    name: string;
    pretty?: string;
    exact?: boolean;
    _export?: boolean;
}

export interface ReplaceNodeV1alpha1RuntimeClassRequest {
    name: string;
    body: IoK8sApiNodeV1alpha1RuntimeClass;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface WatchNodeV1alpha1RuntimeClassRequest {
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

export interface WatchNodeV1alpha1RuntimeClassListRequest {
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
export class NodeV1alpha1Api extends runtime.BaseAPI {

    /**
     * create a RuntimeClass
     */
    async createNodeV1alpha1RuntimeClassRaw(requestParameters: CreateNodeV1alpha1RuntimeClassRequest): Promise<runtime.ApiResponse<IoK8sApiNodeV1alpha1RuntimeClass>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createNodeV1alpha1RuntimeClass.');
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
            path: `/apis/node.k8s.io/v1alpha1/runtimeclasses`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApiNodeV1alpha1RuntimeClassToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiNodeV1alpha1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * create a RuntimeClass
     */
    async createNodeV1alpha1RuntimeClass(requestParameters: CreateNodeV1alpha1RuntimeClassRequest): Promise<IoK8sApiNodeV1alpha1RuntimeClass> {
        const response = await this.createNodeV1alpha1RuntimeClassRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete collection of RuntimeClass
     */
    async deleteNodeV1alpha1CollectionRuntimeClassRaw(requestParameters: DeleteNodeV1alpha1CollectionRuntimeClassRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
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
            path: `/apis/node.k8s.io/v1alpha1/runtimeclasses`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of RuntimeClass
     */
    async deleteNodeV1alpha1CollectionRuntimeClass(requestParameters: DeleteNodeV1alpha1CollectionRuntimeClassRequest): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
        const response = await this.deleteNodeV1alpha1CollectionRuntimeClassRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete a RuntimeClass
     */
    async deleteNodeV1alpha1RuntimeClassRaw(requestParameters: DeleteNodeV1alpha1RuntimeClassRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteNodeV1alpha1RuntimeClass.');
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
            path: `/apis/node.k8s.io/v1alpha1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1StatusFromJSON(jsonValue));
    }

    /**
     * delete a RuntimeClass
     */
    async deleteNodeV1alpha1RuntimeClass(requestParameters: DeleteNodeV1alpha1RuntimeClassRequest): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
        const response = await this.deleteNodeV1alpha1RuntimeClassRaw(requestParameters);
        return await response.value();
    }

    /**
     * get available resources
     */
    async getNodeV1alpha1APIResourcesRaw(): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIResourceList>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/node.k8s.io/v1alpha1/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON(jsonValue));
    }

    /**
     * get available resources
     */
    async getNodeV1alpha1APIResources(): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
        const response = await this.getNodeV1alpha1APIResourcesRaw();
        return await response.value();
    }

    /**
     * list or watch objects of kind RuntimeClass
     */
    async listNodeV1alpha1RuntimeClassRaw(requestParameters: ListNodeV1alpha1RuntimeClassRequest): Promise<runtime.ApiResponse<IoK8sApiNodeV1alpha1RuntimeClassList>> {
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
            path: `/apis/node.k8s.io/v1alpha1/runtimeclasses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiNodeV1alpha1RuntimeClassListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind RuntimeClass
     */
    async listNodeV1alpha1RuntimeClass(requestParameters: ListNodeV1alpha1RuntimeClassRequest): Promise<IoK8sApiNodeV1alpha1RuntimeClassList> {
        const response = await this.listNodeV1alpha1RuntimeClassRaw(requestParameters);
        return await response.value();
    }

    /**
     * partially update the specified RuntimeClass
     */
    async patchNodeV1alpha1RuntimeClassRaw(requestParameters: PatchNodeV1alpha1RuntimeClassRequest): Promise<runtime.ApiResponse<IoK8sApiNodeV1alpha1RuntimeClass>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchNodeV1alpha1RuntimeClass.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchNodeV1alpha1RuntimeClass.');
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
            path: `/apis/node.k8s.io/v1alpha1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiNodeV1alpha1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * partially update the specified RuntimeClass
     */
    async patchNodeV1alpha1RuntimeClass(requestParameters: PatchNodeV1alpha1RuntimeClassRequest): Promise<IoK8sApiNodeV1alpha1RuntimeClass> {
        const response = await this.patchNodeV1alpha1RuntimeClassRaw(requestParameters);
        return await response.value();
    }

    /**
     * read the specified RuntimeClass
     */
    async readNodeV1alpha1RuntimeClassRaw(requestParameters: ReadNodeV1alpha1RuntimeClassRequest): Promise<runtime.ApiResponse<IoK8sApiNodeV1alpha1RuntimeClass>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readNodeV1alpha1RuntimeClass.');
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
            path: `/apis/node.k8s.io/v1alpha1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiNodeV1alpha1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * read the specified RuntimeClass
     */
    async readNodeV1alpha1RuntimeClass(requestParameters: ReadNodeV1alpha1RuntimeClassRequest): Promise<IoK8sApiNodeV1alpha1RuntimeClass> {
        const response = await this.readNodeV1alpha1RuntimeClassRaw(requestParameters);
        return await response.value();
    }

    /**
     * replace the specified RuntimeClass
     */
    async replaceNodeV1alpha1RuntimeClassRaw(requestParameters: ReplaceNodeV1alpha1RuntimeClassRequest): Promise<runtime.ApiResponse<IoK8sApiNodeV1alpha1RuntimeClass>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceNodeV1alpha1RuntimeClass.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceNodeV1alpha1RuntimeClass.');
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
            path: `/apis/node.k8s.io/v1alpha1/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApiNodeV1alpha1RuntimeClassToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiNodeV1alpha1RuntimeClassFromJSON(jsonValue));
    }

    /**
     * replace the specified RuntimeClass
     */
    async replaceNodeV1alpha1RuntimeClass(requestParameters: ReplaceNodeV1alpha1RuntimeClassRequest): Promise<IoK8sApiNodeV1alpha1RuntimeClass> {
        const response = await this.replaceNodeV1alpha1RuntimeClassRaw(requestParameters);
        return await response.value();
    }

    /**
     * watch changes to an object of kind RuntimeClass. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
     */
    async watchNodeV1alpha1RuntimeClassRaw(requestParameters: WatchNodeV1alpha1RuntimeClassRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling watchNodeV1alpha1RuntimeClass.');
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
            path: `/apis/node.k8s.io/v1alpha1/watch/runtimeclasses/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON(jsonValue));
    }

    /**
     * watch changes to an object of kind RuntimeClass. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
     */
    async watchNodeV1alpha1RuntimeClass(requestParameters: WatchNodeV1alpha1RuntimeClassRequest): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        const response = await this.watchNodeV1alpha1RuntimeClassRaw(requestParameters);
        return await response.value();
    }

    /**
     * watch individual changes to a list of RuntimeClass. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    async watchNodeV1alpha1RuntimeClassListRaw(requestParameters: WatchNodeV1alpha1RuntimeClassListRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
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
            path: `/apis/node.k8s.io/v1alpha1/watch/runtimeclasses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON(jsonValue));
    }

    /**
     * watch individual changes to a list of RuntimeClass. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    async watchNodeV1alpha1RuntimeClassList(requestParameters: WatchNodeV1alpha1RuntimeClassListRequest): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        const response = await this.watchNodeV1alpha1RuntimeClassListRaw(requestParameters);
        return await response.value();
    }

}
