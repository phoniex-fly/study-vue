<template>
    <div>
      <h3>当前最新的count值为：{{$store.state.count}}</h3>
      <h3>{{$store.getters.showNum}}</h3>
      <button type="button" @click="handle1">+1</button>
      <button type="button" @click="handle2">+N</button>
      <button type="button" @click="handle3">+1 Async</button>
      <button type="button" @click="handle4">+N Async</button>
    </div>
</template>

<script>
export default {
  methods: {
    /* 禁止直接修改store中的数据 */
    // handle1: function () {
    //   this.$store.state.count++
    // }
    handle1: function () {
      this.$store.commit('add')
    },
    /* commit触发mutations */
    handle2: function () {
      this.$store.commit('addN', 3)
    },
    /* dispatch触发action */
    handle3: function () {
      this.$store.dispatch('addasync')
    },
    handle4: function () {
      this.$store.dispatch('addNasync', 5)
    }
  }
}
</script>

<style scoped>

</style>
