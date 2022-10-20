"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTrigger = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Returns a basic serverless function trigger associated to an ApiGatewayContract
 *
 * @argument contract your ApiGatewayContract
 * @argument additionalConfig for example an authorizer reference. Only required when the contract requires authentication
 */
var getTrigger = function getTrigger() {
  for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {
    _ref[_key] = arguments[_key];
  }
  var contract = _ref[0],
    additionalConfig = _ref[1];
  var key = contract.integrationType === 'httpApi' ? 'httpApi' : 'http';

  // @ts-ignore somehow the type inference does not work here
  return (0, _defineProperty2["default"])({}, key, _objectSpread(_objectSpread({}, additionalConfig), {}, {
    path: contract.path,
    method: contract.method
  }));
};
exports.getTrigger = getTrigger;
//# sourceMappingURL=lambdaTrigger.js.map