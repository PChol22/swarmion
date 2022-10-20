import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';
import jsonValidator from '@middy/validator';
var applyHttpMiddlewares = function applyHttpMiddlewares(handler, _ref) {
  var inputSchema = _ref.inputSchema,
    outputSchema = _ref.outputSchema;
  var middyfiedHandler = middy(handler);
  middyfiedHandler.use(jsonBodyParser());
  middyfiedHandler.use(jsonValidator({
    inputSchema: inputSchema,
    outputSchema: outputSchema
  }));
  middyfiedHandler.use(httpErrorHandler());
  return middyfiedHandler;
};
export default applyHttpMiddlewares;
//# sourceMappingURL=applyHttpMiddlewares.js.map