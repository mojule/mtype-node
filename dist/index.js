'use strict';

var Validator = require('mtype-tv4');
var utils = require('mojule-utils');
var schema = require('./schema');

var id = utils.id,
    identifier = utils.identifier;


var validator = Validator(schema);
var t = Validator.mtype(validator);

var EntityNodeValue = function EntityNodeValue() {
  var nodeType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'entityNode';
  var additionalValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var value = Object.assign({ nodeType: nodeType }, additionalValues);

  if (typeof value._id !== 'string') value._id = id(value.nodeType);

  if (!t.is(value, 'entityNodeValue')) throw new TypeError('Cannot create an entityNodeValue with those arguments');

  return value;
};

var EntityNode = function EntityNode() {
  var nodeType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'entityNode';
  var additionalValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var value = EntityNodeValue(nodeType = 'entityNode', additionalValues = {});
  var children = [];

  return { value: value, children: children };
};

EntityNode.Value = EntityNodeValue;
EntityNode.mtype = t;

module.exports = EntityNode;