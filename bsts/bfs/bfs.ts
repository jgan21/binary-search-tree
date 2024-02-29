import { BNodeNum } from "../common/bst";
import { Queue } from "../common/queue";


/** bfs(): Traverse the BST using BFS.
 * Returns an array of visited nodes. */

function bfs(node: BNodeNum | null): number[] {
  if (node === null) return [];
  let queue = new Queue([node])
  let seen: number[] = [];

  while (!queue.isEmpty()){
    let visited = queue.dequeue()!;
    seen.push(visited.val)

    if (visited.left){
      queue.enqueue(visited.left)
    }

    if (visited.right){
      queue.enqueue(visited.right)
    }
  }
  return seen
}

export { bfs };