## 字典

- 字典是一种保存键值对，并且能够记住键的原始插入顺序，任何值都可以作为键和值
- js 中 <strong>Map</strong>就是字典

#### Map 的操作

```js
const map = new Map();

// 添加或修改键值对
map.set(1, 1);
map.set("1", 2);
map.set({}, 3);

// 判断Map中是否有某个key
map.has(1); // true

// 根据key获取值
const a = map.get("1"); // 2

// 移除键值对
map.delete(1);

// 移除 Map 对象中所有的键值对
map.clear();

// 获取map的长度（有多少个键值对）
map.size;

// 迭代Map
// arr是每个key和value组成的数组，[1,1] ['1',2]
for (let arr of map) console.log(arr);
```

#### Map 和 Object 的区别

- object 的 key 只能是 <strong>字符串</strong> 或 <strong>Symbol</strong>, Map 的 key 可以是任何类型
- Map 提供了 has, size 等属性和方法，方便操作，频繁操作时性能更高
