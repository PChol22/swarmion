import { ApiGatewayContract } from '../../../contracts';
export declare const pathParametersSchema: {
    readonly type: "object";
    readonly properties: {
        readonly userId: {
            readonly type: "string";
        };
        readonly pageNumber: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["userId", "pageNumber"];
    readonly additionalProperties: false;
};
export declare const queryStringParametersSchema: {
    readonly type: "object";
    readonly properties: {
        readonly testId: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["testId"];
    readonly additionalProperties: false;
};
export declare const headersSchema: {
    readonly type: "object";
    readonly properties: {
        readonly myHeader: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["myHeader"];
};
export declare const bodySchema: {
    readonly type: "object";
    readonly properties: {
        readonly foo: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["foo"];
};
export declare const outputSchema: {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly name: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["id", "name"];
};
export declare const httpApiGatewayContractMock: ApiGatewayContract<"/users/{userId}", "GET", "httpApi", "cognito", {
    readonly type: "object";
    readonly properties: {
        readonly userId: {
            readonly type: "string";
        };
        readonly pageNumber: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["userId", "pageNumber"];
    readonly additionalProperties: false;
}, {
    readonly type: "object";
    readonly properties: {
        readonly testId: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["testId"];
    readonly additionalProperties: false;
}, {
    readonly type: "object";
    readonly properties: {
        readonly myHeader: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["myHeader"];
}, {
    readonly type: "object";
    readonly properties: {
        readonly foo: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["foo"];
}, {
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
        };
        readonly name: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["id", "name"];
}>;
//# sourceMappingURL=httpApiGatewayContract.d.ts.map