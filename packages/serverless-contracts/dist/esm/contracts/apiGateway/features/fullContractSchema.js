import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import isUndefined from 'lodash/isUndefined';
import omitBy from 'lodash/omitBy';
/**
 * Returns the aggregated ApiGatewayContract schema in order to validate the inputs of lambdas.
 *
 * This also enables to infer the type with `json-schema-to-ts`.
 *
 *  @param contract your ApiGatewayContract
 */
export var getFullContractSchema = function getFullContractSchema(contract) {
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
  }, omitBy({
    pathParameters: contract.pathParametersSchema,
    queryStringParameters: contract.queryStringParametersSchema,
    headers: contract.headersSchema,
    body: contract.bodySchema,
    output: contract.outputSchema
  }, isUndefined));
  return {
    type: 'object',
    // @ts-ignore type inference does not work here
    properties: properties,
    // @ts-ignore type inference does not work here
    required: Object.keys(properties),
    additionalProperties: false
  };
};
//# sourceMappingURL=fullContractSchema.js.map