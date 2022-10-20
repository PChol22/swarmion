export var serviceOptionsSchema = {
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
//# sourceMappingURL=serviceOptions.js.map