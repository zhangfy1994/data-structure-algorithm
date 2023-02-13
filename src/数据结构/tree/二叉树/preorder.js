const binaryTree = {
  val: "a",
  left: {
    val: "b",
    left: {
      val: "c",
    },
    right: {
      val: "d",
    },
  },
  right: {
    val: "e",
    left: {
      val: "f",
    },
    right: {
      val: "g",
    },
  },
};

// 先序遍历, 先访问根节点 =》 左节点 =》 右节点  每个节点再按 根节点 =》 左节点 =》 右节点
function preOrder(root) {
  if (!root) {
    return;
  }

  console.log(root.val);

  // 访问左子节点
  preOrder(root.left);

  // 访问右子节点
  preOrder(root.right);
}

preOrder(binaryTree);

// 非递归
function preOrder2(root) {
  const stack = [root];

  while (stack.length) {
    const last = stack.pop();
    console.log(last.val);
    if (last.right) stack.push(last.right);
    if (last.left) stack.push(last.left);
  }
}

preOrder2(binaryTree);
