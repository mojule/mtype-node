# mtype-node

Object factory with schema validation for this default tree nodes (entityNodes) used in [mojule](https://github.com/orgs/mojule/dashboard)

Refer to :

* Dependencies
  * [mtype](https://github.com/mojule/mtype)
  * [mtype-tv4](https://github.com/mojule/mtype-tv4)

* Project json schema for mojule entityNode structure.
  * emptyNode.schema.json
  * entityNode.schema.json
  * entityNodeValue.schema.json
  * parentNode.schema.json

## Usage



```javascript

const EntityNode = require( 'mtype-node' )

// Factory returns instance of EntityNode
const sampleNode = EntityNode('someNodeType')
console.log( JSON.stringify( sampleNode ) ) // {"value":{"nodeType":"someNodeType","_id":"somenodetype-293c865aaf08ee5ab23eb335e9236908"},"children":[]}

// Value factory returns instance of EntityNodeValue
const sampleNodeValue = EntityNode.Value('someNodeType')
console.log( JSON.stringify( sampleNodeValue ) ) // {"nodeType":"someNodeType","_id":"somenodetype-5a336a3c20029b79898900cae8700d75"}

// Reference underlying instance of mtype
const mtype = EntityNode.mtype
console.log( types ) //[ 'entityNode', 'entityNodeValue', 'emptyNode', 'parentNode' ]

```

