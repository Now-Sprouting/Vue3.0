<template>
    <h1>X坐标 : {{ x }}</h1>
    <h1>Y坐标 : {{ y }}</h1>
</template>


<script lang="ts">
import useMousePointer from "../hooks/useMousePointer";
export default {
    name: "compositio-api-1",
    setup() {
        const { x, y } = useMousePointer();
        return {
            x,
            y
        };
    },
};
</script>


<style scoped>
</style>
