import { JSONSchema } from 'json-schema-to-ts';
import { ConstrainedJSONSchema } from '../../types/constrainedJSONSchema';
import { HttpMethod } from '../../types/http';
import { ApiGatewayAuthorizerType, ApiGatewayIntegrationType } from './types/constants';
import { InputSchemaType } from './types/input';
export declare class ApiGatewayContract<Path extends string = string, Method extends HttpMethod = HttpMethod, IntegrationType extends ApiGatewayIntegrationType = ApiGatewayIntegrationType, AuthorizerType extends ApiGatewayAuthorizerType = ApiGatewayAuthorizerType, PathParametersSchema extends ConstrainedJSONSchema | undefined = ConstrainedJSONSchema | undefined, QueryStringParametersSchema extends ConstrainedJSONSchema | undefined = ConstrainedJSONSchema | undefined, HeadersSchema extends ConstrainedJSONSchema | undefined = ConstrainedJSONSchema | undefined, BodySchema extends JSONSchema | undefined = JSONSchema | undefined, OutputSchema extends JSONSchema | undefined = JSONSchema | undefined> {
    contractType: "apiGateway";
    id: string;
    path: Path;
    method: Method;
    integrationType: IntegrationType;
    authorizerType: AuthorizerType;
    pathParametersSchema: PathParametersSchema;
    queryStringParametersSchema: QueryStringParametersSchema;
    headersSchema: HeadersSchema;
    bodySchema: BodySchema;
    outputSchema: OutputSchema;
    inputSchema: InputSchemaType<PathParametersSchema, QueryStringParametersSchema, HeadersSchema, BodySchema, true>;
    constructor(props: {
        id: string;
        path: Path;
        method: Method;
        integrationType: IntegrationType;
        pathParametersSchema: PathParametersSchema;
        queryStringParametersSchema: QueryStringParametersSchema;
        headersSchema: HeadersSchema;
        bodySchema: BodySchema;
        outputSchema: OutputSchema;
        authorizerType: AuthorizerType;
    });
    private getInputSchema;
}
//# sourceMappingURL=apiGatewayContract.d.ts.map