<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <RefAndComputed></RefAndComputed> -->
    <!-- <Relative></Relative> -->
    <!-- <Proxy></Proxy> -->
    <!-- <vue-3-left-style></vue-3-left-style> -->
    <!-- <watch></watch> -->
    <!-- <CompositionApi01></CompositionApi01> -->
    <!-- <CompositionApi02></CompositionApi02> -->
    <!-- <div>
        <Module v-if="ModalIsShow" @modal-close="closeModal()">
            <h1>Hello!</h1>
        </Module>
        <button @click="openModal()">❤打开</button>
    </div> -->
    <p>{{error}}</p>
    <Suspense>
        <template #default>
            <div>
                <AsyncShow></AsyncShow>
                <AsyncShowDog></AsyncShowDog>
            </div>
        </template>
        <template #fallback>
            <h1>Loading...</h1>
        </template>
    </Suspense>
</template>

<script lang="ts">
import { ref, onErrorCaptured } from "vue";
// import RefAndComputed from './components/01-refANDcomputed.vue'
// import Relative from './components/02-relative.vue'
// import Proxy from './components/03-解决Vue2对象数组部分操作无法响应式问题.vue'
// import Vue3LeftStyle from './components/04-vue3生命周期.vue'
// import Watch from './components/05-watch.vue'
// import CompositionApi01 from './components/06-composition-api-追踪鼠标点击.vue'
// import CompositionApi02 from "./components/07-composition-api-全局loading插件.vue";
// import Module from "./components/08-瞬间移动-telport的使用.vue";
import AsyncShow from "./components/09-异步组件Suspence的使用.vue";
import AsyncShowDog from "./components/10-异步请求Suspense的使用.vue";

export default {
    name: "App",
    components: {
        // RefAndComputed,
        // Relative,
        // Proxy,
        // Vue3LeftStyle,
        // Watch
        // CompositionApi01,
        // CompositionApi02,
        // Module,
        AsyncShow,
        AsyncShowDog,
    },
    setup() {
        const error = ref(null);
        onErrorCaptured((e: any) => {
            error.value = e;
            return true;
        });
        const ModalIsShow = ref(false);
        const closeModal = () => {
            ModalIsShow.value = false;
        };
        const openModal = () => {
            ModalIsShow.value = true;
        };
        return {
            ModalIsShow,
            closeModal,
            openModal,
            error
        };
    },
};
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
