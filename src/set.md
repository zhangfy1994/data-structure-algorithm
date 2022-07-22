## 集合

- 集合是一种无序且数据唯一的数据结构
- js 中 <strong>Set</strong>就是集合

#### Set 的操作

```js
const set = new Set();

// 在Set对象尾部添加一个元素
set.add(1);
set.add({ a: 1 });

// 判断Set中是否有某个值
set.has(1);

// 移除元素
set.delete(1);

// 移除Set对象内的所有元素
set.clear();

// 迭代Set
for (let item of set) console.log(item);

// 数组和Set互转
const arr = [...set];
const set2 = new Set([1, 2]);
```

#### Set 的应用

```js
// 数组去重
const newArr = [...new Set([1, 2, 3, 3])]; // [1,2,3]
const newArr = Array.from(new Set([1, 2, 3, 3])); // [1,2,3]
```
