"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloudFormationContract = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
/**
 * CloudFormationContract:
 *
 * a contract used to define a type-safe import/export through CloudFormation.
 *
 * Main features:
 * - export and import generated and type-safe;
 * - generation of a contract document that can be checked for breaking changes;
 */var CloudFormationContract = /*#__PURE__*/function () {
  /**
   * Builds a new ApiGateway contract
   *
   * @param id a unique id to identify the contract among stacks. Beware uniqueness!
   * @param name the name of the export
   * See https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html
   */
  function CloudFormationContract(_ref) {
    var id = _ref.id,
      name = _ref.name;
    (0, _classCallCheck2["default"])(this, CloudFormationContract);
    (0, _defineProperty2["default"])(this, "contractType", 'cloudFormation');
    this.id = id;
    this.name = name;
  }

  /**
   * @returns the CloudFormation { Fn::ImportValue } function corresponding to the name
   */
  (0, _createClass2["default"])(CloudFormationContract, [{
    key: "importValue",
    get: function get() {
      return {
        'Fn::ImportValue': this.name
      };
    }

    /**
     * @returns the CloudFormation import name to use with Fn.importValue in CDK
     */
  }, {
    key: "cdkImportValue",
    get: function get() {
      return this.name;
    }

    /**
     * @param description the description used in CloudFormation for this value
     * @param value the CloudFormation function passed to the export
     * For more information, see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html
     * @returns the CloudFormation Export function
     */
  }, {
    key: "exportValue",
    value: function exportValue(_ref2) {
      var description = _ref2.description,
        value = _ref2.value;
      return {
        Description: description,
        Value: value,
        Export: {
          Name: this.name
        }
      };
    }
  }]);
  return CloudFormationContract;
}();
exports.CloudFormationContract = CloudFormationContract;
//# sourceMappingURL=cloudFormationContract.js.map