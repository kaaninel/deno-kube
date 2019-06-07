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
    IoK8sApiStorageV1alpha1VolumeAttachment,
    IoK8sApiStorageV1alpha1VolumeAttachmentFromJSON,
    IoK8sApiStorageV1alpha1VolumeAttachmentToJSON,
    IoK8sApiStorageV1alpha1VolumeAttachmentList,
    IoK8sApiStorageV1alpha1VolumeAttachmentListFromJSON,
    IoK8sApiStorageV1alpha1VolumeAttachmentListToJSON,
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
} from '../models.ts';

export interface CreateStorageV1alpha1VolumeAttachmentRequest {
    body: IoK8sApiStorageV1alpha1VolumeAttachment;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface DeleteStorageV1alpha1CollectionVolumeAttachmentRequest {
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

export interface DeleteStorageV1alpha1VolumeAttachmentRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface ListStorageV1alpha1VolumeAttachmentRequest {
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

export interface PatchStorageV1alpha1VolumeAttachmentRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface ReadStorageV1alpha1VolumeAttachmentRequest {
    name: string;
    pretty?: string;
    exact?: boolean;
    _export?: boolean;
}

export interface ReplaceStorageV1alpha1VolumeAttachmentRequest {
    name: string;
    body: IoK8sApiStorageV1alpha1VolumeAttachment;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface WatchStorageV1alpha1VolumeAttachmentRequest {
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

export interface WatchStorageV1alpha1VolumeAttachmentListRequest {
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
export class StorageV1alpha1Api extends runtime.BaseAPI {

    /**
     * create a VolumeAttachment
     */
    async createStorageV1alpha1VolumeAttachmentRaw(requestParameters: CreateStorageV1alpha1VolumeAttachmentRequest): Promise<runtime.ApiResponse<IoK8sApiStorageV1alpha1VolumeAttachment>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createStorageV1alpha1VolumeAttachment.');
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
            path: `/apis/storage.k8s.io/v1alpha1/volumeattachments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApiStorageV1alpha1VolumeAttachmentToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiStorageV1alpha1VolumeAttachmentFromJSON(jsonValue));
    }

    /**
     * create a VolumeAttachment
     */
    async createStorageV1alpha1VolumeAttachment(requestParameters: CreateStorageV1alpha1VolumeAttachmentRequest): Promise<IoK8sApiStorageV1alpha1VolumeAttachment> {
        const response = await this.createStorageV1alpha1VolumeAttachmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete collection of VolumeAttachment
     */
    async deleteStorageV1alpha1CollectionVolumeAttachmentRaw(requestParameters: DeleteStorageV1alpha1CollectionVolumeAttachmentRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
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
            path: `/apis/storage.k8s.io/v1alpha1/volumeattachments`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of VolumeAttachment
     */
    async deleteStorageV1alpha1CollectionVolumeAttachment(requestParameters: DeleteStorageV1alpha1CollectionVolumeAttachmentRequest): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
        const response = await this.deleteStorageV1alpha1CollectionVolumeAttachmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete a VolumeAttachment
     */
    async deleteStorageV1alpha1VolumeAttachmentRaw(requestParameters: DeleteStorageV1alpha1VolumeAttachmentRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteStorageV1alpha1VolumeAttachment.');
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
            path: `/apis/storage.k8s.io/v1alpha1/volumeattachments/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1StatusFromJSON(jsonValue));
    }

    /**
     * delete a VolumeAttachment
     */
    async deleteStorageV1alpha1VolumeAttachment(requestParameters: DeleteStorageV1alpha1VolumeAttachmentRequest): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
        const response = await this.deleteStorageV1alpha1VolumeAttachmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * get available resources
     */
    async getStorageV1alpha1APIResourcesRaw(): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIResourceList>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/storage.k8s.io/v1alpha1/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON(jsonValue));
    }

    /**
     * get available resources
     */
    async getStorageV1alpha1APIResources(): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
        const response = await this.getStorageV1alpha1APIResourcesRaw();
        return await response.value();
    }

    /**
     * list or watch objects of kind VolumeAttachment
     */
    async listStorageV1alpha1VolumeAttachmentRaw(requestParameters: ListStorageV1alpha1VolumeAttachmentRequest): Promise<runtime.ApiResponse<IoK8sApiStorageV1alpha1VolumeAttachmentList>> {
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
            path: `/apis/storage.k8s.io/v1alpha1/volumeattachments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiStorageV1alpha1VolumeAttachmentListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind VolumeAttachment
     */
    async listStorageV1alpha1VolumeAttachment(requestParameters: ListStorageV1alpha1VolumeAttachmentRequest): Promise<IoK8sApiStorageV1alpha1VolumeAttachmentList> {
        const response = await this.listStorageV1alpha1VolumeAttachmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * partially update the specified VolumeAttachment
     */
    async patchStorageV1alpha1VolumeAttachmentRaw(requestParameters: PatchStorageV1alpha1VolumeAttachmentRequest): Promise<runtime.ApiResponse<IoK8sApiStorageV1alpha1VolumeAttachment>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchStorageV1alpha1VolumeAttachment.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchStorageV1alpha1VolumeAttachment.');
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
            path: `/apis/storage.k8s.io/v1alpha1/volumeattachments/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiStorageV1alpha1VolumeAttachmentFromJSON(jsonValue));
    }

    /**
     * partially update the specified VolumeAttachment
     */
    async patchStorageV1alpha1VolumeAttachment(requestParameters: PatchStorageV1alpha1VolumeAttachmentRequest): Promise<IoK8sApiStorageV1alpha1VolumeAttachment> {
        const response = await this.patchStorageV1alpha1VolumeAttachmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * read the specified VolumeAttachment
     */
    async readStorageV1alpha1VolumeAttachmentRaw(requestParameters: ReadStorageV1alpha1VolumeAttachmentRequest): Promise<runtime.ApiResponse<IoK8sApiStorageV1alpha1VolumeAttachment>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readStorageV1alpha1VolumeAttachment.');
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
            path: `/apis/storage.k8s.io/v1alpha1/volumeattachments/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiStorageV1alpha1VolumeAttachmentFromJSON(jsonValue));
    }

    /**
     * read the specified VolumeAttachment
     */
    async readStorageV1alpha1VolumeAttachment(requestParameters: ReadStorageV1alpha1VolumeAttachmentRequest): Promise<IoK8sApiStorageV1alpha1VolumeAttachment> {
        const response = await this.readStorageV1alpha1VolumeAttachmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * replace the specified VolumeAttachment
     */
    async replaceStorageV1alpha1VolumeAttachmentRaw(requestParameters: ReplaceStorageV1alpha1VolumeAttachmentRequest): Promise<runtime.ApiResponse<IoK8sApiStorageV1alpha1VolumeAttachment>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceStorageV1alpha1VolumeAttachment.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceStorageV1alpha1VolumeAttachment.');
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
            path: `/apis/storage.k8s.io/v1alpha1/volumeattachments/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApiStorageV1alpha1VolumeAttachmentToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiStorageV1alpha1VolumeAttachmentFromJSON(jsonValue));
    }

    /**
     * replace the specified VolumeAttachment
     */
    async replaceStorageV1alpha1VolumeAttachment(requestParameters: ReplaceStorageV1alpha1VolumeAttachmentRequest): Promise<IoK8sApiStorageV1alpha1VolumeAttachment> {
        const response = await this.replaceStorageV1alpha1VolumeAttachmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * watch changes to an object of kind VolumeAttachment. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
     */
    async watchStorageV1alpha1VolumeAttachmentRaw(requestParameters: WatchStorageV1alpha1VolumeAttachmentRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling watchStorageV1alpha1VolumeAttachment.');
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
            path: `/apis/storage.k8s.io/v1alpha1/watch/volumeattachments/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON(jsonValue));
    }

    /**
     * watch changes to an object of kind VolumeAttachment. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
     */
    async watchStorageV1alpha1VolumeAttachment(requestParameters: WatchStorageV1alpha1VolumeAttachmentRequest): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        const response = await this.watchStorageV1alpha1VolumeAttachmentRaw(requestParameters);
        return await response.value();
    }

    /**
     * watch individual changes to a list of VolumeAttachment. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    async watchStorageV1alpha1VolumeAttachmentListRaw(requestParameters: WatchStorageV1alpha1VolumeAttachmentListRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
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
            path: `/apis/storage.k8s.io/v1alpha1/watch/volumeattachments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON(jsonValue));
    }

    /**
     * watch individual changes to a list of VolumeAttachment. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    async watchStorageV1alpha1VolumeAttachmentList(requestParameters: WatchStorageV1alpha1VolumeAttachmentListRequest): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        const response = await this.watchStorageV1alpha1VolumeAttachmentListRaw(requestParameters);
        return await response.value();
    }

}
