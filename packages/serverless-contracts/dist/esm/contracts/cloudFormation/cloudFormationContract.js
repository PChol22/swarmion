import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
/**
 * CloudFormationContract:
 *
 * a contract used to define a type-safe import/export through CloudFormation.
 *
 * Main features:
 * - export and import generated and type-safe;
 * - generation of a contract document that can be checked for breaking changes;
 */
export var CloudFormationContract = /*#__PURE__*/function () {
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
    _classCallCheck(this, CloudFormationContract);
    _defineProperty(this, "contractType", 'cloudFormation');
    this.id = id;
    this.name = name;
  }

  /**
   * @returns the CloudFormation { Fn::ImportValue } function corresponding to the name
   */
  _createClass(CloudFormationContract, [{
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
//# sourceMappingURL=cloudFormationContract.js.map