import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
/**
 * Fills a string template with values.
 *
 * The keys to be replaced must be passed in `{}` in the template. For example `"/users/{userId}"`";
 * The key name must match the one passed in the curly braces
 *
 * @param template the template to be fill;
 * @param values the values to fill;
 * @returns the filled template.
 */
export var fillPathTemplate = function fillPathTemplate(template, values) {
  return values === undefined ? template : Object.entries(values).reduce(function (accumulator, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    var re = new RegExp("{".concat(key, "}"), 'g');
    return accumulator.replace(re, value);
  }, template);
};
//# sourceMappingURL=fillPathTemplate.js.map