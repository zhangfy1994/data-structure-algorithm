## 队列

- 队列是一种先进先出的数据结构

#### js 中没有队列数据结构，一般是用数组模拟

```js
const queue = [];
queue.push(1);
queue.push(2);

// 取出数组首元素, s = 1
const s = queue.shift();
```

#### 应用

- js 异步任务队列

#### leetcode 练习

<a src="https://leetcode.cn/problems/H8086Q/">最近请求次数</a>

```js
var RecentCounter = function () {
  this.q = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.q.push(t);
  while (this.q[0] < t - 3000) {
    this.q.shift();
  }

  return this.q.length;
};
```
