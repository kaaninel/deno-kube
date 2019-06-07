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
    IoK8sApiCoordinationV1beta1Lease,
    IoK8sApiCoordinationV1beta1LeaseFromJSON,
    IoK8sApiCoordinationV1beta1LeaseToJSON,
    IoK8sApiCoordinationV1beta1LeaseList,
    IoK8sApiCoordinationV1beta1LeaseListFromJSON,
    IoK8sApiCoordinationV1beta1LeaseListToJSON,
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

export interface CreateCoordinationV1beta1NamespacedLeaseRequest {
    namespace: string;
    body: IoK8sApiCoordinationV1beta1Lease;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface DeleteCoordinationV1beta1CollectionNamespacedLeaseRequest {
    namespace: string;
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

export interface DeleteCoordinationV1beta1NamespacedLeaseRequest {
    name: string;
    namespace: string;
    pretty?: string;
    dryRun?: string;
    gracePeriodSeconds?: number;
    orphanDependents?: boolean;
    propagationPolicy?: string;
    body?: IoK8sApimachineryPkgApisMetaV1DeleteOptions;
}

export interface ListCoordinationV1beta1LeaseForAllNamespacesRequest {
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

export interface ListCoordinationV1beta1NamespacedLeaseRequest {
    namespace: string;
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

export interface PatchCoordinationV1beta1NamespacedLeaseRequest {
    name: string;
    namespace: string;
    body: object;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
    force?: boolean;
}

export interface ReadCoordinationV1beta1NamespacedLeaseRequest {
    name: string;
    namespace: string;
    pretty?: string;
    exact?: boolean;
    _export?: boolean;
}

export interface ReplaceCoordinationV1beta1NamespacedLeaseRequest {
    name: string;
    namespace: string;
    body: IoK8sApiCoordinationV1beta1Lease;
    pretty?: string;
    dryRun?: string;
    fieldManager?: string;
}

export interface WatchCoordinationV1beta1LeaseListForAllNamespacesRequest {
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

export interface WatchCoordinationV1beta1NamespacedLeaseRequest {
    name: string;
    namespace: string;
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

export interface WatchCoordinationV1beta1NamespacedLeaseListRequest {
    namespace: string;
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
export class CoordinationV1beta1Api extends runtime.BaseAPI {

    /**
     * create a Lease
     */
    async createCoordinationV1beta1NamespacedLeaseRaw(requestParameters: CreateCoordinationV1beta1NamespacedLeaseRequest): Promise<runtime.ApiResponse<IoK8sApiCoordinationV1beta1Lease>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling createCoordinationV1beta1NamespacedLease.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createCoordinationV1beta1NamespacedLease.');
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
            path: `/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leases`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApiCoordinationV1beta1LeaseToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiCoordinationV1beta1LeaseFromJSON(jsonValue));
    }

    /**
     * create a Lease
     */
    async createCoordinationV1beta1NamespacedLease(requestParameters: CreateCoordinationV1beta1NamespacedLeaseRequest): Promise<IoK8sApiCoordinationV1beta1Lease> {
        const response = await this.createCoordinationV1beta1NamespacedLeaseRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete collection of Lease
     */
    async deleteCoordinationV1beta1CollectionNamespacedLeaseRaw(requestParameters: DeleteCoordinationV1beta1CollectionNamespacedLeaseRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling deleteCoordinationV1beta1CollectionNamespacedLease.');
        }

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
            path: `/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leases`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1StatusFromJSON(jsonValue));
    }

    /**
     * delete collection of Lease
     */
    async deleteCoordinationV1beta1CollectionNamespacedLease(requestParameters: DeleteCoordinationV1beta1CollectionNamespacedLeaseRequest): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
        const response = await this.deleteCoordinationV1beta1CollectionNamespacedLeaseRaw(requestParameters);
        return await response.value();
    }

    /**
     * delete a Lease
     */
    async deleteCoordinationV1beta1NamespacedLeaseRaw(requestParameters: DeleteCoordinationV1beta1NamespacedLeaseRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1Status>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteCoordinationV1beta1NamespacedLease.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling deleteCoordinationV1beta1NamespacedLease.');
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
            path: `/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leases/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApimachineryPkgApisMetaV1DeleteOptionsToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1StatusFromJSON(jsonValue));
    }

    /**
     * delete a Lease
     */
    async deleteCoordinationV1beta1NamespacedLease(requestParameters: DeleteCoordinationV1beta1NamespacedLeaseRequest): Promise<IoK8sApimachineryPkgApisMetaV1Status> {
        const response = await this.deleteCoordinationV1beta1NamespacedLeaseRaw(requestParameters);
        return await response.value();
    }

    /**
     * get available resources
     */
    async getCoordinationV1beta1APIResourcesRaw(): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1APIResourceList>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // BearerToken authentication
        }

        const response = await this.request({
            path: `/apis/coordination.k8s.io/v1beta1/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1APIResourceListFromJSON(jsonValue));
    }

    /**
     * get available resources
     */
    async getCoordinationV1beta1APIResources(): Promise<IoK8sApimachineryPkgApisMetaV1APIResourceList> {
        const response = await this.getCoordinationV1beta1APIResourcesRaw();
        return await response.value();
    }

    /**
     * list or watch objects of kind Lease
     */
    async listCoordinationV1beta1LeaseForAllNamespacesRaw(requestParameters: ListCoordinationV1beta1LeaseForAllNamespacesRequest): Promise<runtime.ApiResponse<IoK8sApiCoordinationV1beta1LeaseList>> {
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
            path: `/apis/coordination.k8s.io/v1beta1/leases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiCoordinationV1beta1LeaseListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind Lease
     */
    async listCoordinationV1beta1LeaseForAllNamespaces(requestParameters: ListCoordinationV1beta1LeaseForAllNamespacesRequest): Promise<IoK8sApiCoordinationV1beta1LeaseList> {
        const response = await this.listCoordinationV1beta1LeaseForAllNamespacesRaw(requestParameters);
        return await response.value();
    }

    /**
     * list or watch objects of kind Lease
     */
    async listCoordinationV1beta1NamespacedLeaseRaw(requestParameters: ListCoordinationV1beta1NamespacedLeaseRequest): Promise<runtime.ApiResponse<IoK8sApiCoordinationV1beta1LeaseList>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling listCoordinationV1beta1NamespacedLease.');
        }

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
            path: `/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leases`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiCoordinationV1beta1LeaseListFromJSON(jsonValue));
    }

    /**
     * list or watch objects of kind Lease
     */
    async listCoordinationV1beta1NamespacedLease(requestParameters: ListCoordinationV1beta1NamespacedLeaseRequest): Promise<IoK8sApiCoordinationV1beta1LeaseList> {
        const response = await this.listCoordinationV1beta1NamespacedLeaseRaw(requestParameters);
        return await response.value();
    }

    /**
     * partially update the specified Lease
     */
    async patchCoordinationV1beta1NamespacedLeaseRaw(requestParameters: PatchCoordinationV1beta1NamespacedLeaseRequest): Promise<runtime.ApiResponse<IoK8sApiCoordinationV1beta1Lease>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling patchCoordinationV1beta1NamespacedLease.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling patchCoordinationV1beta1NamespacedLease.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchCoordinationV1beta1NamespacedLease.');
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
            path: `/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leases/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiCoordinationV1beta1LeaseFromJSON(jsonValue));
    }

    /**
     * partially update the specified Lease
     */
    async patchCoordinationV1beta1NamespacedLease(requestParameters: PatchCoordinationV1beta1NamespacedLeaseRequest): Promise<IoK8sApiCoordinationV1beta1Lease> {
        const response = await this.patchCoordinationV1beta1NamespacedLeaseRaw(requestParameters);
        return await response.value();
    }

    /**
     * read the specified Lease
     */
    async readCoordinationV1beta1NamespacedLeaseRaw(requestParameters: ReadCoordinationV1beta1NamespacedLeaseRequest): Promise<runtime.ApiResponse<IoK8sApiCoordinationV1beta1Lease>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling readCoordinationV1beta1NamespacedLease.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling readCoordinationV1beta1NamespacedLease.');
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
            path: `/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leases/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiCoordinationV1beta1LeaseFromJSON(jsonValue));
    }

    /**
     * read the specified Lease
     */
    async readCoordinationV1beta1NamespacedLease(requestParameters: ReadCoordinationV1beta1NamespacedLeaseRequest): Promise<IoK8sApiCoordinationV1beta1Lease> {
        const response = await this.readCoordinationV1beta1NamespacedLeaseRaw(requestParameters);
        return await response.value();
    }

    /**
     * replace the specified Lease
     */
    async replaceCoordinationV1beta1NamespacedLeaseRaw(requestParameters: ReplaceCoordinationV1beta1NamespacedLeaseRequest): Promise<runtime.ApiResponse<IoK8sApiCoordinationV1beta1Lease>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling replaceCoordinationV1beta1NamespacedLease.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling replaceCoordinationV1beta1NamespacedLease.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling replaceCoordinationV1beta1NamespacedLease.');
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
            path: `/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leases/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: IoK8sApiCoordinationV1beta1LeaseToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApiCoordinationV1beta1LeaseFromJSON(jsonValue));
    }

    /**
     * replace the specified Lease
     */
    async replaceCoordinationV1beta1NamespacedLease(requestParameters: ReplaceCoordinationV1beta1NamespacedLeaseRequest): Promise<IoK8sApiCoordinationV1beta1Lease> {
        const response = await this.replaceCoordinationV1beta1NamespacedLeaseRaw(requestParameters);
        return await response.value();
    }

    /**
     * watch individual changes to a list of Lease. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    async watchCoordinationV1beta1LeaseListForAllNamespacesRaw(requestParameters: WatchCoordinationV1beta1LeaseListForAllNamespacesRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
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
            path: `/apis/coordination.k8s.io/v1beta1/watch/leases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON(jsonValue));
    }

    /**
     * watch individual changes to a list of Lease. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    async watchCoordinationV1beta1LeaseListForAllNamespaces(requestParameters: WatchCoordinationV1beta1LeaseListForAllNamespacesRequest): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        const response = await this.watchCoordinationV1beta1LeaseListForAllNamespacesRaw(requestParameters);
        return await response.value();
    }

    /**
     * watch changes to an object of kind Lease. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
     */
    async watchCoordinationV1beta1NamespacedLeaseRaw(requestParameters: WatchCoordinationV1beta1NamespacedLeaseRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling watchCoordinationV1beta1NamespacedLease.');
        }

        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling watchCoordinationV1beta1NamespacedLease.');
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
            path: `/apis/coordination.k8s.io/v1beta1/watch/namespaces/{namespace}/leases/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))).replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON(jsonValue));
    }

    /**
     * watch changes to an object of kind Lease. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.
     */
    async watchCoordinationV1beta1NamespacedLease(requestParameters: WatchCoordinationV1beta1NamespacedLeaseRequest): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        const response = await this.watchCoordinationV1beta1NamespacedLeaseRaw(requestParameters);
        return await response.value();
    }

    /**
     * watch individual changes to a list of Lease. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    async watchCoordinationV1beta1NamespacedLeaseListRaw(requestParameters: WatchCoordinationV1beta1NamespacedLeaseListRequest): Promise<runtime.ApiResponse<IoK8sApimachineryPkgApisMetaV1WatchEvent>> {
        if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
            throw new runtime.RequiredError('namespace','Required parameter requestParameters.namespace was null or undefined when calling watchCoordinationV1beta1NamespacedLeaseList.');
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
            path: `/apis/coordination.k8s.io/v1beta1/watch/namespaces/{namespace}/leases`.replace(`{${"namespace"}}`, encodeURIComponent(String(requestParameters.namespace))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IoK8sApimachineryPkgApisMetaV1WatchEventFromJSON(jsonValue));
    }

    /**
     * watch individual changes to a list of Lease. deprecated: use the \'watch\' parameter with a list operation instead.
     */
    async watchCoordinationV1beta1NamespacedLeaseList(requestParameters: WatchCoordinationV1beta1NamespacedLeaseListRequest): Promise<IoK8sApimachineryPkgApisMetaV1WatchEvent> {
        const response = await this.watchCoordinationV1beta1NamespacedLeaseListRaw(requestParameters);
        return await response.value();
    }

}
