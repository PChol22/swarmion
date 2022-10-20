import { JSONSchema } from 'json-schema-to-ts';
import { DefinedProperties } from './utils';
declare type AllInputProperties<PathParametersSchema extends JSONSchema | undefined, QueryStringParametersSchema extends JSONSchema | undefined, HeadersSchema extends JSONSchema | undefined, BodySchema extends JSONSchema | undefined> = {
    pathParameters: PathParametersSchema;
    queryStringParameters: QueryStringParametersSchema;
    headers: HeadersSchema;
    body: BodySchema;
};
export declare type InputSchemaType<PathParametersSchema extends JSONSchema | undefined, QueryStringParametersSchema extends JSONSchema | undefined, HeadersSchema extends JSONSchema | undefined, BodySchema extends JSONSchema | undefined, AllowAdditionalProperties extends boolean, DefinedInputProperties = DefinedProperties<AllInputProperties<PathParametersSchema, QueryStringParametersSchema, HeadersSchema, BodySchema>>> = {
    type: 'object';
    properties: DefinedInputProperties;
    required: Array<keyof DefinedInputProperties>;
    additionalProperties: AllowAdditionalProperties;
};
export {};
//# sourceMappingURL=input.d.ts.map