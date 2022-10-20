"use strict";

var _rules = require("./rules");
module.exports = {
  rules: {
    'no-undeclared-contracts': _rules.noUndeclaredContracts
  },
  configs: {
    recommended: {
      plugins: ['@swarmion'],
      rules: {
        '@swarmion/no-undeclared-contracts': 'error'
      }
    }
  }
};
//# sourceMappingURL=index.js.map