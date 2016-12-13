'use strict';

var entityNode = require('./entityNode.schema.json');
var entityNodeValue = require('./entityNodeValue.schema.json');
var emptyNode = require('./emptyNode.schema.json');
var parentNode = require('./parentNode.schema.json');

var schema = {
  entityNode: entityNode, entityNodeValue: entityNodeValue, emptyNode: emptyNode, parentNode: parentNode
};

module.exports = schema;