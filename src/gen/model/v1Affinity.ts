/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.25
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1NodeAffinity } from './v1NodeAffinity';
import { V1PodAffinity } from './v1PodAffinity';
import { V1PodAntiAffinity } from './v1PodAntiAffinity';

/**
* Affinity is a group of affinity scheduling rules.
*/
export class V1Affinity {
    'nodeAffinity'?: V1NodeAffinity;
    'podAffinity'?: V1PodAffinity;
    'podAntiAffinity'?: V1PodAntiAffinity;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nodeAffinity",
            "baseName": "nodeAffinity",
            "type": "V1NodeAffinity"
        },
        {
            "name": "podAffinity",
            "baseName": "podAffinity",
            "type": "V1PodAffinity"
        },
        {
            "name": "podAntiAffinity",
            "baseName": "podAntiAffinity",
            "type": "V1PodAntiAffinity"
        }    ];

    static getAttributeTypeMap() {
        return V1Affinity.attributeTypeMap;
    }
}

