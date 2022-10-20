/** Helper to be used in config.ts files to retrieve the path of the handler. */
var getHandlerPath = function getHandlerPath(directoryPath) {
  var processRunLocation = process.cwd();
  return directoryPath.replace(processRunLocation + '/', '') + '/handler.main';
};
export default getHandlerPath;
//# sourceMappingURL=getHandlerPath.js.map