import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
/**
 * Extracts the timestamp from the name of the directory.
 *
 * @param artifactDirectoryName the built directory name: format is serverless/{service}/{stage}/{timestamp}
 */
export var getTimestampFromArtifactDirectoryName = function getTimestampFromArtifactDirectoryName(artifactDirectoryName) {
  var _artifactDirectoryNam = artifactDirectoryName.split('/'),
    _artifactDirectoryNam2 = _slicedToArray(_artifactDirectoryNam, 4),
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
export var buildPreviousDeploymentArtifactDirectoryName = function buildPreviousDeploymentArtifactDirectoryName(prefix, service, stage, previousTimestamp) {
  return [prefix, service, stage, previousTimestamp].join('/');
};
//# sourceMappingURL=artifactDirectory.js.map