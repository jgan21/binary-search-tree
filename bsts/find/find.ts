import { BNodeNum } from "../common/bst";


/** findRecursively(val): Search from the invoking node for a node with value val.
 * Returns the node, if found; else null */

function findRecursively(node: BNodeNum | null, val: number): BNodeNum | null {
  if (node === null) return null;
  if (node.val === val) return node;

  if (val < node.val){
    return findRecursively(node.left, val);
  } else {
    return findRecursively(node.right, val);
  }
}


/** find(val): Search the BST for a node with value val.
 * Returns the node, if found; else null. */

function find(node: BNodeNum | null, val: number): BNodeNum | null {
  //loop through the tree
  //if node === val, if yes return the node
  //else return null
  //if val < node go left, else go right

  while (node !== null){
    if (node.val === val) return node;

    if (val < node.val){
      node = node.left;
    } else {
      node = node.right;
    }
  }
  return null;
}

export { findRecursively, find };