import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
export var getOpenApiDocumentation = function getOpenApiDocumentation(contract) {
  var _contract$pathParamet, _contract$queryString;
  var contractDocumentation = {
    responses: {
      '200': {
        description: 'Success'
      }
    }
  };
  if (contract.outputSchema !== undefined && contractDocumentation.responses[200] !== undefined) {
    contractDocumentation.responses[200] = _objectSpread(_objectSpread({}, contractDocumentation.responses[200]), {}, {
      content: {
        'application/json': {
          // This cast is done because there is differences between JsonSchema and OpenAPIV3.SchemaObject specs
          // It may be fixed later
          // @ref https://swagger.io/specification/
          schema: contract.outputSchema
        }
      }
    });
  }
  if (((_contract$pathParamet = contract.pathParametersSchema) === null || _contract$pathParamet === void 0 ? void 0 : _contract$pathParamet.properties) !== undefined) {
    var _contractDocumentatio;
    contractDocumentation.parameters = [].concat(_toConsumableArray(Object.entries(contract.pathParametersSchema.properties).map(function (_ref) {
      var _contract$pathParamet2, _contract$pathParamet3, _contract$pathParamet4;
      var _ref2 = _slicedToArray(_ref, 2),
        variableName = _ref2[0],
        variableDefinition = _ref2[1];
      return {
        name: variableName,
        "in": 'path',
        // This cast is done because there is differences between JsonSchema and OpenAPIV3.SchemaObject specs
        // It may be fixed later
        // @ref https://swagger.io/specification/
        schema: variableDefinition,
        required: (_contract$pathParamet2 = (_contract$pathParamet3 = contract.pathParametersSchema) === null || _contract$pathParamet3 === void 0 ? void 0 : (_contract$pathParamet4 = _contract$pathParamet3.required) === null || _contract$pathParamet4 === void 0 ? void 0 : _contract$pathParamet4.includes(variableName)) !== null && _contract$pathParamet2 !== void 0 ? _contract$pathParamet2 : false
      };
    })), _toConsumableArray((_contractDocumentatio = contractDocumentation.parameters) !== null && _contractDocumentatio !== void 0 ? _contractDocumentatio : []));
  }
  if (((_contract$queryString = contract.queryStringParametersSchema) === null || _contract$queryString === void 0 ? void 0 : _contract$queryString.properties) !== undefined) {
    var _contractDocumentatio2;
    contractDocumentation.parameters = [].concat(_toConsumableArray(Object.entries(contract.queryStringParametersSchema.properties).map(function (_ref3) {
      var _contract$queryString2, _contract$queryString3, _contract$queryString4;
      var _ref4 = _slicedToArray(_ref3, 2),
        variableName = _ref4[0],
        variableDefinition = _ref4[1];
      return {
        name: variableName,
        "in": 'query',
        // This cast is done because there is differences between JsonSchema and OpenAPIV3.SchemaObject specs
        // It may be fixed later
        // @ref https://swagger.io/specification/
        schema: variableDefinition,
        required: (_contract$queryString2 = (_contract$queryString3 = contract.queryStringParametersSchema) === null || _contract$queryString3 === void 0 ? void 0 : (_contract$queryString4 = _contract$queryString3.required) === null || _contract$queryString4 === void 0 ? void 0 : _contract$queryString4.includes(variableName)) !== null && _contract$queryString2 !== void 0 ? _contract$queryString2 : false
      };
    })), _toConsumableArray((_contractDocumentatio2 = contractDocumentation.parameters) !== null && _contractDocumentatio2 !== void 0 ? _contractDocumentatio2 : []));
  }
  if (contract.bodySchema !== undefined) {
    contractDocumentation.requestBody = {
      content: {
        'application/json': {
          // This cast is done because there is differences between JsonSchema and OpenAPIV3.SchemaObject specs
          // It may be fixed later
          // @ref https://swagger.io/specification/
          schema: contract.bodySchema
        }
      }
    };
  }
  return {
    path: contract.path,
    method: contract.method.toLowerCase(),
    documentation: contractDocumentation
  };
};
//# sourceMappingURL=openApiDocumentation.js.map