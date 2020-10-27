<template>
    <p v-for="item in numbers" :key="item">{{item}}</p>
    <div>{{ojects.name}}</div>
    <button @click="changeArr()">☝改变数组</button>
    <button @click="decrement()">☝改变对象</button>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";
interface DataProps {
    changeArr: () => void;
    decrement: () => void;
    numbers: number[];
    ojects: { name?: string };
}
export default {
    name: "Proxy",
    setup() {
        // *vue3 使用 Proxy解决数组和对象的部分响应式问题
        const data: DataProps = reactive({
            changeArr: () => {
                data.numbers[0] = 2;
            },
            decrement: () => {
                data.ojects.name = 'Ding'
            },
            numbers: [1, 2, 3],
            ojects: {},
        });
        const refData = toRefs(data);
        return {
            ...refData,
        };
    },
};
</script>

<style>
</style>
