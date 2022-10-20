import { AWS } from '@serverless/typescript';
import { O } from 'ts-toolbelt';
import { CleanEmptyObject, Unpacked } from '../../../types/utilities';
import { ApiGatewayContract } from '../apiGatewayContract';
import { ApiGatewayAuthorizerType, ApiGatewayIntegrationType, ApiGatewayKey } from './constants';
export declare type ApiGatewayTriggerKey<ApiGatewayIntegration extends ApiGatewayIntegrationType> = ApiGatewayIntegration extends 'httpApi' ? 'httpApi' : 'http';
export declare type ApiGatewayLambdaCompleteTriggerType<Key extends ApiGatewayKey, AuthorizerType extends ApiGatewayAuthorizerType> = {
    [key in Key]: {
        path: string;
        method: string;
    } & ApiGatewayLambdaAdditionalConfigType<Key, AuthorizerType>;
};
export declare type LambdaFunction = Exclude<AWS['functions'], undefined>[string];
declare type LambdaEvents = Unpacked<LambdaFunction['events']>;
declare type ApiGatewayLambdaAdditionalConfigSimpleType<IntegrationType extends ApiGatewayKey> = Omit<Exclude<Extract<LambdaEvents, Record<IntegrationType, unknown>>[IntegrationType], string>, 'path' | 'method'>;
declare type ApiGatewayLambdaAdditionalConfigType<IntegrationType extends ApiGatewayKey, AuthorizerType extends ApiGatewayAuthorizerType> = AuthorizerType extends undefined ? CleanEmptyObject<O.Omit<ApiGatewayLambdaAdditionalConfigSimpleType<IntegrationType>, 'authorizer'>> : O.Required<ApiGatewayLambdaAdditionalConfigSimpleType<IntegrationType>, 'authorizer'>;
export declare type ApiGatewayTriggerArgs<Contract extends ApiGatewayContract> = Contract['authorizerType'] extends undefined ? [
    Contract,
    ApiGatewayLambdaAdditionalConfigType<ApiGatewayTriggerKey<Contract['integrationType']>, Contract['authorizerType']>
] | [Contract] : [
    Contract,
    ApiGatewayLambdaAdditionalConfigType<ApiGatewayTriggerKey<Contract['integrationType']>, Contract['authorizerType']>
];
export {};
//# sourceMappingURL=lambdaTrigger.d.ts.map