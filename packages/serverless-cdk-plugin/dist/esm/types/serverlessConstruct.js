import _createClass from "@babel/runtime/helpers/createClass";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
import { Construct } from 'constructs';
export var ServerlessConstruct = /*#__PURE__*/function (_Construct) {
  _inherits(ServerlessConstruct, _Construct);
  var _super = _createSuper(ServerlessConstruct);
  function ServerlessConstruct(scope, id, serverlessProps) {
    var _this;
    _classCallCheck(this, ServerlessConstruct);
    _this = _super.call(this, scope, id);
    _this.serverlessProps = serverlessProps;
    return _this;
  }
  return _createClass(ServerlessConstruct);
}(Construct);
//# sourceMappingURL=serverlessConstruct.js.map