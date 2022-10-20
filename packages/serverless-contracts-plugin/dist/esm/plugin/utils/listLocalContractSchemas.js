import isUndefined from 'lodash/isUndefined';
import mapValues from 'lodash/mapValues';
import omitBy from 'lodash/omitBy';
import { getContractFullSchema } from '@swarmion/serverless-contracts';
export var listLocalContractSchemas = function listLocalContractSchemas(serverless) {
  // @ts-ignore mistype in the orignals (the animals)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  var _ref = serverless.service.initialServerlessConfig.contracts,
    provides = _ref.provides,
    consumes = _ref.consumes;
  return {
    provides: omitBy(mapValues(provides, function (contract) {
      return getContractFullSchema(contract);
    }), isUndefined),
    consumes: omitBy(mapValues(consumes, function (contract) {
      return getContractFullSchema(contract);
    }), isUndefined)
  };
};
//# sourceMappingURL=listLocalContractSchemas.js.map