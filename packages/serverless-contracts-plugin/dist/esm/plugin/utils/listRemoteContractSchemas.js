import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { buildPreviousDeploymentArtifactDirectoryName } from "./artifactDirectory";
import { COMPILED_CONTRACTS_FILE_NAME, CONTRACTS_VERSION } from "./constants";
import { getLatestDeployedTimestamp } from "./getLatestDeployedTimestamp";
export var listRemoteContractSchemas = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(serverless) {
    var provider, latestDeployedTimestamp, previousArtifactDirectoryName, bucketName, params, _ref2, remoteContractsBuffer, contractSchemas;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            provider = serverless.getProvider('aws');
            _context.next = 3;
            return getLatestDeployedTimestamp(provider);
          case 3:
            latestDeployedTimestamp = _context.sent;
            if (!(latestDeployedTimestamp === undefined)) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return");
          case 6:
            previousArtifactDirectoryName = buildPreviousDeploymentArtifactDirectoryName('serverless', serverless.service.getServiceName(), serverless.service.provider.stage, latestDeployedTimestamp);
            _context.next = 9;
            return provider.getServerlessDeploymentBucketName();
          case 9:
            bucketName = _context.sent;
            params = {
              Bucket: bucketName,
              Key: "".concat(previousArtifactDirectoryName, "/").concat(COMPILED_CONTRACTS_FILE_NAME)
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
              contractsVersion: CONTRACTS_VERSION
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
//# sourceMappingURL=listRemoteContractSchemas.js.map