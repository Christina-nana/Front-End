### nextTick执行机制（原理）

nextTick属于微任务，当调用事件（属于宏任务）修改数据之后，vue机制内部封装了很多任务队列（vue任务调度），数据修改后对应的任务队列会执行，例如watch preQueue、组件的更新update jobQueue、生命周期回调postQueue等微任务，nextTick 微任务会放到这些微任务最后执行。

![nextTick执行机制](/Users/zhanghanling/Learning materials/Front End/nextTick执行机制/nextTick执行机制.png)

### 源码

runtime-core => src => scheduler.ts

