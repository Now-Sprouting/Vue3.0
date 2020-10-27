import {reactive, onMounted, onUnmounted, toRefs} from 'vue'
const useMousePointer = () => {
    const data = reactive({
        x: 0,
        y: 0,
        updateMouse: (event: MouseEvent) => {
            data.x = event.pageX;
            data.y = event.pageY;
        },
    });
    const refData = toRefs(data)
    onMounted(() => {
        document.addEventListener('click', data.updateMouse)
    });
    onUnmounted(() => {
        document.removeEventListener('click', data.updateMouse)
    })
    return {
       ...refData
    }
}

export default useMousePointer