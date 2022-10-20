import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { DeploymentStrategies } from "../types/deploymentTypes";
import { ContractSchemasLocation } from "../types/locations";
import { serviceOptionsSchema } from "../types/serviceOptions";
import { getTimestampFromArtifactDirectoryName } from "./utils/artifactDirectory";
import { LATEST_DEPLOYED_TIMESTAMP_TAG_NAME } from "./utils/constants";
import { generateOpenApiDocumentation as _generateOpenApiDocumentation } from "./utils/generateOpenApiDocumentation";
import { listLocalContractSchemas as _listLocalContractSchemas } from "./utils/listLocalContractSchemas";
import { listRemoteContractSchemas as _listRemoteContractSchemas } from "./utils/listRemoteContractSchemas";
import { printContractSchemas } from "./utils/printContractSchemas";
import { uploadContractSchemas as _uploadContractSchemas } from "./utils/uploadContractSchemas";
import { validateDeployment as _validateDeployment } from "./utils/validateDeployment";
export var ServerlessContractsPlugin = /*#__PURE__*/function () {
  function ServerlessContractsPlugin(serverless, cliOptions, _ref) {
    var log = _ref.log;
    _classCallCheck(this, ServerlessContractsPlugin);
    this.cliOptions = cliOptions;
    this.log = log;
    // validate the 'strategy' argument
    if (this.cliOptions.strategy !== undefined && !Object.values(DeploymentStrategies).includes(this.cliOptions.strategy)) {
      throw new Error("Invalid deployment strategy. Choices are ".concat(JSON.stringify(Object.values(DeploymentStrategies))));
    }
    this.serverless = serverless;

    // add validation schema for options
    serverless.configSchemaHandler.defineTopLevelProperty('contracts', serviceOptionsSchema);
    this.commands = {
      localContracts: {
        usage: 'Show local Serverless contracts',
        lifecycleEvents: ['run']
      },
      remoteContracts: {
        usage: 'Show currently deployed Serverless contracts',
        lifecycleEvents: ['run']
      },
      safeDeploy: {
        usage: 'Deploy you service and specify the deployment strategy',
        lifecycleEvents: ['run'],
        options: {
          // Define the '--strategy' option with the '-s' shortcut
          strategy: {
            usage: 'Specify the deployment strategy',
            shortcut: 's',
            required: true,
            // @ts-ignore mistype in @types/serverless
            type: 'string'
          }
        }
      },
      generateOpenApiDocumentation: {
        usage: 'Generate OpenAPI with local Serverless contracts provided by the service',
        lifecycleEvents: ['run']
      }
    };
    this.hooks = {
      'localContracts:run': this.printLocalServerlessContractSchemas.bind(this),
      'remoteContracts:run': this.printRemoteServerlessContractSchemas.bind(this),
      'safeDeploy:run': this.deployWithContractSchemasValidation.bind(this),
      'before:deploy:deploy': this.validateDeployment.bind(this),
      'before:package:finalize': this.tagStackWithTimestamp.bind(this),
      'after:aws:deploy:deploy:uploadArtifacts': this.uploadContractSchemas.bind(this),
      'generateOpenApiDocumentation:run': this.generateOpenApiDocumentation.bind(this)
    };
  }

  /**
   * This command is merely a wrapper around the `deploy` command from the serverless Framework,
   * leveraging the use of the `--strategy` option.
   * Therefore, while this option has been set in the constructor, all we need to to is
   * launch the serverless framework deployment
   */
  _createClass(ServerlessContractsPlugin, [{
    key: "deployWithContractSchemasValidation",
    value: function () {
      var _deployWithContractSchemasValidation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.serverless.pluginManager.spawn('deploy');
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function deployWithContractSchemasValidation() {
        return _deployWithContractSchemasValidation.apply(this, arguments);
      }
      return deployWithContractSchemasValidation;
    }()
  }, {
    key: "listLocalContractSchemas",
    value: function listLocalContractSchemas() {
      return _listLocalContractSchemas(this.serverless);
    }
  }, {
    key: "printLocalServerlessContractSchemas",
    value: function printLocalServerlessContractSchemas() {
      var contractSchemas = this.listLocalContractSchemas();
      printContractSchemas(contractSchemas, ContractSchemasLocation.LOCAL);
    }
  }, {
    key: "printRemoteServerlessContractSchemas",
    value: function () {
      var _printRemoteServerlessContractSchemas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var contractSchemas;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.listRemoteContractSchemas();
              case 2:
                contractSchemas = _context2.sent;
                if (!(contractSchemas === undefined)) {
                  _context2.next = 6;
                  break;
                }
                this.log.error('Unable to retrieve remote contract schemas');
                return _context2.abrupt("return");
              case 6:
                printContractSchemas(contractSchemas, ContractSchemasLocation.REMOTE);
              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function printRemoteServerlessContractSchemas() {
        return _printRemoteServerlessContractSchemas.apply(this, arguments);
      }
      return printRemoteServerlessContractSchemas;
    }()
  }, {
    key: "listRemoteContractSchemas",
    value: function () {
      var _listRemoteContractSchemas2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", _listRemoteContractSchemas(this.serverless));
              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function listRemoteContractSchemas() {
        return _listRemoteContractSchemas2.apply(this, arguments);
      }
      return listRemoteContractSchemas;
    }()
  }, {
    key: "tagStackWithTimestamp",
    value: function tagStackWithTimestamp() {
      var artifactDirectoryName = this.serverless.service["package"].artifactDirectoryName;
      var timestamp = getTimestampFromArtifactDirectoryName(artifactDirectoryName);
      this.serverless.service.provider.stackTags = _objectSpread(_objectSpread({}, this.serverless.service.provider.stackTags), {}, _defineProperty({}, LATEST_DEPLOYED_TIMESTAMP_TAG_NAME, timestamp));
    }
  }, {
    key: "uploadContractSchemas",
    value: function () {
      var _uploadContractSchemas2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _uploadContractSchemas(this.serverless, this.log);
              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function uploadContractSchemas() {
        return _uploadContractSchemas2.apply(this, arguments);
      }
      return uploadContractSchemas;
    }()
  }, {
    key: "validateDeployment",
    value: function () {
      var _validateDeployment2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
        var localContractSchemas, remoteContractSchemas;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                localContractSchemas = _listLocalContractSchemas(this.serverless);
                _context5.next = 3;
                return _listRemoteContractSchemas(this.serverless);
              case 3:
                remoteContractSchemas = _context5.sent;
                if (!(remoteContractSchemas === undefined)) {
                  _context5.next = 7;
                  break;
                }
                this.log.warning('Contracts: Unable to retrieve remote contract schemas, deployment is unsafe');
                return _context5.abrupt("return");
              case 7:
                if (!(this.cliOptions.strategy !== undefined)) {
                  _context5.next = 11;
                  break;
                }
                this.log.info('Validating contract schemas...');
                _context5.next = 11;
                return _validateDeployment(localContractSchemas, remoteContractSchemas, this.cliOptions.strategy);
              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function validateDeployment() {
        return _validateDeployment2.apply(this, arguments);
      }
      return validateDeployment;
    }()
  }, {
    key: "generateOpenApiDocumentation",
    value: function generateOpenApiDocumentation() {
      _generateOpenApiDocumentation(this.serverless);
    }
  }]);
  return ServerlessContractsPlugin;
}();
//# sourceMappingURL=serverlessContractsPlugin.js.map