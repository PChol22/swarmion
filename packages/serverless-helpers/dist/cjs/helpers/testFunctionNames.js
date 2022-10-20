"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var MAX_AWS_LAMBDA_NAME_LENGTH = 64;
var STAGE = 'production';
var getFunctionNames = function getFunctionNames(config) {
  var _config$functions;
  return Object.keys((_config$functions = config.functions) !== null && _config$functions !== void 0 ? _config$functions : []);
};
var getFullFunctionName = function getFullFunctionName(config, functionName) {
  return "".concat(config.service, "-").concat(STAGE, "-").concat(functionName);
};

/**
 * Test that all the automatically generated function names will pass the 64 characters AWS limit
 *
 * In Swarmion, we use the `dev`, `staging`, `production` convention, so we test with the longest suffix
 *
 * @param config serverless configuration object
 */
var testFunctionNames = function testFunctionNames(config) {
  var functionNames = getFunctionNames(config);
  if (functionNames.length === 0) {
    it('has no functions declared', function () {
      expect(functionNames).toEqual([]);
    });
    return;
  }
  it.each(functionNames)("has function %s which generated name contains less than or equal to ".concat(MAX_AWS_LAMBDA_NAME_LENGTH, " chars"), function (functionName) {
    var fullFunctionName = getFullFunctionName(config, functionName);
    expect(fullFunctionName.length).toBeLessThanOrEqual(MAX_AWS_LAMBDA_NAME_LENGTH);
  });
};
var _default = testFunctionNames;
exports["default"] = _default;
//# sourceMappingURL=testFunctionNames.js.map