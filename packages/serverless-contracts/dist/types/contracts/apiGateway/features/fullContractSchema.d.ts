import { ApiGatewayContract } from '../apiGatewayContract';
import { FullContractSchemaType } from '../types';
export declare const getFullContractSchema: <Contract extends ApiGatewayContract<string, import("../../../types/http").HttpMethod, import("../types/constants").ApiGatewayIntegrationType, import("../types/constants").ApiGatewayAuthorizerType, import("../../../types/constrainedJSONSchema").ConstrainedJSONSchema | undefined, import("../../../types/constrainedJSONSchema").ConstrainedJSONSchema | undefined, import("../../../types/constrainedJSONSchema").ConstrainedJSONSchema | undefined, import("json-schema-to-ts").JSONSchema7 | undefined, import("json-schema-to-ts").JSONSchema7 | undefined>>(contract: Contract) => FullContractSchemaType<Contract["path"], Contract["method"], Contract["integrationType"], Contract["pathParametersSchema"], Contract["queryStringParametersSchema"], Contract["headersSchema"], Contract["bodySchema"], Contract["outputSchema"], import("../types/utils").DefinedProperties<{
    contractId: {
        const: string;
    };
    contractType: {
        const: Contract["integrationType"];
    };
    path: {
        const: Contract["path"];
    };
    method: {
        const: Contract["method"];
    };
    pathParameters: Contract["pathParametersSchema"];
    queryStringParameters: Contract["queryStringParametersSchema"];
    headers: Contract["headersSchema"];
    body: Contract["bodySchema"];
    output: Contract["outputSchema"];
}>>;
//# sourceMappingURL=fullContractSchema.d.ts.map