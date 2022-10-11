/**
 * 1.源码通过monorepo的形式来管理源代码(https://xie.infoq.cn/article/4f870ba6a7c8e0fd825295c92)
 * 单一代码库
 * 优点:
 * 可见性(每个人都可以看到其他人的代码)
 * 一致性(代码风格和质量标准会更容易统一)
 * 共享时间线(api或者共享库的变更会立即暴露出来)
 * 
 * 2.源码使用TypeScript进行重构
 * 
 * 
 * 3.使用Proxy进行数据劫持
 * vue2使用 Object.defineProperty 来劫持数据的getter和setter方法
 * 缺点当给对象添加或者删除属性时,是无法劫持和监听的
 * 所以在vue2 不得不提供一些特殊的API,比如$set $delete,为了补充漏洞
 * 
 * 
 * 4.删除了一些不必要的API
 * 移除了实例上的$on $off $once
 * 移除了一些特性 比如filter 内联模板
 * 
 * 5.编译方面的优化
 * 生成Block Tree  Slot编译优化  diff算法优化
 * 
 * 6.Options API 到 Composition API
 * 在vue2中,我们会通过Options API来描述组件对象
 * Options API 包括data props methods computed 生命周期等等这些选项
 * 存在比较大的问题是多个逻辑可能是在不同的地方
 * 比如created中会使用某一个method来修改data的数据,代码的内聚性非常差
 * Composition API可以将相关联的代码放到同一处进行处理,而不需要在多个Options之间寻找
 * 
 * 7.Hooks函数增加代码的复用性
 * 在vue2中,通常使用mixins在多个组件之间共享逻辑
 * 但是有一个很大的缺陷是mixins也是由一大堆的Options组成的,并且多个mixins会存在命名冲突的问题
 * 在vue3中,我们可以通过Hook函数,来将一部分独立的逻辑抽取出去,并且它们还可以做到是响应式的
 */