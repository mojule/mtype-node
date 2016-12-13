'use strict'

const entityNode = require( '../schema/entityNode.schema.json' )
const entityNodeValue = require( '../schema/entityNodeValue.schema.json' )
const emptyNode = require( '../schema/emptyNode.schema.json' )
const parentNode = require( '../schema/parentNode.schema.json' )

const schema = {
  entityNode, entityNodeValue, emptyNode, parentNode
}

module.exports = schema
