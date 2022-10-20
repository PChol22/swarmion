import { ApiGatewayContract } from '@swarmion/serverless-contracts';
export declare const requestSyncDeployment: ApiGatewayContract<"/request-sync-deployment", "POST", "httpApi", undefined, undefined, undefined, undefined, {
    readonly type: "object";
    readonly properties: {
        readonly serviceId: {
            readonly type: "string";
        };
        readonly applicationId: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["serviceId", "applicationId"];
    readonly additionalProperties: false;
}, {
    readonly type: "object";
    readonly properties: {
        readonly status: {
            readonly enum: readonly ["ACCEPTED", "REJECTED"];
        };
        readonly message: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["status", "message"];
    readonly additionalProperties: false;
}>;
//# sourceMappingURL=requestSyncDeployment.d.ts.map