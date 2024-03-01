import { BNodeNum } from "../common/bst";

/** findSuccessor(node): Find and return node with next largest value.
 * Returns null if no successor. */

function findSuccessor(node: BNodeNum | null): BNodeNum | null {
  if (node === null) return null;
  if (node.right === null) return null;
  let nextVal = node.right;

  while (nextVal.left){
    nextVal = nextVal.left;
  }
  return nextVal;
}

export { findSuccessor };

/** Small tree for tests:
 *
 *          10
 *            \
 *             20
 */

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