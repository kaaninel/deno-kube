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
    IoK8sApiExtensionsV1beta1AllowedCSIDriver,
    IoK8sApiExtensionsV1beta1AllowedCSIDriverFromJSON,
    IoK8sApiExtensionsV1beta1AllowedCSIDriverToJSON,
    IoK8sApiExtensionsV1beta1AllowedFlexVolume,
    IoK8sApiExtensionsV1beta1AllowedFlexVolumeFromJSON,
    IoK8sApiExtensionsV1beta1AllowedFlexVolumeToJSON,
    IoK8sApiExtensionsV1beta1AllowedHostPath,
    IoK8sApiExtensionsV1beta1AllowedHostPathFromJSON,
    IoK8sApiExtensionsV1beta1AllowedHostPathToJSON,
    IoK8sApiExtensionsV1beta1FSGroupStrategyOptions,
    IoK8sApiExtensionsV1beta1FSGroupStrategyOptionsFromJSON,
    IoK8sApiExtensionsV1beta1FSGroupStrategyOptionsToJSON,
    IoK8sApiExtensionsV1beta1HostPortRange,
    IoK8sApiExtensionsV1beta1HostPortRangeFromJSON,
    IoK8sApiExtensionsV1beta1HostPortRangeToJSON,
    IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptions,
    IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptionsFromJSON,
    IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptionsToJSON,
    IoK8sApiExtensionsV1beta1RunAsUserStrategyOptions,
    IoK8sApiExtensionsV1beta1RunAsUserStrategyOptionsFromJSON,
    IoK8sApiExtensionsV1beta1RunAsUserStrategyOptionsToJSON,
    IoK8sApiExtensionsV1beta1RuntimeClassStrategyOptions,
    IoK8sApiExtensionsV1beta1RuntimeClassStrategyOptionsFromJSON,
    IoK8sApiExtensionsV1beta1RuntimeClassStrategyOptionsToJSON,
    IoK8sApiExtensionsV1beta1SELinuxStrategyOptions,
    IoK8sApiExtensionsV1beta1SELinuxStrategyOptionsFromJSON,
    IoK8sApiExtensionsV1beta1SELinuxStrategyOptionsToJSON,
    IoK8sApiExtensionsV1beta1SupplementalGroupsStrategyOptions,
    IoK8sApiExtensionsV1beta1SupplementalGroupsStrategyOptionsFromJSON,
    IoK8sApiExtensionsV1beta1SupplementalGroupsStrategyOptionsToJSON,
} from './index.ts';

/**
 * PodSecurityPolicySpec defines the policy enforced. Deprecated: use PodSecurityPolicySpec from policy API Group instead.
 * @export
 * @interface IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
 */
export interface IoK8sApiExtensionsV1beta1PodSecurityPolicySpec {
    /**
     * allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
     * @type {boolean}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    allowPrivilegeEscalation?: boolean;
    /**
     * AllowedCSIDrivers is a whitelist of inline CSI drivers that must be explicitly set to be embedded within a pod spec. An empty value indicates that any CSI driver can be used for inline ephemeral volumes. This is an alpha field, and is only honored if the API server enables the CSIInlineVolume feature gate.
     * @type {Array<IoK8sApiExtensionsV1beta1AllowedCSIDriver>}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    allowedCSIDrivers?: Array<IoK8sApiExtensionsV1beta1AllowedCSIDriver>;
    /**
     * allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author\'s discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.
     * @type {Array<string>}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    allowedCapabilities?: Array<string>;
    /**
     * allowedFlexVolumes is a whitelist of allowed Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the \"volumes\" field.
     * @type {Array<IoK8sApiExtensionsV1beta1AllowedFlexVolume>}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    allowedFlexVolumes?: Array<IoK8sApiExtensionsV1beta1AllowedFlexVolume>;
    /**
     * allowedHostPaths is a white list of allowed host paths. Empty indicates that all host paths may be used.
     * @type {Array<IoK8sApiExtensionsV1beta1AllowedHostPath>}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    allowedHostPaths?: Array<IoK8sApiExtensionsV1beta1AllowedHostPath>;
    /**
     * AllowedProcMountTypes is a whitelist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.
     * @type {Array<string>}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    allowedProcMountTypes?: Array<string>;
    /**
     * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in \"*\" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to whitelist all allowed unsafe sysctls explicitly to avoid rejection.  Examples: e.g. \"foo/_*\" allows \"foo/bar\", \"foo/baz\", etc. e.g. \"foo.*\" allows \"foo.bar\", \"foo.baz\", etc.
     * @type {Array<string>}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    allowedUnsafeSysctls?: Array<string>;
    /**
     * defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.
     * @type {Array<string>}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    defaultAddCapabilities?: Array<string>;
    /**
     * defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
     * @type {boolean}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    defaultAllowPrivilegeEscalation?: boolean;
    /**
     * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in \"*\" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.  Examples: e.g. \"foo/_*\" forbids \"foo/bar\", \"foo/baz\", etc. e.g. \"foo.*\" forbids \"foo.bar\", \"foo.baz\", etc.
     * @type {Array<string>}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    forbiddenSysctls?: Array<string>;
    /**
     * 
     * @type {IoK8sApiExtensionsV1beta1FSGroupStrategyOptions}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    fsGroup: IoK8sApiExtensionsV1beta1FSGroupStrategyOptions;
    /**
     * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
     * @type {boolean}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    hostIPC?: boolean;
    /**
     * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
     * @type {boolean}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    hostNetwork?: boolean;
    /**
     * hostPID determines if the policy allows the use of HostPID in the pod spec.
     * @type {boolean}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    hostPID?: boolean;
    /**
     * hostPorts determines which host port ranges are allowed to be exposed.
     * @type {Array<IoK8sApiExtensionsV1beta1HostPortRange>}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    hostPorts?: Array<IoK8sApiExtensionsV1beta1HostPortRange>;
    /**
     * privileged determines if a pod can request to be run as privileged.
     * @type {boolean}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    privileged?: boolean;
    /**
     * readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
     * @type {boolean}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    readOnlyRootFilesystem?: boolean;
    /**
     * requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
     * @type {Array<string>}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    requiredDropCapabilities?: Array<string>;
    /**
     * 
     * @type {IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptions}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    runAsGroup?: IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptions;
    /**
     * 
     * @type {IoK8sApiExtensionsV1beta1RunAsUserStrategyOptions}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    runAsUser: IoK8sApiExtensionsV1beta1RunAsUserStrategyOptions;
    /**
     * 
     * @type {IoK8sApiExtensionsV1beta1RuntimeClassStrategyOptions}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    runtimeClass?: IoK8sApiExtensionsV1beta1RuntimeClassStrategyOptions;
    /**
     * 
     * @type {IoK8sApiExtensionsV1beta1SELinuxStrategyOptions}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    seLinux: IoK8sApiExtensionsV1beta1SELinuxStrategyOptions;
    /**
     * 
     * @type {IoK8sApiExtensionsV1beta1SupplementalGroupsStrategyOptions}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    supplementalGroups: IoK8sApiExtensionsV1beta1SupplementalGroupsStrategyOptions;
    /**
     * volumes is a white list of allowed volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use \'*\'.
     * @type {Array<string>}
     * @memberof IoK8sApiExtensionsV1beta1PodSecurityPolicySpec
     */
    volumes?: Array<string>;
}

export function IoK8sApiExtensionsV1beta1PodSecurityPolicySpecFromJSON(json: any): IoK8sApiExtensionsV1beta1PodSecurityPolicySpec {
    return {
        'allowPrivilegeEscalation': !exists(json, 'allowPrivilegeEscalation') ? undefined : json['allowPrivilegeEscalation'],
        'allowedCSIDrivers': !exists(json, 'allowedCSIDrivers') ? undefined : (json['allowedCSIDrivers'] as Array<any>).map(IoK8sApiExtensionsV1beta1AllowedCSIDriverFromJSON),
        'allowedCapabilities': !exists(json, 'allowedCapabilities') ? undefined : json['allowedCapabilities'],
        'allowedFlexVolumes': !exists(json, 'allowedFlexVolumes') ? undefined : (json['allowedFlexVolumes'] as Array<any>).map(IoK8sApiExtensionsV1beta1AllowedFlexVolumeFromJSON),
        'allowedHostPaths': !exists(json, 'allowedHostPaths') ? undefined : (json['allowedHostPaths'] as Array<any>).map(IoK8sApiExtensionsV1beta1AllowedHostPathFromJSON),
        'allowedProcMountTypes': !exists(json, 'allowedProcMountTypes') ? undefined : json['allowedProcMountTypes'],
        'allowedUnsafeSysctls': !exists(json, 'allowedUnsafeSysctls') ? undefined : json['allowedUnsafeSysctls'],
        'defaultAddCapabilities': !exists(json, 'defaultAddCapabilities') ? undefined : json['defaultAddCapabilities'],
        'defaultAllowPrivilegeEscalation': !exists(json, 'defaultAllowPrivilegeEscalation') ? undefined : json['defaultAllowPrivilegeEscalation'],
        'forbiddenSysctls': !exists(json, 'forbiddenSysctls') ? undefined : json['forbiddenSysctls'],
        'fsGroup': IoK8sApiExtensionsV1beta1FSGroupStrategyOptionsFromJSON(json['fsGroup']),
        'hostIPC': !exists(json, 'hostIPC') ? undefined : json['hostIPC'],
        'hostNetwork': !exists(json, 'hostNetwork') ? undefined : json['hostNetwork'],
        'hostPID': !exists(json, 'hostPID') ? undefined : json['hostPID'],
        'hostPorts': !exists(json, 'hostPorts') ? undefined : (json['hostPorts'] as Array<any>).map(IoK8sApiExtensionsV1beta1HostPortRangeFromJSON),
        'privileged': !exists(json, 'privileged') ? undefined : json['privileged'],
        'readOnlyRootFilesystem': !exists(json, 'readOnlyRootFilesystem') ? undefined : json['readOnlyRootFilesystem'],
        'requiredDropCapabilities': !exists(json, 'requiredDropCapabilities') ? undefined : json['requiredDropCapabilities'],
        'runAsGroup': !exists(json, 'runAsGroup') ? undefined : IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptionsFromJSON(json['runAsGroup']),
        'runAsUser': IoK8sApiExtensionsV1beta1RunAsUserStrategyOptionsFromJSON(json['runAsUser']),
        'runtimeClass': !exists(json, 'runtimeClass') ? undefined : IoK8sApiExtensionsV1beta1RuntimeClassStrategyOptionsFromJSON(json['runtimeClass']),
        'seLinux': IoK8sApiExtensionsV1beta1SELinuxStrategyOptionsFromJSON(json['seLinux']),
        'supplementalGroups': IoK8sApiExtensionsV1beta1SupplementalGroupsStrategyOptionsFromJSON(json['supplementalGroups']),
        'volumes': !exists(json, 'volumes') ? undefined : json['volumes'],
    };
}

export function IoK8sApiExtensionsV1beta1PodSecurityPolicySpecToJSON(value?: IoK8sApiExtensionsV1beta1PodSecurityPolicySpec): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'allowPrivilegeEscalation': value.allowPrivilegeEscalation,
        'allowedCSIDrivers': value.allowedCSIDrivers === undefined ? undefined : (value.allowedCSIDrivers as Array<any>).map(IoK8sApiExtensionsV1beta1AllowedCSIDriverToJSON),
        'allowedCapabilities': value.allowedCapabilities,
        'allowedFlexVolumes': value.allowedFlexVolumes === undefined ? undefined : (value.allowedFlexVolumes as Array<any>).map(IoK8sApiExtensionsV1beta1AllowedFlexVolumeToJSON),
        'allowedHostPaths': value.allowedHostPaths === undefined ? undefined : (value.allowedHostPaths as Array<any>).map(IoK8sApiExtensionsV1beta1AllowedHostPathToJSON),
        'allowedProcMountTypes': value.allowedProcMountTypes,
        'allowedUnsafeSysctls': value.allowedUnsafeSysctls,
        'defaultAddCapabilities': value.defaultAddCapabilities,
        'defaultAllowPrivilegeEscalation': value.defaultAllowPrivilegeEscalation,
        'forbiddenSysctls': value.forbiddenSysctls,
        'fsGroup': IoK8sApiExtensionsV1beta1FSGroupStrategyOptionsToJSON(value.fsGroup),
        'hostIPC': value.hostIPC,
        'hostNetwork': value.hostNetwork,
        'hostPID': value.hostPID,
        'hostPorts': value.hostPorts === undefined ? undefined : (value.hostPorts as Array<any>).map(IoK8sApiExtensionsV1beta1HostPortRangeToJSON),
        'privileged': value.privileged,
        'readOnlyRootFilesystem': value.readOnlyRootFilesystem,
        'requiredDropCapabilities': value.requiredDropCapabilities,
        'runAsGroup': IoK8sApiExtensionsV1beta1RunAsGroupStrategyOptionsToJSON(value.runAsGroup),
        'runAsUser': IoK8sApiExtensionsV1beta1RunAsUserStrategyOptionsToJSON(value.runAsUser),
        'runtimeClass': IoK8sApiExtensionsV1beta1RuntimeClassStrategyOptionsToJSON(value.runtimeClass),
        'seLinux': IoK8sApiExtensionsV1beta1SELinuxStrategyOptionsToJSON(value.seLinux),
        'supplementalGroups': IoK8sApiExtensionsV1beta1SupplementalGroupsStrategyOptionsToJSON(value.supplementalGroups),
        'volumes': value.volumes,
    };
}


