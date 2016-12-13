'use strict';

var entityNode = require('../schema/entityNode.schema.json');
var entityNodeValue = require('../schema/entityNodeValue.schema.json');
var emptyNode = require('../schema/emptyNode.schema.json');
var parentNode = require('../schema/parentNode.schema.json');

var schema = {
  entityNode: entityNode, entityNodeValue: entityNodeValue, emptyNode: emptyNode, parentNode: parentNode
};

module.exports = schema;