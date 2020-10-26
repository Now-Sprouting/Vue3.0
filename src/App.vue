<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <RefAndComputed></RefAndComputed> -->
  <Relative></Relative>
</template>

<script lang="ts">
// import RefAndComputed from './components/01-refANDcomputed.vue'
import Relative from './components/02-relative.vue'
export default {
  name: 'App',
  components: {
    // RefAndComputed,
    Relative
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
