import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { LATEST_DEPLOYED_TIMESTAMP_TAG_NAME } from "./constants";
export var getLatestDeployedTimestamp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(provider) {
    var stackName, _Stacks$, _Stacks$$Tags, _Stacks$$Tags$find, _ref2, Stacks;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
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
              return Key === LATEST_DEPLOYED_TIMESTAMP_TAG_NAME;
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
//# sourceMappingURL=getLatestDeployedTimestamp.js.map