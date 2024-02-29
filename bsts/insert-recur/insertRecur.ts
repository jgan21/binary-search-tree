import { BNode, BSTNum } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecursively(bst: BSTNum, val: number): void {
  const newNode = new BNode(val);
  let curNode = bst.root;
  // base case
  if (curNode === null) return;


  //make a node instance
  //if node's val is less than root -> go left
  //if node's val is more than root -> go right

}

export { insertRecursively };

/** Large tree for tests:
 *
 *               50
 *           /       \
 *        25           75
 *      /    \            \
 *   10       40           100
 *     \
 *      15
 */