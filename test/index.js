'use strict'

const assert = require( 'assert' )
const Node = require( '../' )

describe( 'mtype-node', () => {
  it( 'creates a valid node value', () => {
    const nodeType = 'someNodeType'
    const nodeValue = Node.Value( nodeType )
    assert.equal( typeof nodeValue._id, 'string' )
    assert( nodeValue._id.length > 0 )
    assert.equal( nodeValue.nodeType, nodeType )
    assert( Object.keys( nodeValue ).length === 2 )
  })
  it( 'creates a valid node value with additional properties', () => {
    const nodeType = 'someNodeType'
    const nodeValue = Node.Value( nodeType, { extra: 21, name: 'sam' })
    assert.equal( typeof nodeValue._id, 'string' )
    assert( nodeValue._id.length > 0 )
    assert.equal( nodeValue.nodeType, nodeType )
    assert( Object.keys( nodeValue ).length === 4 )
  })
  it( 'creates a valid node value and overwrites the _id property', () => {
    const nodeType = 'someNodeType'
    const idOverwrite = 'specialId-1234'
    const nodeValue = Node.Value( nodeType, { _id: idOverwrite })
    assert( nodeValue._id === idOverwrite )
    assert.equal( nodeValue.nodeType, nodeType )
    assert( Object.keys( nodeValue ).length === 2 )
  })
  it( 'creates a valid node', () => {
    const nodeType = 'someNodeType'
    const node = Node( nodeType )
    assert.equal( typeof node.value._id, 'string' )
    assert( node.value._id.length > 0 )
    assert.equal( node.value.nodeType, nodeType )
    assert( Array.isArray( node.children ) )
  })
  it( 'returns instance of mtype.api referencing schema', () => {
    const mtype = Node.mtype
    const types = mtype.types()
    console.log( types )

    assert( types.length == 4 )
    assert( types[ 3 ] === 'parentNode' )
  })
})
