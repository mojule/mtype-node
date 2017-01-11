"use strict"

const assert = require( 'assert' )
const Node = require( '../' )

describe( 'mtype-node', () => {
  it( 'accepts valid node', () => {
    const node = Node( 'someNodeType' )

    assert.equal( node.value.nodeType, 'someNodeType' )
    assert( Array.isArray( node.children ) )
    assert.equal( typeof node.value._id, 'string' )
    assert( node.value._id.length > 0 )
  })
})
