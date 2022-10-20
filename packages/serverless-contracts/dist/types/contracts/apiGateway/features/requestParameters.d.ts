import { ApiGatewayContract } from '../apiGatewayContract';
import { BodyType, RequestArguments, RequestParameters } from '../types';
export declare const getRequestParameters: <Contract extends ApiGatewayContract<string, import("../../../types/http").HttpMethod, import("../types/constants").ApiGatewayIntegrationType, import("../types/constants").ApiGatewayAuthorizerType, import("../../../types/constrainedJSONSchema").ConstrainedJSONSchema | undefined, import("../../../types/constrainedJSONSchema").ConstrainedJSONSchema | undefined, import("../../../types/constrainedJSONSchema").ConstrainedJSONSchema | undefined, import("json-schema-to-ts").JSONSchema7 | undefined, import("json-schema-to-ts").JSONSchema7 | undefined>>(contract: Contract, requestArguments: import("../types/utils").DefinedProperties<{
    pathParameters: import("../types").PathParametersType<Contract>;
    queryStringParameters: import("../types").QueryStringParametersType<Contract>;
    headers: import("../types").HeadersType<Contract>;
    body: BodyType<Contract>;
}>) => RequestParameters<BodyType<Contract>>;
//# sourceMappingURL=requestParameters.d.ts.map