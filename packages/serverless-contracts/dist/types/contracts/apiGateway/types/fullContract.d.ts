import { JSONSchema } from 'json-schema-to-ts';
import { DefinedProperties } from './utils';
declare type AllFullContractProperties<Path, Method, IntegrationType, PathParametersSchema extends JSONSchema | undefined, QueryStringParametersSchema extends JSONSchema | undefined, HeadersSchema extends JSONSchema | undefined, BodySchema extends JSONSchema | undefined, OutputSchema extends JSONSchema | undefined> = {
    contractId: {
        const: string;
    };
    contractType: {
        const: IntegrationType;
    };
    path: {
        const: Path;
    };
    method: {
        const: Method;
    };
    pathParameters: PathParametersSchema;
    queryStringParameters: QueryStringParametersSchema;
    headers: HeadersSchema;
    body: BodySchema;
    output: OutputSchema;
};
export interface FullContractSchemaType<Path, Method, IntegrationType, PathParametersSchema extends JSONSchema | undefined, QueryStringParametersSchema extends JSONSchema | undefined, HeadersSchema extends JSONSchema | undefined, BodySchema extends JSONSchema | undefined, OutputSchema extends JSONSchema | undefined, DefinedFullContractProperties = DefinedProperties<AllFullContractProperties<Path, Method, IntegrationType, PathParametersSchema, QueryStringParametersSchema, HeadersSchema, BodySchema, OutputSchema>>> {
    type: 'object';
    properties: DefinedFullContractProperties;
    required: Array<keyof DefinedFullContractProperties>;
    additionalProperties: false;
}
export {};
//# sourceMappingURL=fullContract.d.ts.map