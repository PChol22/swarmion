"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceOptionsSchema = void 0;
var serviceOptionsSchema = {
  type: 'object',
  properties: {
    provides: {
      type: 'object',
      patternProperties: {
        '^[a-zA-Z0-9]{1,255}$': {
          type: 'object',
          properties: {}
        }
      }
    },
    consumes: {
      type: 'object',
      patternProperties: {
        '^[a-zA-Z0-9]{1,255}$': {
          type: 'object',
          properties: {}
        }
      }
    }
  },
  required: ['provides', 'consumes']
};
exports.serviceOptionsSchema = serviceOptionsSchema;
//# sourceMappingURL=serviceOptions.js.map