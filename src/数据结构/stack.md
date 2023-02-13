## 栈

- 栈是一种后进先出的数据结构

#### js 中没有栈数据结构，一般是用数组模拟

```js
const stack = [];
stack.push(1);
stack.push(2);

// 取出数组末尾元素, s = 2
const s = stack.pop();
```

#### 应用

- js 的函数调用堆栈

#### leetcode 练习

<a src="https://leetcode.cn/problems/valid-parentheses/">有效的括号</a>

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 奇数长度为false
  if (s.length % 2 === 1) {
    return false;
  }

  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const mapKeys = Object.keys(map);

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (mapKeys.includes(char)) {
      stack.push(char);
    } else {
      if (map[stack[stack.length - 1]] !== char) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
};
```
