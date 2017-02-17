// Type definitions for mtype backed by json schema mtype-node 0.1.x
// Project: https://github.com/mojule/mtype-node

declare namespace mNode {

  /**
   * mojule tree node values must include _id and nodeType properties.
   *
   * Refer to ../schema/entityNodeValue.schema.json
   */
  export interface EntityNodeValue {
    /**
     * A unique id. (Usually the node type followed by a 32 char random hex string )
     * e.g. element-a4f21165...cc14
     */
    _id: string
    /**
     * A string identifying the node type.  e.g. element
     */
    nodeType : string
  }

  /**
   * Wraps EntityNodeValue in EntityNode
   * Refer to ../schema/entityNode.schema.json
   */
  export interface EntityNode  {
    value : EntityNodeValue
  }

  /**
   * Properties of EntityNode extended with array of children
   * Refer to ../schema/parentNode.schema.json
   */
  export interface ParentNode extends EntityNode   {
    children : EntityNode[]
  }



  export interface EntityNode {
    /**
     * Factory function for EntityNode. Note: Returned node has children
     * @param {string} [nodeType =  entityNode] - the type to assign to the new node
     * @param {object} [additionalValues = {}] - any additional values to assign to the new node.
     * Note. If additionalValues contains an _id property then that property will be assigned the _id of the new node else an _id will be generated.
     * @returns {object} an instance of EntityNode with the passed nodeType and additionalValues.
     */
    (nodeType : string, additionalValues : any ) : ParentNode
    /**
     * Factory function for EntityNodeValue.
     * @param {string} [nodeType =  entityNode] - the type to assign to the new node
     * @param {object} [additionalValues = {}] - any additional values to assign to the new node.
     * Note. If additionalValues contains an _id property then that property will be assigned the _id of the new node else an _id will be generated.
     * @returns {object} an instance of EntityNodeValue with the passed nodeType and additionalValues.
     */
    Value: (nodeType: string, additionalValues: any) => EntityNodeValue
    /**
     * Reference to mtype api.
     * @returns  reference to mtype api enabling validation of nodes against schema
     */
    mtype : mtype.api
   }


}

