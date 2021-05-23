<template>
    <div>
      <h3>当前最新的count值为：{{count}}</h3>
      <h3>{{showNum}}</h3>
      <button type="button" @click="handle1">-1</button>
      <button type="button" @click="handle2">-N</button>
      <button type="button" @click="handle3">-1 Async</button>
      <button type="button" @click="handle4">-N Async</button>
---------------------------------------
      <button type="button" @click="sub">-1直接</button>
      <button type="button" @click="subN(3)">-N直接</button>
      <button type="button" @click="subasync">-1 Async直接</button>
      <button type="button" @click="subNasync(5)">-N Async直接</button>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subasync', 'subNasync']),
    handle1: function () {
      this.sub()
    },
    handle2: function () {
      this.subN(3)
    },
    handle3: function () {
      this.subasync()
    },
    handle4: function () {
      this.subNasync(5)
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  }
}
</script>

<style scoped>

</style>
