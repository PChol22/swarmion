"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimestampFromArtifactDirectoryName = exports.buildPreviousDeploymentArtifactDirectoryName = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
/**
 * Extracts the timestamp from the name of the directory.
 *
 * @param artifactDirectoryName the built directory name: format is serverless/{service}/{stage}/{timestamp}
 */
var getTimestampFromArtifactDirectoryName = function getTimestampFromArtifactDirectoryName(artifactDirectoryName) {
  var _artifactDirectoryNam = artifactDirectoryName.split('/'),
    _artifactDirectoryNam2 = (0, _slicedToArray2["default"])(_artifactDirectoryNam, 4),
    timestamp = _artifactDirectoryNam2[3];
  if (timestamp === undefined) {
    throw new Error("".concat(artifactDirectoryName, " is not of the form 'serverless/{service}/{stage}/{timestamp}'"));
  }
  return timestamp;
};

/**
 *
 * regenerates the artifactDirectoryName of the previous deployment in order to retrieve the deployed version
 * of the contracts
 *
 * @param prefix
 * @param service
 * @param stage
 * @param previousTimestamp
 * @returns serverless/{service}/{stage}/{timestamp}
 *
 */
exports.getTimestampFromArtifactDirectoryName = getTimestampFromArtifactDirectoryName;
var buildPreviousDeploymentArtifactDirectoryName = function buildPreviousDeploymentArtifactDirectoryName(prefix, service, stage, previousTimestamp) {
  return [prefix, service, stage, previousTimestamp].join('/');
};
exports.buildPreviousDeploymentArtifactDirectoryName = buildPreviousDeploymentArtifactDirectoryName;
//# sourceMappingURL=artifactDirectory.js.map