import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
var BOOTSTRAP_METADATA_PREFIX = 'aws:asset:';
export var throwIfBootstrapMetadataDetected = function throwIfBootstrapMetadataDetected(_ref) {
  var Resources = _ref.Resources;
  if (Resources !== undefined) {
    Object.entries(Resources).forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        logicalId = _ref3[0],
        resource = _ref3[1];
      if ('Metadata' in resource) {
        if (resource.Metadata === undefined) {
          return;
        }
        Object.keys(resource.Metadata).forEach(function (metadataKey) {
          if (metadataKey.includes(BOOTSTRAP_METADATA_PREFIX)) {
            throw new Error("Resource ".concat(logicalId, " cannot be deployed because it needs the bootstrap stack"));
          }
        });
      }
    });
  }
};
//# sourceMappingURL=throwIfBootstrapMetadataDetected.js.map