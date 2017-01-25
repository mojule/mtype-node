'use strict'

const Validator = require( 'mtype-tv4' )
const utils = require( 'mojule-utils' )
const schema = require( './schema' )

const { id } = utils

const validator = Validator( schema )
const t = Validator.mtype( validator )

const EntityNodeValue = ( nodeType = 'entityNode', additionalValues = {} ) => {
  const value = Object.assign( { nodeType }, additionalValues )

  if( typeof value._id !== 'string' )
    value._id = id( value.nodeType )

  if( !t.is( value, 'entityNodeValue' ) )
    throw new TypeError( 'Cannot create an entityNodeValue with those arguments' )

  return value
}

const EntityNode = ( nodeType = 'entityNode', additionalValues = {} ) => {
  const value = EntityNodeValue( nodeType, additionalValues )
  const children = []

  return { value, children }
}

EntityNode.Value = EntityNodeValue
EntityNode.mtype = t

module.exports = EntityNode
