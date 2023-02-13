const graph = {
  a: ["b"],
  b: ["c", "d"],
  c: ["e"],
  d: ["a"],
  e: ["d"],
};

// 深度优先遍历： 尽可能深的搜索图的分支
const visited = new Set(); // 记录已经遍历过的节点

function dfs(node) {
  console.log(node);
  visited.add(node);

  graph[node].forEach((c) => {
    if (!visited.has(c)) {
      dfs(c);
    }
  });
}

dfs("a");
