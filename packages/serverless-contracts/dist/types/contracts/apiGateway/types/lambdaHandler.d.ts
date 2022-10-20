import type { APIGatewayEventRequestContextJWTAuthorizer, APIGatewayEventRequestContextLambdaAuthorizer, APIGatewayEventRequestContextV2WithAuthorizer, APIGatewayEventRequestContextWithAuthorizer, APIGatewayProxyCallback, APIGatewayProxyCallbackV2, APIGatewayProxyCognitoAuthorizer, APIGatewayProxyEventBase, APIGatewayProxyEventV2WithRequestContext, APIGatewayProxyResult, APIGatewayProxyResultV2, Context } from 'aws-lambda';
import { FromSchema } from 'json-schema-to-ts';
import { ApiGatewayContract } from '../apiGatewayContract';
import { OutputType } from './common';
import { ApiGatewayAuthorizerType, ApiGatewayIntegrationType } from './constants';
import { InputSchemaType } from './input';
import { DefinedProperties } from './utils';
declare type AuthorizerContext<AuthorizerType extends ApiGatewayAuthorizerType> = AuthorizerType extends 'cognito' ? APIGatewayProxyCognitoAuthorizer : AuthorizerType extends 'jwt' ? APIGatewayEventRequestContextJWTAuthorizer : AuthorizerType extends 'lambda' ? APIGatewayEventRequestContextLambdaAuthorizer<unknown> : undefined;
export declare type RequestContext<IntegrationType extends ApiGatewayIntegrationType, AuthorizerType extends ApiGatewayAuthorizerType> = IntegrationType extends 'restApi' ? APIGatewayEventRequestContextWithAuthorizer<AuthorizerContext<AuthorizerType>> : APIGatewayEventRequestContextV2WithAuthorizer<AuthorizerContext<AuthorizerType>>;
export declare type HandlerEventType<Contract extends ApiGatewayContract> = DefinedProperties<{
    requestContext: RequestContext<Contract['integrationType'], Contract['authorizerType']>;
}> & FromSchema<InputSchemaType<Contract['pathParametersSchema'], Contract['queryStringParametersSchema'], Contract['headersSchema'], Contract['bodySchema'], false>>;
declare type HandlerCallback<Contract extends ApiGatewayContract> = Contract['integrationType'] extends 'restApi' ? APIGatewayProxyCallback : APIGatewayProxyCallbackV2;
export declare type HandlerType<Contract extends ApiGatewayContract, AdditionalContext extends Record<string, unknown> | Record<never, never> = Record<never, never>> = (event: HandlerEventType<Contract>, context: Context & AdditionalContext, ...additionalArgs: never[]) => Promise<OutputType<Contract>>;
export declare type ApiGatewayEvent<Contract extends ApiGatewayContract> = Contract['integrationType'] extends 'restApi' ? APIGatewayProxyEventBase<AuthorizerContext<Contract['authorizerType']>> : APIGatewayProxyEventV2WithRequestContext<APIGatewayEventRequestContextV2WithAuthorizer<AuthorizerContext<Contract['authorizerType']>>>;
export declare type ApiGatewayResult<Contract extends ApiGatewayContract> = Contract['integrationType'] extends 'restApi' ? APIGatewayProxyResult : APIGatewayProxyResultV2<OutputType<Contract>>;
export declare type ApiGatewayHandler<Contract extends ApiGatewayContract> = (event: ApiGatewayEvent<Contract>, context: Context, callback: HandlerCallback<Contract>, ...additionalArgs: never[]) => Promise<ApiGatewayResult<Contract>>;
export {};
//# sourceMappingURL=lambdaHandler.d.ts.map