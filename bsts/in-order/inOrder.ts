import { BNodeNum } from "../common/bst";

/** inOrder(): Traverse from the invoking node using in-order DFS.
 * Returns an array of visited nodes. */

function inOrder(node: BNodeNum | null): number[] {
  if (node === null) return [];
  let list: number[] = [];

  if (node.left) list.push(...inOrder(node.left));

  // then, do this node
  list.push(node.val)
  // do right last
  if (node.right) list.push(...inOrder(node.right));

  return list;
}



/** inOrderAccum(): Traverse the BST using in-order DFS.
 * Returns an array of visited nodes.
 * Uses an "accumulator"
 */

function inOrderAccum(
    node: BNodeNum | null = null,
    accum: number[] = []): number[] {

    if (node === null) return [];

    if (node.left) inOrderAccum(node.left, accum);

    // then, do this node
    accum.push(node.val)
    // do right last
    if (node.right) inOrderAccum(node.right, accum);

    return accum;
}

export { inOrder, inOrderAccum };