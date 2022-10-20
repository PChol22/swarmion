"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLatestDeployedTimestamp = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _constants = require("./constants");
var getLatestDeployedTimestamp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(provider) {
    var stackName, _Stacks$, _Stacks$$Tags, _Stacks$$Tags$find, _ref2, Stacks;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(provider.naming.getStackName === undefined)) {
              _context.next = 2;
              break;
            }
            throw new Error('Could not get stack name');
          case 2:
            stackName = provider.naming.getStackName();
            _context.prev = 3;
            _context.next = 6;
            return provider.request('CloudFormation', 'describeStacks', {
              StackName: stackName
            });
          case 6:
            _ref2 = _context.sent;
            Stacks = _ref2.Stacks;
            return _context.abrupt("return", Stacks !== undefined ? (_Stacks$ = Stacks[0]) === null || _Stacks$ === void 0 ? void 0 : (_Stacks$$Tags = _Stacks$.Tags) === null || _Stacks$$Tags === void 0 ? void 0 : (_Stacks$$Tags$find = _Stacks$$Tags.find(function (_ref3) {
              var Key = _ref3.Key;
              return Key === _constants.LATEST_DEPLOYED_TIMESTAMP_TAG_NAME;
            })) === null || _Stacks$$Tags$find === void 0 ? void 0 : _Stacks$$Tags$find.Value : undefined);
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", undefined);
          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 11]]);
  }));
  return function getLatestDeployedTimestamp(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.getLatestDeployedTimestamp = getLatestDeployedTimestamp;
//# sourceMappingURL=getLatestDeployedTimestamp.js.map