import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count++
    },
    sub (state) {
      state.count--
    },
    addN (state, step) {
      state.count += step
    },
    subN (state, step) {
      state.count -= step
    }
  },
  /* 处理异步任务 */
  actions: {
    /* 不能直接操作state 需通过mutations操作 */
    addasync (context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    addNasync (context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },
    subasync (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subNasync (context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000)
    }
  },
  modules: {
  },
  /* 对state中的数据进行包装，但不会修改原数据。原数据发生改变，包装值也随之改变 */
  getters: {
    showNum (state) {
      return '当前最新的数量是【' + state.count + '】'
    }
  }
})
