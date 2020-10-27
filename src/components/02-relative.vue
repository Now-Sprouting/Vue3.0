<template>
  <h1>{{count}}</h1>
  <h1>{{double}}</h1>
  <h1>{{age}}</h1>
  <button @click="increment()">☝+1</button>
</template>

<script lang="ts">
import { computed, reactive, toRefs } from 'vue'
// *解决typescript类型检测问题
interface DataProps {
    count: number;
    increment: () => void;
    double: number;
}
export default {
  name: 'Relative',
  setup() {
    const data: DataProps = reactive({
        count: 0,
        increment: () => {
            data.count ++
        },
        double: computed(() => {
           return data.count * 2
        })
    })
    // *reactive中的对象 被 toRefs 包裹后 抽取对象中的 数据就变成响应式的了
    const refData = toRefs(data)
    return {
        // *因为 data 被 reactive 所包裹 所以 data 是一个响应式的对象
        // data
        // *如果想简便写法,去除上面胡须写法中的 data ,如果把下面数据从响应式对象中抽离出来的话,下面的数据就不是响应类型的数据了,就变成了普通的 JavaScript 类型了, 所以就无法响应式的更新了, 这时候就引进了 toRefs
        // count: data.count,
        // increment: data.increment,
        // double: data.double
        // * const refData = toRefs(data) 后可以的写法
        ...refData,
    }
  }
}
</script>

<style>
</style>
