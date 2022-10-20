/// <reference lib="dom" />
import { ApiGatewayContract } from '../apiGatewayContract';
import { OutputType, RequestArguments } from '../types';
export declare const getFetchRequest: <Contract extends ApiGatewayContract<string, import("../../../types/http").HttpMethod, import("../types/constants").ApiGatewayIntegrationType, import("../types/constants").ApiGatewayAuthorizerType, import("../../../types/constrainedJSONSchema").ConstrainedJSONSchema | undefined, import("../../../types/constrainedJSONSchema").ConstrainedJSONSchema | undefined, import("../../../types/constrainedJSONSchema").ConstrainedJSONSchema | undefined, import("json-schema-to-ts").JSONSchema7 | undefined, import("json-schema-to-ts").JSONSchema7 | undefined>>(contract: Contract, fetchFunction: typeof fetch, options: import("../types/utils").DefinedProperties<{
    pathParameters: import("../types").PathParametersType<Contract>;
    queryStringParameters: import("../types").QueryStringParametersType<Contract>;
    headers: import("../types").HeadersType<Contract>;
    body: import("../types").BodyType<Contract>;
}> & {
    baseUrl?: string | URL | undefined;
}) => Promise<OutputType<Contract>>;
//# sourceMappingURL=fetchRequest.d.ts.map