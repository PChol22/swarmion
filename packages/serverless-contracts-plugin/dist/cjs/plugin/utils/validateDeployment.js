"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateDeployment = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonSchemaDiff = _interopRequireDefault(require("json-schema-diff"));
var _deploymentTypes = require("../../types/deploymentTypes");
var validateDeployment = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(localContracts, remoteContracts, deploymentStrategy) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(deploymentStrategy === _deploymentTypes.DeploymentStrategies.PROVIDER_FIRST)) {
              _context.next = 5;
              break;
            }
            _context.next = 3;
            return validateProviderFirstDeployment(localContracts, remoteContracts);
          case 3:
            _context.next = 7;
            break;
          case 5:
            _context.next = 7;
            return validateConsumerFirstDeployment(localContracts, remoteContracts);
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function validateDeployment(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * validate a provider-first deployment.
 *
 * In this case, we need to check that:
 * - the contracts provided by the remote are still all provided by the local version
 *
 * @param localContractSchemas
 * @param remoteContractSchemas
 */
exports.validateDeployment = validateDeployment;
var validateProviderFirstDeployment = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(localContractSchemas, remoteContractSchemas) {
    var localProvides, remoteProvides;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            localProvides = localContractSchemas.provides;
            remoteProvides = remoteContractSchemas.provides; // in this case we need to check all the remote provided are still provided
            _context3.next = 4;
            return Promise.all(Object.entries(remoteProvides).map( /*#__PURE__*/function () {
              var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref3) {
                var _ref5, contractName, remoteContractSchema, localContractSchema, _yield$JsonSchemaDiff, removalsFound;
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _ref5 = (0, _slicedToArray2["default"])(_ref3, 2), contractName = _ref5[0], remoteContractSchema = _ref5[1];
                        localContractSchema = localProvides[contractName];
                        if (!(localContractSchema === undefined)) {
                          _context2.next = 4;
                          break;
                        }
                        throw new Error("Expected to find local contract: ".concat(contractName));
                      case 4:
                        _context2.next = 6;
                        return _jsonSchemaDiff["default"].diffSchemas({
                          // @ts-ignore this is not well typed
                          sourceSchema: remoteContractSchema,
                          // @ts-ignore this is not well typed
                          destinationSchema: localContractSchema
                        });
                      case 6:
                        _yield$JsonSchemaDiff = _context2.sent;
                        removalsFound = _yield$JsonSchemaDiff.removalsFound;
                        if (!removalsFound) {
                          _context2.next = 10;
                          break;
                        }
                        throw new Error("Unexpected removal in provided contract schema: ".concat(contractName));
                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
              return function (_x6) {
                return _ref4.apply(this, arguments);
              };
            }()));
          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function validateProviderFirstDeployment(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * validate a consumer-first deployment.
 *
 * In this case, we need to check that:
 * - the local version does not consume more than the remote
 *
 * @param localContractSchemas
 * @param remoteContractSchemas
 */
var validateConsumerFirstDeployment = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(localContractSchemas, remoteContractSchemas) {
    var localConsumes, remoteConsumes;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            localConsumes = localContractSchemas.consumes;
            remoteConsumes = remoteContractSchemas.consumes; // the local version does not consume more than the remote
            _context5.next = 4;
            return Promise.all(Object.entries(localConsumes).map( /*#__PURE__*/function () {
              var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref7) {
                var _ref9, contractName, localContractSchema, remoteContractSchema, _yield$JsonSchemaDiff2, additionsFound;
                return _regenerator["default"].wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _ref9 = (0, _slicedToArray2["default"])(_ref7, 2), contractName = _ref9[0], localContractSchema = _ref9[1];
                        remoteContractSchema = remoteConsumes[contractName];
                        if (!(remoteContractSchema === undefined)) {
                          _context4.next = 4;
                          break;
                        }
                        throw new Error("Expected to find remote contract: ".concat(contractName));
                      case 4:
                        _context4.next = 6;
                        return _jsonSchemaDiff["default"].diffSchemas({
                          // @ts-ignore this is not well typed
                          sourceSchema: remoteContractSchema,
                          // @ts-ignore this is not well typed
                          destinationSchema: localContractSchema
                        });
                      case 6:
                        _yield$JsonSchemaDiff2 = _context4.sent;
                        additionsFound = _yield$JsonSchemaDiff2.additionsFound;
                        if (!additionsFound) {
                          _context4.next = 10;
                          break;
                        }
                        throw new Error("Unexpected addition in consumed contract schema: ".concat(contractName));
                      case 10:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));
              return function (_x9) {
                return _ref8.apply(this, arguments);
              };
            }()));
          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function validateConsumerFirstDeployment(_x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();
//# sourceMappingURL=validateDeployment.js.map