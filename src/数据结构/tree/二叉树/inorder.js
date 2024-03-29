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

// 中序遍历, 先访问整颗树的最左节点 =》 再访问上一层根节点 =》 再访问右节点最左节点，向上递归遍历
function preOrder(root) {
  if (!root) {
    return;
  }

  // 访问左子节点
  preOrder(root.left);

  console.log(root.val);

  // 访问右子节点
  preOrder(root.right);
}

// preOrder(binaryTree);

// 非递归
function preOrder2(root) {
  if (!root) {
    return;
  }

  const stack = [];
  let p = root;

  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(n.val);
    p = p.right;
  }
}
preOrder2(binaryTree);
