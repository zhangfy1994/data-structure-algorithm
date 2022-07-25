// 广度优先遍历
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

// 通过一个队列，先把root入队。获取队列头部后再将头部的children放入队列中，以此循环
function bfs(root) {
  const queue = [root];

  while (queue.length) {
    const first = queue.shift();
    console.log(first.val);

    if (first.children) {
      first.children.forEach((item) => {
        queue.push(item);
      });
    }
  }
}

bfs(tree);
