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
    IoK8sApiAuditregistrationV1alpha1AuditSink,
    IoK8sApiAuditregistrationV1alpha1AuditSinkFromJSON,
    IoK8sApiAuditregistrationV1alpha1AuditSinkToJSON,
    IoK8sApiAuditregistrationV1alpha1AuditSinkList,
    IoK8sApiAuditregistrationV1alpha1AuditSinkListFromJSON,
    IoK8sApiAuditregistrationV1alpha1AuditSinkListToJSON,
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

export interface CreateAuditregistrationV1alpha1AuditSinkRequest {
    body: IoK8sApiAuditregistrationV1alpha1AuditSink;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface DeleteAuditregistrationV1alpha1AuditSinkRequest {
    name: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface DeleteAuditregistrationV1alpha1CollectionAuditSinkRequest {
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

export interface ListAuditregistrationV1alpha1AuditSinkRequest {
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

export interface PatchAuditregistrationV1alpha1AuditSinkRequest {
    name: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface ReadAuditregistrationV1alpha1AuditSinkRequest {
    name: string;
    pretty?: string;
    exact?: boolean;
    _export?: boolean;
}

export interface ReplaceAuditregistrationV1alpha1AuditSinkRequest {
    name: string;
    body: IoK8sApiAuditregistrationV1alpha1AuditSink;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface WatchAuditregistrationV1alpha1AuditSinkRequest {
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

export interface WatchAuditregistrationV1alpha1AuditSinkListRequest {
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
export class AuditregistrationV1alpha1Api extends runtime.BaseAPI {

    /**
     * create an AuditSink
     */
    async createAuditregistrationV1alpha1AuditSinkRaw(requestParameters: CreateAuditregistrationV1alpha1AuditSinkRequest): Promise<runtime.ApiResponse<IoK8sApiAuditregistrationV1alpha1AuditSink>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createAuditregistrationV1alpha1AuditSink.');
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
            path: `/apis/auditregistration.k8s.io/v1alpha1/auditsinks`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApiAuditregistrationV1alpha1AuditSinkToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiAuditregistrationV1alpha1AuditSinkFromJSON(jsonValue));
    }

    /**
     * create an AuditSink
     */
    async createAuditregistrationV1alpha1AuditSink(requestParameters: CreateAuditregistrationV1alpha1AuditSinkRequest): Promise<IoK8sApiAuditregistrationV1alpha1AuditSink> {
        const response = await this.createAuditregistrationV1alpha1AuditSinkRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete an AuditSink
     */
    async deleteAuditregistrationV1alpha1AuditSinkRaw(requestParameters: DeleteAuditregistrationV1alpha1AuditSinkRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteAuditregistrationV1alpha1AuditSink.');
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
            path: `/apis/auditregistration.k8s.io/v1alpha1/auditsinks/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1StatusFromJSON(jsonValue));
    }

    /**
     * delete an AuditSink
     */
    async deleteAuditregistrationV1alpha1AuditSink(requestParameters: DeleteAuditregistrationV1alpha1AuditSinkRequest): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
        const response = await this.deleteAuditregistrationV1alpha1AuditSinkRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete collection of AuditSink
     */
    async deleteAuditregistrationV1alpha1CollectionAuditSinkRaw(requestParameters: DeleteAuditregistrationV1alpha1CollectionAuditSinkRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
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
            path: `/apis/auditregistration.k8s.io/v1alpha1/auditsinks`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of AuditSink
     */
    async deleteAuditregistrationV1alpha1CollectionAuditSink(requestParameters: DeleteAuditregistrationV1alpha1CollectionAuditSinkRequest): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
        const response = await this.deleteAuditregistrationV1alpha1CollectionAuditSinkRaw(requestParameters);
        return await response.value();
    }

    /**
     * get available resources
     */
    async getAuditregistrationV1alpha1APIResourcesRaw(): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIResourceList>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/auditregistration.k8s.io/v1alpha1/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON(jsonValue));
    }

    /**
     * get available resources
     */
    async getAuditregistrationV1alpha1APIResources(): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
        const response = await this.getAuditregistrationV1alpha1APIResourcesRaw();
        return await response.value();
    }

    /**
     * list or watch objects of kind AuditSink
     */
    async listAuditregistrationV1alpha1AuditSinkRaw(requestParameters: ListAuditregistrationV1alpha1AuditSinkRequest): Promise<runtime.ApiResponse<IoK8sApiAuditregistrationV1alpha1AuditSinkList>> {
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
            path: `/apis/auditregistration.k8s.io/v1alpha1/auditsinks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiAuditregistrationV1alpha1AuditSinkListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind AuditSink
     */
    async listAuditregistrationV1alpha1AuditSink(requestParameters: ListAuditregistrationV1alpha1AuditSinkRequest): Promise<IoK8sApiAuditregistrationV1alpha1AuditSinkList> {
        const response = await this.listAuditregistrationV1alpha1AuditSinkRaw(requestParameters);
        return await response.value();
    }

    /**
     * partially update the specified AuditSink
     */
    async patchAuditregistrationV1alpha1AuditSinkRaw(requestParameters: PatchAuditregistrationV1alpha1AuditSinkRequest): Promise<runtime.ApiResponse<IoK8sApiAuditregistrationV1alpha1AuditSink>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchAuditregistrationV1alpha1AuditSink.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchAuditregistrationV1alpha1AuditSink.');
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
            path: `/apis/auditregistration.k8s.io/v1alpha1/auditsinks/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiAuditregistrationV1alpha1AuditSinkFromJSON(jsonValue));
    }

    /**
     * partially update the specified AuditSink
     */
    async patchAuditregistrationV1alpha1AuditSink(requestParameters: PatchAuditregistrationV1alpha1AuditSinkRequest): Promise<IoK8sApiAuditregistrationV1alpha1AuditSink> {
        const response = await this.patchAuditregistrationV1alpha1AuditSinkRaw(requestParameters);
        return await response.value();
    }

    /**
     * read the specified AuditSink
     */
    async readAuditregistrationV1alpha1AuditSinkRaw(requestParameters: ReadAuditregistrationV1alpha1AuditSinkRequest): Promise<runtime.ApiResponse<IoK8sApiAuditregistrationV1alpha1AuditSink>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readAuditregistrationV1alpha1AuditSink.');
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
            path: `/apis/auditregistration.k8s.io/v1alpha1/auditsinks/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiAuditregistrationV1alpha1AuditSinkFromJSON(jsonValue));
    }

    /**
     * read the specified AuditSink
     */
    async readAuditregistrationV1alpha1AuditSink(requestParameters: ReadAuditregistrationV1alpha1AuditSinkRequest): Promise<IoK8sApiAuditregistrationV1alpha1AuditSink> {
        const response = await this.readAuditregistrationV1alpha1AuditSinkRaw(requestParameters);
        return await response.value();
    }

    /**
     * replace the specified AuditSink
     */
    async replaceAuditregistrationV1alpha1AuditSinkRaw(requestParameters: ReplaceAuditregistrationV1alpha1AuditSinkRequest): Promise<runtime.ApiResponse<IoK8sApiAuditregistrationV1alpha1AuditSink>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceAuditregistrationV1alpha1AuditSink.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceAuditregistrationV1alpha1AuditSink.');
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
            path: `/apis/auditregistration.k8s.io/v1alpha1/auditsinks/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApiAuditregistrationV1alpha1AuditSinkToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiAuditregistrationV1alpha1AuditSinkFromJSON(jsonValue));
    }

    /**
     * replace the specified AuditSink
     */
    async replaceAuditregistrationV1alpha1AuditSink(requestParameters: ReplaceAuditregistrationV1alpha1AuditSinkRequest): Promise<IoK8sApiAuditregistrationV1alpha1AuditSink> {
        const response = await this.replaceAuditregistrationV1alpha1AuditSinkRaw(requestParameters);
        return await response.value();
    }

    /**
     * watch changes to an object of kind AuditSink. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
     */
    async watchAuditregistrationV1alpha1AuditSinkRaw(requestParameters: WatchAuditregistrationV1alpha1AuditSinkRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling watchAuditregistrationV1alpha1AuditSink.');
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
            path: `/apis/auditregistration.k8s.io/v1alpha1/watch/auditsinks/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON(jsonValue));
    }

    /**
     * watch changes to an object of kind AuditSink. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
     */
    async watchAuditregistrationV1alpha1AuditSink(requestParameters: WatchAuditregistrationV1alpha1AuditSinkRequest): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        const response = await this.watchAuditregistrationV1alpha1AuditSinkRaw(requestParameters);
        return await response.value();
    }

    /**
     * watch individual changes to a list of AuditSink. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    async watchAuditregistrationV1alpha1AuditSinkListRaw(requestParameters: WatchAuditregistrationV1alpha1AuditSinkListRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
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
            path: `/apis/auditregistration.k8s.io/v1alpha1/watch/auditsinks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON(jsonValue));
    }

    /**
     * watch individual changes to a list of AuditSink. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    async watchAuditregistrationV1alpha1AuditSinkList(requestParameters: WatchAuditregistrationV1alpha1AuditSinkListRequest): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        const response = await this.watchAuditregistrationV1alpha1AuditSinkListRaw(requestParameters);
        return await response.value();
    }

}
