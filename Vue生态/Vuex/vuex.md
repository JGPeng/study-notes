### 为什么使用vuex？
+ 如果想要在子组件中使用祖先组件中的数据，那么就需要一层一层的传递（非常麻烦）。
+ 兄弟组件之间不能直接传递数据，如果兄弟组件之间想要传递数据，就必须借助父组件（非常麻烦）。

### vuex简介
+ Vuex是Vue配套的公共数据管理工具，它可以把一些共享的数据，保存到vuex中，方便整个程序中的任何组件直接获取或修改我们的公共数据。

### 原理
1. Vue.use(Vuex) 这个过程中vuex都做了什么？
    + 调用vuex的install方法，判断vuex是否已经注册过了，注册过了就直接返回，这里使用的是**单例模式**。
    + 调用applyMixin(Vue)，将初始化vuex的方法(vuexInit)混入到vue的beforeCreate生命周期中；将$store绑定到每个vue实例中。

### 基本使用模板
```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

new Vue({
  el: '#app',
  store: store,
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    increment2() {
      this.$store.dispatch('increment')
    }
  }
})
```

### 注意点
1. vuex中不推荐直接修改共享数据，
    + 如果多个组件都修改了共享数据，那么后期数据发送了错误需要进行调式的时候，就需要把每一个修改了共享数据的组件都检查一遍，这样非常低效，且不利于维护。
2. mutations
    + 类似 vue 中的 methods。
3. getters
    + 类似 vue 中的计算属性 computed。
    + getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖发生改变了才会被重新计算。
4. actions
    + 与 mutations 类似，但 mutaions 是只能进行同步操作，而 actions 可以进行异步操作。
    + 调用 this.$store.dispatch(...) 的返回值是 Promise 对象，因此可以执行异步操作。