const graph = {
  a: ["b"],
  b: ["c", "d"],
  c: ["e"],
  d: ["a"],
  e: ["d"],
};

// 广度优先遍历：依次遍历离根节点最近的节点
const visited = new Set(); // 记录已经遍历过的节点

function bfs(node) {
  const queue = [node];

  while (queue.length) {
    const n = queue.shift();
    console.log(n);
    visited.add(n);

    graph[n].forEach((c) => {
      if (!visited.has(c)) {
        queue.push(c);
      }
    });
  }
}

bfs("b");
