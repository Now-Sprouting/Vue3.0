<template>
    <h1>{{ count }}</h1>
    <h1>{{ greetTitle }}</h1>
    <button @click="sayHello()">😀Say Hello</button>
    <button @click="sayBye()">😭Say Bye</button>
</template>

<script lang="ts">
import {
    reactive,
    toRefs,
    watch,
} from "vue";
export default {
    name: "Watch",
    setup() {
        const data = reactive({
            count: 0,
            greetTitle: '',
            sayHello: () => {
                data.greetTitle = 'Hello Vue3',
                data.count++
            },
            sayBye: () => {
                data.greetTitle = 'Bye Vue3'
                data.count++
            }
        });
        const refData = toRefs(data);
        // *watch不能监听不是响应式的数据,但打印出来的 oldValue是一个 Proxy 对象, 要想打印具体值有下面两种办法
        // *1.将 data 改写成 refData.greetTitle
        // *2.将 data 转换为函数返回值, 这样 data.greetTitle就是响应式的数据了
        watch(data, (newValue, oldValue) => {
            console.log(oldValue)
            document.title = data.greetTitle
        })
        // *方法2 + 监听多个属性
        watch([refData.count, () => data.greetTitle], (newValue, oldValue) => {
            console.log(newValue);
            console.log('old ' + oldValue, 'new ' + newValue)
        })
        return {
            ...refData,
        };
    },
};
</script>

<style>
</style>
