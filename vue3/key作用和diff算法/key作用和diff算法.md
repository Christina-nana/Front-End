### v-for中key作用

#### key是什么？

​		key就是唯一标识

#### key作用？

在diff算法中，新旧nodes对比时辨识vnodes，key可以提高性能

在插入或则重置顺序的时候，保持相同的key可以让diff算法更加高效，没有key的时候效率是非常低效的

#### v-for中不使用key

**源码中：**调用**patchUnkeyedChildren**方法

**diff算法思路（无key）：**

- 比较新旧vnode的length，Math.min(oldLength,newLength)取出最小length

- for遍历循环最小的length，patch比较新旧vnode

- 判断 if ( oldLength > newLength ) {

  ​	unmountChildren() // 移除剩余节点

  }

- 判断 if ( oldLength < newLength ) {

  ​	mountChildren() // 创建新节点

  }

**效率：**该diff算法效率非常低，例如：中间插入节点，插入节点后的都改动patch了

**图解：**

- 中间插入

![无key中间插入](/Users/zhanghanling/Learning materials/Front End/vue3/key作用和diff算法/image/无key中间插入.png)

- 后边新增：效率高，只需要新增最后一个，这时候有无key，效率是一样的
- 前边新增：效率低，全部替换了

![无key前面:后面新增](/Users/zhanghanling/Learning materials/Front End/vue3/key作用和diff算法/image/无key前面:后面新增.png)

#### v-for中使用key

**源码中：**调用**patchKeyedChildren**方法

**diff算法思路（有key）：**

- 使用while从头开始遍历，遇到相同的节点就继续（相同调用的isSameVnodeType函数，判断返回return n1.type === n2.type && n1.key === n2.key，patch），遇到不同的就break跳出while循环

- 然后从尾部开始遍历，遇到相同的节点就继续（相同调用的isSameVnodeType函数，判断返回return n1.type === n2.type && n1.key === n2.key，patch），遇到不同的就break跳出while循环
- 如果最后新节点更多（i>e1），那么就添加新节点mount，patch(null,n2)
- 如果最后旧节点更多（i>e2），那么就移除旧节点unmount
- 如果中间存在不知道如何排序的位置序列（unknown sequence）那么就根据key唯一标识来建立索引图，最大限度使用旧节点

**效率：**在插入或则重置顺序的时候，保持相同的key可以让diff算法更加高效

**图解：**

- 前面插入

- 后面插入：这时候有无key，效率是一样的

  ![无key前后新增](/Users/zhanghanling/Learning materials/Front End/vue3/key作用和diff算法/image/无key前后新增.png)

- 中间插入

  ![有key插入列表](/Users/zhanghanling/Learning materials/Front End/vue3/key作用和diff算法/image/有key插入列表.png)

- 中间移除

  ![有key移除元素](/Users/zhanghanling/Learning materials/Front End/vue3/key作用和diff算法/image/有key移除元素.png)

- 中间乱序/unkonw sequence

  ![有key乱序unknow sequence](/Users/zhanghanling/Learning materials/Front End/vue3/key作用和diff算法/image/有key乱序unknow sequence.png)

#### 注释

patch有n1就进行更新操作，n1为null，mount挂载操作

mount挂载 div -> 真实Dom

unmount 卸载 真实Dom -> div

#### 源码参考地址

src/runtime-core/renderer.ts（一定要好好看看）

