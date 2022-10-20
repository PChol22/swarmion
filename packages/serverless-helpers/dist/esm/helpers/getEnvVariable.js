var getEnvVariable = function getEnvVariable(name) {
  var variable = process.env[name];
  if (variable === undefined) throw new Error("Environment variable not found: ".concat(name));
  return variable;
};
export default getEnvVariable;
//# sourceMappingURL=getEnvVariable.js.map