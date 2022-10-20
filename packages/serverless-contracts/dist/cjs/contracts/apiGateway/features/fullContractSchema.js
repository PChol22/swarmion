"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFullContractSchema = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _omitBy = _interopRequireDefault(require("lodash/omitBy"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Returns the aggregated ApiGatewayContract schema in order to validate the inputs of lambdas.
 *
 * This also enables to infer the type with `json-schema-to-ts`.
 *
 *  @param contract your ApiGatewayContract
 */
var getFullContractSchema = function getFullContractSchema(contract) {
  var properties = _objectSpread({
    contractId: {
      "const": contract.id
    },
    contractType: {
      "const": contract.integrationType
    },
    path: {
      "const": contract.path
    },
    method: {
      "const": contract.method
    }
  }, (0, _omitBy["default"])({
    pathParameters: contract.pathParametersSchema,
    queryStringParameters: contract.queryStringParametersSchema,
    headers: contract.headersSchema,
    body: contract.bodySchema,
    output: contract.outputSchema
  }, _isUndefined["default"]));
  return {
    type: 'object',
    // @ts-ignore type inference does not work here
    properties: properties,
    // @ts-ignore type inference does not work here
    required: Object.keys(properties),
    additionalProperties: false
  };
};
exports.getFullContractSchema = getFullContractSchema;
//# sourceMappingURL=fullContractSchema.js.map