<template>
    <h1>{{ count }}</h1>
    <button @click="increment()">☝+1</button>
</template>

<script lang="ts">
import {
    onMounted,
    onRenderTracked,
    onRenderTriggered,
    onUpdated,
    reactive,
    toRefs,
} from "vue";
export default {
    name: "Vue3Lifestyle",
    setup() {
        onMounted(() => {
            console.log("Mounted");
        });
        onUpdated(() => {
            console.log("Updated");
        });
        // *get
        onRenderTracked((event) => {
            console.log(event);
        });
        // *set
        onRenderTriggered((event) => {
            console.log(event);
        });
        const data = reactive({
            count: 0,
            increment: () => {
                data.count++;
            },
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
