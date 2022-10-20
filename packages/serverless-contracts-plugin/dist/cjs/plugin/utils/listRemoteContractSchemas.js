"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listRemoteContractSchemas = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _artifactDirectory = require("./artifactDirectory");
var _constants = require("./constants");
var _getLatestDeployedTimestamp = require("./getLatestDeployedTimestamp");
var listRemoteContractSchemas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(serverless) {
    var provider, latestDeployedTimestamp, previousArtifactDirectoryName, bucketName, params, _ref2, remoteContractsBuffer, contractSchemas;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            provider = serverless.getProvider('aws');
            _context.next = 3;
            return (0, _getLatestDeployedTimestamp.getLatestDeployedTimestamp)(provider);
          case 3:
            latestDeployedTimestamp = _context.sent;
            if (!(latestDeployedTimestamp === undefined)) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return");
          case 6:
            previousArtifactDirectoryName = (0, _artifactDirectory.buildPreviousDeploymentArtifactDirectoryName)('serverless', serverless.service.getServiceName(), serverless.service.provider.stage, latestDeployedTimestamp);
            _context.next = 9;
            return provider.getServerlessDeploymentBucketName();
          case 9:
            bucketName = _context.sent;
            params = {
              Bucket: bucketName,
              Key: "".concat(previousArtifactDirectoryName, "/").concat(_constants.COMPILED_CONTRACTS_FILE_NAME)
            };
            _context.next = 13;
            return provider.request('S3', 'getObject', params);
          case 13:
            _ref2 = _context.sent;
            remoteContractsBuffer = _ref2.Body;
            if (!(remoteContractsBuffer === undefined)) {
              _context.next = 17;
              break;
            }
            return _context.abrupt("return", {
              provides: {},
              consumes: {},
              gitCommit: '',
              contractsVersion: _constants.CONTRACTS_VERSION
            });
          case 17:
            contractSchemas = JSON.parse(remoteContractsBuffer.toString());
            return _context.abrupt("return", contractSchemas);
          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function listRemoteContractSchemas(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.listRemoteContractSchemas = listRemoteContractSchemas;
//# sourceMappingURL=listRemoteContractSchemas.js.map