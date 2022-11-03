/**
 * 注意点:
 * 1.vue3不支持过滤器,推荐使用两种方法: 计算属性/全局的方法
 */
Vue.createApp({
  template: '#my-app',

  data() {
    return {
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程基础》',
          date: '2006-2',
          price: 59,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128,
          count: 1
        }
      ]
    }
  },

  computed:{
    // 总价格
    totalPrice() {
      const totalPrice =  this.books.reduce((pre, currValue) => {
        return pre + currValue.count * currValue.price
      }, 0)
      return totalPrice
    }
  },

  methods: {
    // 数量的操作
    changeCount(index, count) {
      this.books[index].count += count
    },

    // 删除书籍
    deleteBook(index) {
      this.books.splice(index, 1)
    },

    // 格式化价格
    filterPrice(price) {
      return `￥${price}`
    }
  }
}).mount('#app')