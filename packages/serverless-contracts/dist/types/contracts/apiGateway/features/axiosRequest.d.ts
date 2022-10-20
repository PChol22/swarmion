import { AxiosInstance, AxiosResponse } from 'axios';
import { ApiGatewayContract } from '../apiGatewayContract';
import { OutputType, RequestArguments } from '../types';
export declare const getAxiosRequest: <Contract extends ApiGatewayContract<string, import("../../../types/http").HttpMethod, import("../types/constants").ApiGatewayIntegrationType, import("../types/constants").ApiGatewayAuthorizerType, import("../../../types/constrainedJSONSchema").ConstrainedJSONSchema | undefined, import("../../../types/constrainedJSONSchema").ConstrainedJSONSchema | undefined, import("../../../types/constrainedJSONSchema").ConstrainedJSONSchema | undefined, import("json-schema-to-ts").JSONSchema7 | undefined, import("json-schema-to-ts").JSONSchema7 | undefined>>(contract: Contract, axiosClient: AxiosInstance, requestArguments: import("../types/utils").DefinedProperties<{
    pathParameters: import("../types").PathParametersType<Contract>;
    queryStringParameters: import("../types").QueryStringParametersType<Contract>;
    headers: import("../types").HeadersType<Contract>;
    body: import("../types").BodyType<Contract>;
}>) => Promise<AxiosResponse<OutputType<Contract>, any>>;
//# sourceMappingURL=axiosRequest.d.ts.map