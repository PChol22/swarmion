"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadContractSchemas = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _crypto = _interopRequireDefault(require("crypto"));
var _simpleGit = require("simple-git");
var _constants = require("./constants");
var _listLocalContractSchemas = require("./listLocalContractSchemas");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var uploadContractSchemas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(serverless, log) {
    var provider, bucketName, artifactDirectoryName, contractSchemas, git, gitCommit, contractSchemasToUpload, fileHash, params;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // @ts-ignore @types/serverless does not know this prop
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (serverless.service.provider.shouldNotDeploy) {
              log.info('Service files not changed. Skipping contract schemas upload...');
            }
            provider = serverless.getProvider('aws');
            _context.next = 4;
            return provider.getServerlessDeploymentBucketName();
          case 4:
            bucketName = _context.sent;
            artifactDirectoryName = serverless.service["package"].artifactDirectoryName;
            contractSchemas = (0, _listLocalContractSchemas.listLocalContractSchemas)(serverless);
            git = (0, _simpleGit.simpleGit)();
            _context.next = 10;
            return git.revparse('HEAD');
          case 10:
            gitCommit = _context.sent;
            contractSchemasToUpload = _objectSpread(_objectSpread({}, contractSchemas), {}, {
              gitCommit: gitCommit,
              contractsVersion: _constants.CONTRACTS_VERSION
            });
            fileHash = _crypto["default"].createHash('sha256').update(JSON.stringify(contractSchemasToUpload)).digest('base64');
            params = {
              Bucket: bucketName,
              Key: "".concat(artifactDirectoryName, "/").concat(_constants.COMPILED_CONTRACTS_FILE_NAME),
              Body: JSON.stringify(contractSchemasToUpload),
              ContentType: 'application/json',
              Metadata: {
                filesha256: fileHash
              }
            };
            log.info('Uploading contract schemas file to S3...');
            _context.next = 17;
            return provider.request('S3', 'upload', params);
          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function uploadContractSchemas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.uploadContractSchemas = uploadContractSchemas;
//# sourceMappingURL=uploadContractSchemas.js.map