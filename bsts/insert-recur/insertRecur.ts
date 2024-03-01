import { BNode, BNodeNum, BSTNum } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecursively(bst: BSTNum, val: number): void {

  function _insertRecursivelyNode(node: BNodeNum, val: number): void {
    const newNode = new BNodeNum(val);
    let curr = node;

    if (curr === null) return;

    if (curr.val < val){
      if (curr.right === null) {
        curr.right = newNode;
      } else{
        _insertRecursivelyNode(curr.right, val);
      }
    } else {
      if (curr.left === null) {
        curr.left = newNode;
      } else {
        _insertRecursivelyNode(curr.left, val);
      }
    }
  }

  if (bst.root === null) {
    bst.root = new BNodeNum(val);
  } else{
    let curNode = bst.root;
    _insertRecursivelyNode(curNode, val);
  }
}


export { insertRecursively };