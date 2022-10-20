import middy from '@middy/core';
import type { Handler } from 'aws-lambda';
import { JSONSchema } from 'json-schema-to-ts';
interface Options {
    inputSchema?: JSONSchema;
    outputSchema?: JSONSchema;
}
declare const applyHttpMiddlewares: <Event_1, Result>(handler: Handler<Event_1, Result>, { inputSchema, outputSchema }: Options) => middy.MiddyfiedHandler<Event_1, Result, Error, import("aws-lambda").Context>;
export default applyHttpMiddlewares;
//# sourceMappingURL=applyHttpMiddlewares.d.ts.map