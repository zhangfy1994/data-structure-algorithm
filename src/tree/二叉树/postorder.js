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

// 后序遍历, 先访问整颗树的最左节点 =》 再访问右节点最左节点 =》 访问上层节点 ，向上递归遍历
function preOrder(root) {
  if (!root) {
    return;
  }

  // 访问左子节点
  preOrder(root.left);

  // 访问右子节点
  preOrder(root.right);

  console.log(root.val);
}

preOrder(binaryTree);
