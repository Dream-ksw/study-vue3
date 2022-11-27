<template>
  <div>
    app组件
    <home></home>
    <!-- suspense是一个内置的全局组件 default 和 fallback两个插槽  渲染加载状态-->
    <suspense>
      <!-- 默认插槽不需要写 -->
      <async-category></async-category>
      <template #fallback>
        <loading />
      </template>
    </suspense>
  </div>
</template>

<script>
  // 不分包 
  // import Home from './Home.vue'
  // import AsyncCategory from './AsyncCategory.vue'
  import Loading from './Loading.vue'
  // import Error from './Error.vue'

  // 分包处理 优化首屏加载 (import()方法返回的是一个promise) webpack
  // defineAsyncComponent第一种使用方式 参数是函数
  import { defineAsyncComponent } from 'vue'
  const Home = defineAsyncComponent(() => import('./Home.vue'))
  const AsyncCategory = defineAsyncComponent(() => import('./AsyncCategory.vue'))

  // defineAsyncComponent第二种使用方式 参数是对象
  // const Home = defineAsyncComponent({
  //   loader: () => import('./Home.vue'),
  //   loadingComponent: Loading, // 当前组件没有加载出来时显示的组件
  //   errorComponent: Error, // 当前组件加载失败的时候显示的组件
  //   // 在显示loadingComponent之前 延迟多少毫秒
  //   delay: 2000,
    /**
     * err: 错误信息
     * retry: 函数,调用retry重新加载
     * fail: 一个加载函数, 指示加载程序结束退出
     * attempts: 记录尝试的次数
     */
  //   onError: function(err, retry, fail, attempts) {
  //    retry 和 fail 类似于promise中的resolve和reject 
  //     if(err.message.match(/fetch/) && attempts <= 3) {
  //       retry()  
  //     } else {
  //       fail()
  //     }
  //   }
  // })
  // const AsyncCategory = defineAsyncComponent({
  //   loader: () => import('./AsyncCategory.vue'),
  //   loadingComponent: Loading,
  //   // 在显示loadingComponent之前 延迟多少毫秒
  //   delay: 2000
  // })


  export default {
    components: {
      Home,
      AsyncCategory,
      Loading
    }
  }
</script>

<style lang="scss" scoped>

</style>