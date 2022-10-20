import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import crypto from 'crypto';
import { simpleGit } from 'simple-git';
import { COMPILED_CONTRACTS_FILE_NAME, CONTRACTS_VERSION } from "./constants";
import { listLocalContractSchemas } from "./listLocalContractSchemas";
export var uploadContractSchemas = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(serverless, log) {
    var provider, bucketName, artifactDirectoryName, contractSchemas, git, gitCommit, contractSchemasToUpload, fileHash, params;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
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
            contractSchemas = listLocalContractSchemas(serverless);
            git = simpleGit();
            _context.next = 10;
            return git.revparse('HEAD');
          case 10:
            gitCommit = _context.sent;
            contractSchemasToUpload = _objectSpread(_objectSpread({}, contractSchemas), {}, {
              gitCommit: gitCommit,
              contractsVersion: CONTRACTS_VERSION
            });
            fileHash = crypto.createHash('sha256').update(JSON.stringify(contractSchemasToUpload)).digest('base64');
            params = {
              Bucket: bucketName,
              Key: "".concat(artifactDirectoryName, "/").concat(COMPILED_CONTRACTS_FILE_NAME),
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
//# sourceMappingURL=uploadContractSchemas.js.map