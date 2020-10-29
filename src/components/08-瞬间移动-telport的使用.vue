<template>
    <teleport to='#modal'>
        <div class="main">
            <div class="main-modal">
                <h1>This is modal</h1>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "CompositionApi02",
});
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
    background-color: pink;
}
.main-modal {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 400px;
    background-color: #ffffff;
    border: 5px solid #ccc;
}
</style>