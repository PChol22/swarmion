import isUndefined from 'lodash/isUndefined';
import omitBy from 'lodash/omitBy';
import { fillPathTemplate } from "../../../utils";
export var getRequestParameters = function getRequestParameters(contract, requestArguments) {
  // TODO improve inner typing here
  var _ref = requestArguments,
    pathParameters = _ref.pathParameters,
    queryStringParameters = _ref.queryStringParameters,
    headers = _ref.headers,
    body = _ref.body;
  var path = typeof pathParameters !== 'undefined' ? fillPathTemplate(contract.path, pathParameters) : contract.path;
  return omitBy({
    method: contract.method,
    path: path,
    body: body,
    queryStringParameters: omitBy(queryStringParameters, isUndefined),
    headers: headers
  }, isUndefined);
};
//# sourceMappingURL=requestParameters.js.map