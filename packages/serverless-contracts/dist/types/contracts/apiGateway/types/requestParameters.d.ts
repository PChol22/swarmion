import { HttpMethod } from '../../../types/http';
import { ApiGatewayContract } from '../apiGatewayContract';
import { BodyType, HeadersType, PathParametersType, QueryStringParametersType } from './common';
import { DefinedProperties } from './utils';
export interface RequestParameters<BodyType> {
    method: HttpMethod;
    path: string;
    body?: BodyType;
    headers?: Record<string, string>;
    queryStringParameters?: Record<string, string>;
}
export declare type RequestArguments<Contract extends ApiGatewayContract> = DefinedProperties<{
    pathParameters: PathParametersType<Contract>;
    queryStringParameters: QueryStringParametersType<Contract>;
    headers: HeadersType<Contract>;
    body: BodyType<Contract>;
}>;
//# sourceMappingURL=requestParameters.d.ts.map