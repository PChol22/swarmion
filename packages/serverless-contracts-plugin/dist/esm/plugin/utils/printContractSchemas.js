export var printContractSchemas = function printContractSchemas(_ref, contractSchemasLocation) {
  var provides = _ref.provides,
    consumes = _ref.consumes;
  console.log("--- Serverless contract schemas for location ".concat(contractSchemasLocation, " ---"));
  console.log();
  console.log('-- Provides --');
  console.log(JSON.stringify(provides, null, 2));
  console.log();
  console.log('-- Consumes --');
  console.log(JSON.stringify(consumes, null, 2));
};
//# sourceMappingURL=printContractSchemas.js.map