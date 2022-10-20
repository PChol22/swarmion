"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiGatewayContract = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _omitBy = _interopRequireDefault(require("lodash/omitBy"));
/**
 * ApiGatewayContract:
 *
 * a contract used to define a type-safe interaction between AWS Services through Api Gateway.
 *
 * Main features:
 * - input and output dynamic validation with JSONSchemas on both end of the contract;
 * - type inference for both input and output;
 * - generation of a contract document that can be checked for breaking changes;
 * - generation of open api documentation
 */var ApiGatewayContract = /*#__PURE__*/function () {
  /**
   * Builds a new ApiGateway contract
   *
   * @param id an id to uniquely identify the contract among services. Beware of uniqueness!
   * @param path the path on which the lambda will be triggered
   * @param method the http method
   * @param integrationType httpApi or restApi, see https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html
   * @param pathParametersSchema a JSONSchema used to validate the path parameters and infer their types.
   * Please note that the `as const` directive is necessary to properly infer the type from the schema.
   * See https://github.com/ThomasAribart/json-schema-to-ts#fromschema.
   * Also please note that for Typescript reasons, you need to explicitly pass `undefined` if you don't want to use the schema.
   * @param queryStringParametersSchema a JSONSchema used to validate the query parameters and infer their types (Same constraints).
   * @param headersSchema a JSONSchema used to validate the headers and infer their types (Same constraints).
   * @param bodySchema a JSONSchema used to validate the body and infer its type (Same constraints).
   * @param outputSchema a JSONSchema used to validate the output and infer its type (Same constraints).
   * @param authorizerType indicates which type of authorizer is used for this contract.
   */
  function ApiGatewayContract(props) {
    (0, _classCallCheck2["default"])(this, ApiGatewayContract);
    (0, _defineProperty2["default"])(this, "contractType", 'apiGateway');
    this.id = props.id;
    this.path = props.path;
    this.method = props.method;
    this.integrationType = props.integrationType;
    this.pathParametersSchema = props.pathParametersSchema;
    this.queryStringParametersSchema = props.queryStringParametersSchema;
    this.headersSchema = props.headersSchema;
    this.bodySchema = props.bodySchema;
    this.outputSchema = props.outputSchema;
    this.inputSchema = this.getInputSchema();
    this.authorizerType = props.authorizerType;
  }
  (0, _createClass2["default"])(ApiGatewayContract, [{
    key: "getInputSchema",
    value: function getInputSchema() {
      var properties = (0, _omitBy["default"])({
        pathParameters: this.pathParametersSchema,
        queryStringParameters: this.queryStringParametersSchema,
        headers: this.headersSchema,
        body: this.bodySchema
      }, _isUndefined["default"]);
      return {
        type: 'object',
        properties: properties,
        // @ts-ignore here object.keys is not precise enough
        required: Object.keys(properties),
        additionalProperties: true
      };
    }
  }]);
  return ApiGatewayContract;
}();
exports.ApiGatewayContract = ApiGatewayContract;
//# sourceMappingURL=apiGatewayContract.js.map