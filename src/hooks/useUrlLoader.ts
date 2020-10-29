import {ref} from 'vue'
import axios from 'axios'


function useUrlLoader(url: string) {
    const loading = ref(true)
    const result = ref(null)
    const error = ref(null)
    axios.get(url).then((res) => {
        loading.value = false
        result.value = res.data
    }).catch((err) => {
        loading.value = false
        error.value = err
    })

    return {
        loading,
        result,
        error
    }
}
export default useUrlLoader