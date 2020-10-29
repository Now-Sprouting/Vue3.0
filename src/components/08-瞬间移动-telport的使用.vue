<template>
    <teleport to="#modal">
        <div class="main">
            <div class="main-modal">
                <slot>This is Modal</slot>
                <button @click="handleModalClose()">❎close</button>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "Modal",
    // *Vue3中新增加 emits 声明 直观的显示向父组件传递的事件
    emits: {
        'modal-close': null
    },
    setup(props, context) {
        const handleModalClose = () => {
            // *相当于 Vue2中的 this.$emit方法
            context.emit('modal-close')
        }
        return {
            handleModalClose
        }
    }
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
    text-align: center;
}
</style>