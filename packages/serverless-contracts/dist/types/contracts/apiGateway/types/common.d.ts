import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import { ConstrainedJSONSchema } from '../../../types/constrainedJSONSchema';
import { ApiGatewayContract } from '../apiGatewayContract';
export declare type PathParametersType<Contract extends ApiGatewayContract> = Contract['pathParametersSchema'] extends ConstrainedJSONSchema ? FromSchema<Contract['pathParametersSchema']> : undefined;
export declare type QueryStringParametersType<Contract extends ApiGatewayContract> = Contract['queryStringParametersSchema'] extends ConstrainedJSONSchema ? FromSchema<Contract['queryStringParametersSchema']> : undefined;
export declare type HeadersType<Contract extends ApiGatewayContract> = Contract['headersSchema'] extends ConstrainedJSONSchema ? FromSchema<Contract['headersSchema']> : undefined;
export declare type BodyType<Contract extends ApiGatewayContract> = Contract['bodySchema'] extends JSONSchema ? FromSchema<Contract['bodySchema']> : undefined;
export declare type OutputType<Contract extends ApiGatewayContract> = Contract['outputSchema'] extends JSONSchema ? FromSchema<Contract['outputSchema']> : void;
//# sourceMappingURL=common.d.ts.map