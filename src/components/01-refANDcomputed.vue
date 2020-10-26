<template>
  <h1>{{count}}</h1>
  <h1>{{double}}</h1>
  <button @click="increment()">☝+1</button>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
export default {
  name: 'RefAndComputed',
  setup() {
    const count =  ref(0)
    const double = computed(() => {
      return count.value * 2
    })
    const increment = () => {
      count.value++
    }
    return {
      count,
      increment,
      double
    }
  }
}
</script>

<style>
</style>
