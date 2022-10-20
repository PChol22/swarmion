"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listLocalContractSchemas = void 0;
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _mapValues = _interopRequireDefault(require("lodash/mapValues"));
var _omitBy = _interopRequireDefault(require("lodash/omitBy"));
var _serverlessContracts = require("@swarmion/serverless-contracts");
var listLocalContractSchemas = function listLocalContractSchemas(serverless) {
  // @ts-ignore mistype in the orignals (the animals)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  var _ref = serverless.service.initialServerlessConfig.contracts,
    provides = _ref.provides,
    consumes = _ref.consumes;
  return {
    provides: (0, _omitBy["default"])((0, _mapValues["default"])(provides, function (contract) {
      return (0, _serverlessContracts.getContractFullSchema)(contract);
    }), _isUndefined["default"]),
    consumes: (0, _omitBy["default"])((0, _mapValues["default"])(consumes, function (contract) {
      return (0, _serverlessContracts.getContractFullSchema)(contract);
    }), _isUndefined["default"])
  };
};
exports.listLocalContractSchemas = listLocalContractSchemas;
//# sourceMappingURL=listLocalContractSchemas.js.map