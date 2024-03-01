import { BNodeNum } from "../common/bst";
import { Queue } from "../common/queue";


/** bfs(): Traverse the BST using BFS.
 * Returns an array of visited nodes. */

function bfs(node: BNodeNum | null): number[] {
  if (node === null) return [];
  let queue = new Queue([node]);
  let seen: number[] = [];

  while (!queue.isEmpty()) {
    let node = queue.dequeue()!;
    seen.push(node.val);

    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
  return seen;
}

export { bfs };