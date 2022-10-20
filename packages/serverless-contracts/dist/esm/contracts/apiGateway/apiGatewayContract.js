import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import isUndefined from 'lodash/isUndefined';
import omitBy from 'lodash/omitBy';
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
 */
export var ApiGatewayContract = /*#__PURE__*/function () {
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
    _classCallCheck(this, ApiGatewayContract);
    _defineProperty(this, "contractType", 'apiGateway');
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
  _createClass(ApiGatewayContract, [{
    key: "getInputSchema",
    value: function getInputSchema() {
      var properties = omitBy({
        pathParameters: this.pathParametersSchema,
        queryStringParameters: this.queryStringParametersSchema,
        headers: this.headersSchema,
        body: this.bodySchema
      }, isUndefined);
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
//# sourceMappingURL=apiGatewayContract.js.map