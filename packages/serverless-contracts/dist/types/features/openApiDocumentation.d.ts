import { OpenAPIV3 } from 'openapi-types';
import { ServerlessContract } from '../types/serverlessContract';
export interface ContractOpenApiDocumentation {
    path: string;
    method: string;
    documentation: OpenAPIV3.OperationObject;
}
export declare const getOpenApiDocumentation: (contract: ServerlessContract) => ContractOpenApiDocumentation | undefined;
//# sourceMappingURL=openApiDocumentation.d.ts.map