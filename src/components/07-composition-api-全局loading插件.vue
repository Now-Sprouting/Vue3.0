<template>
    <div>
        <h1 v-if="loading">Lodaing...</h1>
        <img
            v-if="!loading"
            :src="result.message"
            alt=""
            width="200"
            height="200"
        />
    </div>
</template>

<script lang="ts">
import useUrlLoader from "../hooks/useUrlLoader";
import { defineComponent } from "vue";
// *defineComponent包裹, 可以更好的展示 TS 的性能
export default defineComponent({
    name: "CompositionApi02",
    setup() {
        const { loading, result } = useUrlLoader(
            "https://dog.ceo/api/breeds/image/random"
        );
        return {
            loading,
            result,
        };
    }
});
</script>

<style scoped>
</style>