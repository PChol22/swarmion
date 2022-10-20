import { JSONSchema } from 'json-schema-to-ts';
import { ServerlessContract } from '@swarmion/serverless-contracts';
export declare const serviceOptionsSchema: {
    readonly type: "object";
    readonly properties: {
        readonly provides: {
            readonly type: "object";
            readonly patternProperties: {
                readonly '^[a-zA-Z0-9]{1,255}$': {
                    readonly type: "object";
                    readonly properties: {};
                };
            };
        };
        readonly consumes: {
            readonly type: "object";
            readonly patternProperties: {
                readonly '^[a-zA-Z0-9]{1,255}$': {
                    readonly type: "object";
                    readonly properties: {};
                };
            };
        };
    };
    readonly required: readonly ["provides", "consumes"];
};
export declare type ServiceOptions = {
    contracts: ServerlessContracts;
};
export declare type ServerlessContracts = {
    provides: Record<string, ServerlessContract>;
    consumes: Record<string, ServerlessContract>;
};
export interface ServerlessContractSchemas {
    provides: Record<string, JSONSchema>;
    consumes: Record<string, JSONSchema>;
}
export interface RemoteServerlessContractSchemas extends ServerlessContractSchemas {
    gitCommit: string;
    contractsVersion: '1.0.0';
}
//# sourceMappingURL=serviceOptions.d.ts.map