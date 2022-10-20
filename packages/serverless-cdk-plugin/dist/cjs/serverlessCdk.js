"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServerlessCdkPlugin = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _awsCdkLib = require("aws-cdk-lib");
var _constructs = require("constructs");
var _merge = _interopRequireDefault(require("lodash/merge"));
var _resolveConfigurationPath = _interopRequireDefault(require("serverless/lib/cli/resolve-configuration-path"));
var _types = require("./types");
var _utils = require("./utils");
var resolveServerlessConfigPath = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _resolveConfigurationPath["default"])());
          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function resolveServerlessConfigPath() {
    return _ref.apply(this, arguments);
  };
}();
var getServerlessConfigFile = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var configPath, serverlessConfigFile, MyConstruct, isConstruct;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return resolveServerlessConfigPath();
          case 2:
            configPath = _context2.sent;
            _context2.next = 5;
            return require(configPath);
          case 5:
            serverlessConfigFile = _context2.sent;
            MyConstruct = serverlessConfigFile.construct;
            if (!(MyConstruct === undefined)) {
              _context2.next = 9;
              break;
            }
            throw new Error('Missing construct property in serverless configuration');
          case 9:
            isConstruct = typeof MyConstruct === 'function' && (MyConstruct.prototype instanceof _types.ServerlessConstruct || MyConstruct.prototype instanceof _constructs.Construct);
            if (isConstruct) {
              _context2.next = 12;
              break;
            }
            throw new Error('construct should be a ServerlessConstruct or a Construct');
          case 12:
            return _context2.abrupt("return", serverlessConfigFile);
          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function getServerlessConfigFile() {
    return _ref2.apply(this, arguments);
  };
}();
var ServerlessCdkPlugin = /*#__PURE__*/function () {
  function ServerlessCdkPlugin(serverless, cliOptions, _ref3) {
    var _this = this;
    var log = _ref3.log;
    (0, _classCallCheck2["default"])(this, ServerlessCdkPlugin);
    (0, _defineProperty2["default"])(this, "constructInstantiationPromise", undefined);
    serverless.configSchemaHandler.defineTopLevelProperty('construct', {
      type: 'object' // A class is an object
    });

    this.cliOptions = cliOptions;
    this.log = log;
    this.serverless = serverless;
    this.commands = {};
    this.stackName = 'myStackName';
    this.app = new _awsCdkLib.App({
      // Used to detect asset usage through metadata
      context: {
        'aws:cdk:enable-asset-metadata': true
      }
    });
    this.stack = new _awsCdkLib.Stack(this.app, this.stackName);
    this.hooks = {
      initialize: function () {
        var _initialize = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
          return _regenerator["default"].wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this.resolveConstruct();
                case 2:
                  return _context3.abrupt("return", _context3.sent);
                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        function initialize() {
          return _initialize.apply(this, arguments);
        }
        return initialize;
      }(),
      'after:package:compileEvents': function afterPackageCompileEvents() {
        return _this.appendCloudformationResources();
      }
    };
    this.configurationVariablesSources = {
      serverlessCdkBridgePlugin: {
        resolve: function () {
          var _resolve = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref4) {
            var address;
            return _regenerator["default"].wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    address = _ref4.address;
                    _context4.next = 3;
                    return _this.resolveConstruct();
                  case 3:
                    if (!(_this.construct === undefined)) {
                      _context4.next = 5;
                      break;
                    }
                    throw new Error('Construct has not been instanciated');
                  case 5:
                    if (address in _this.construct) {
                      _context4.next = 7;
                      break;
                    }
                    throw new Error('Unexpected');
                  case 7:
                    return _context4.abrupt("return", {
                      // @ts-expect-error we cannot know at build time if the adress key is indeed in the construct
                      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                      value: _this.stack.resolve(_this.construct[address])
                    });
                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
          function resolve(_x) {
            return _resolve.apply(this, arguments);
          }
          return resolve;
        }()
      }
    };
  }
  (0, _createClass2["default"])(ServerlessCdkPlugin, [{
    key: "resolveConstruct",
    value: function () {
      var _resolveConstruct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.construct === undefined && this.constructInstantiationPromise === undefined) {
                  this.constructInstantiationPromise = this.instantiateConstruct();
                }
                _context5.next = 3;
                return this.constructInstantiationPromise;
              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function resolveConstruct() {
        return _resolveConstruct.apply(this, arguments);
      }
      return resolveConstruct;
    }()
  }, {
    key: "instantiateConstruct",
    value: function () {
      var _instantiateConstruct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var serverlessConfigFile, ServerlessCdkConstruct, isServerlessConstruct;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return getServerlessConfigFile();
              case 2:
                serverlessConfigFile = _context6.sent;
                ServerlessCdkConstruct = serverlessConfigFile.construct;
                isServerlessConstruct = typeof ServerlessCdkConstruct === 'function' && ServerlessCdkConstruct.prototype instanceof _types.ServerlessConstruct;
                if (isServerlessConstruct) {
                  this.construct = new ServerlessCdkConstruct(this.stack, 'cdk', {
                    serverless: serverlessConfigFile
                  });
                } else {
                  this.construct = new ServerlessCdkConstruct(this.stack, 'cdk');
                }
              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function instantiateConstruct() {
        return _instantiateConstruct.apply(this, arguments);
      }
      return instantiateConstruct;
    }()
  }, {
    key: "appendCloudformationResources",
    value: function appendCloudformationResources() {
      var _ref5 = this.app.synth().getStackByName(this.stackName).template,
        Resources = _ref5.Resources,
        Outputs = _ref5.Outputs,
        Conditions = _ref5.Conditions,
        Mappings = _ref5.Mappings;
      (0, _utils.throwIfBootstrapMetadataDetected)({
        Resources: Resources
      });
      (0, _merge["default"])(this.serverless.service, {
        resources: {
          Resources: Resources,
          Outputs: Outputs,
          Conditions: Conditions,
          Mappings: Mappings
        }
      });
    }
  }]);
  return ServerlessCdkPlugin;
}();
exports.ServerlessCdkPlugin = ServerlessCdkPlugin;
(0, _defineProperty2["default"])(ServerlessCdkPlugin, "getCdkPropertyHelper", function (prop) {
  return "${serverlessCdkBridgePlugin:".concat(prop, "}");
});
(0, _defineProperty2["default"])(ServerlessCdkPlugin, "ServerlessConstruct", _types.ServerlessConstruct);
//# sourceMappingURL=serverlessCdk.js.map