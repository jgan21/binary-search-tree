import { BNode, BNodeNum, BSTNum } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecursively(bst: BSTNum, val: number): void {

  function insertRecursivelyNode(node: BNodeNum, val: number): void {
    const newNode = new BNodeNum(val)
    let curr = node

    if (curr === null) return;

    if (node.val < val){
      if (curr.right === null) {
        curr.right = newNode
        return;
      } else{
        insertRecursivelyNode(curr.right, val)
      }
    } else if (val < node.val){
      if (curr.left === null) {
        curr.left = newNode;
        return;
      } else {
        insertRecursivelyNode(curr.left, val)
      }
    }

  }

  if (bst.root === null) {
    bst.root = new BNodeNum(val)
  }

  let curNode = bst.root;

  insertRecursivelyNode(curNode, val)
}


export { insertRecursively };