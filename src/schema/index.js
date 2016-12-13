'use strict'

const entityNode = require( './entityNode.schema.json' )
const entityNodeValue = require( './entityNodeValue.schema.json' )
const emptyNode = require( './emptyNode.schema.json' )
const parentNode = require( './parentNode.schema.json' )

const schema = {
  entityNode, entityNodeValue, emptyNode, parentNode
}

module.exports = schema
