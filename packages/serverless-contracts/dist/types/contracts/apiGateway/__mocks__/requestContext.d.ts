import { APIGatewayEventRequestContextV2WithAuthorizer, APIGatewayEventRequestContextWithAuthorizer, Context } from 'aws-lambda';
export declare const getRequestContextMock: (args?: Partial<APIGatewayEventRequestContextWithAuthorizer<undefined>>) => APIGatewayEventRequestContextWithAuthorizer<undefined>;
export declare const getRequestContextMockV2: (args?: Partial<APIGatewayEventRequestContextV2WithAuthorizer<undefined>>) => APIGatewayEventRequestContextV2WithAuthorizer<undefined>;
export declare const getHandlerContextMock: (args?: Partial<Context>) => Context;
//# sourceMappingURL=requestContext.d.ts.map