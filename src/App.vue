<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <RefAndComputed></RefAndComputed> -->
  <!-- <Relative></Relative> -->
  <!-- <Proxy></Proxy> -->
  <!-- <vue-3-left-style></vue-3-left-style> -->
  <!-- <watch></watch> -->
  <CompositionApi01></CompositionApi01>

</template>

<script lang="ts">
// import RefAndComputed from './components/01-refANDcomputed.vue'
// import Relative from './components/02-relative.vue'
// import Proxy from './components/03-解决Vue2对象数组部分操作无法响应式问题.vue'
// import Vue3LeftStyle from './components/04-vue3生命周期.vue'
// import Watch from './components/05-watch.vue'
import CompositionApi01 from './components/06-composition-api-追踪鼠标点击.vue'
export default {
  name: 'App',
  components: {
    // RefAndComputed,
    // Relative,
    // Proxy,
    // Vue3LeftStyle,
    // Watch
    CompositionApi01
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
