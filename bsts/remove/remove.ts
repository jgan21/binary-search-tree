import { BNodeNum, BSTNum } from "../common/bst";
import { findRecursively } from "../find/find";
import { findSuccessor } from "../successor/successor";

/** remove(bst, val): Removes a node in the BST with the value val.
 * Returns the removed node. */


function remove(bst: BSTNum, val: number): BNodeNum {
  const curNode = bst.root;
  const found = findRecursively(curNode, val)
  return new BNodeNum(42);
}

export { remove };
