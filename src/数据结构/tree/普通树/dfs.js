// tree 深度优先遍历
const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "c",
        },
        {
          val: "d",
        },
      ],
    },
    {
      val: "e",
      children: [
        {
          val: "f",
        },
        {
          val: "g",
        },
      ],
    },
  ],
};

// 通过递归深度遍历
function dfs(root) {
  console.log(root.val);
  if (root.children) {
    root.children.forEach((child) => {
      dfs(child);
    });
  }
}

dfs(tree);
