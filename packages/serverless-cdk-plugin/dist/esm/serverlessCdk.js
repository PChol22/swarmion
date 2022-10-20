import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { App, Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import merge from 'lodash/merge';
import resolveConfigPath from 'serverless/lib/cli/resolve-configuration-path';
import { ServerlessConstruct } from "./types";
import { throwIfBootstrapMetadataDetected } from "./utils";
var resolveServerlessConfigPath = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", resolveConfigPath());
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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var configPath, serverlessConfigFile, MyConstruct, isConstruct;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
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
            isConstruct = typeof MyConstruct === 'function' && (MyConstruct.prototype instanceof ServerlessConstruct || MyConstruct.prototype instanceof Construct);
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
export var ServerlessCdkPlugin = /*#__PURE__*/function () {
  function ServerlessCdkPlugin(serverless, cliOptions, _ref3) {
    var _this = this;
    var log = _ref3.log;
    _classCallCheck(this, ServerlessCdkPlugin);
    _defineProperty(this, "constructInstantiationPromise", undefined);
    serverless.configSchemaHandler.defineTopLevelProperty('construct', {
      type: 'object' // A class is an object
    });

    this.cliOptions = cliOptions;
    this.log = log;
    this.serverless = serverless;
    this.commands = {};
    this.stackName = 'myStackName';
    this.app = new App({
      // Used to detect asset usage through metadata
      context: {
        'aws:cdk:enable-asset-metadata': true
      }
    });
    this.stack = new Stack(this.app, this.stackName);
    this.hooks = {
      initialize: function () {
        var _initialize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
          return _regeneratorRuntime.wrap(function _callee3$(_context3) {
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
          var _resolve = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(_ref4) {
            var address;
            return _regeneratorRuntime.wrap(function _callee4$(_context4) {
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
  _createClass(ServerlessCdkPlugin, [{
    key: "resolveConstruct",
    value: function () {
      var _resolveConstruct = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
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
      var _instantiateConstruct = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
        var serverlessConfigFile, ServerlessCdkConstruct, isServerlessConstruct;
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return getServerlessConfigFile();
              case 2:
                serverlessConfigFile = _context6.sent;
                ServerlessCdkConstruct = serverlessConfigFile.construct;
                isServerlessConstruct = typeof ServerlessCdkConstruct === 'function' && ServerlessCdkConstruct.prototype instanceof ServerlessConstruct;
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
      throwIfBootstrapMetadataDetected({
        Resources: Resources
      });
      merge(this.serverless.service, {
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
_defineProperty(ServerlessCdkPlugin, "getCdkPropertyHelper", function (prop) {
  return "${serverlessCdkBridgePlugin:".concat(prop, "}");
});
_defineProperty(ServerlessCdkPlugin, "ServerlessConstruct", ServerlessConstruct);
//# sourceMappingURL=serverlessCdk.js.map