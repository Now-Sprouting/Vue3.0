<template>
    <h1>{{result}}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// *异步组件接收 一个 Promise resolve 的对象作为展示的内容, 外层被 Suspense 组件所包裹, 里面嵌套两个<template>模板, #default作为 reslove 返回的结果, #callback 作为 Loading部分
export default defineComponent({
    name: "AsyncShow",
    setup() {
        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve({
                    result: 30,
                });
            }, 3000);
        });
    },
});
</script>

<style scoped>
</style>