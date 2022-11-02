import { createApp } from 'vue'
import elems from './components'
import Vue3TouchEvents from "vue3-touch-events";

for (const el in elems) {
    createApp(elems[el]).use(Vue3TouchEvents).mount('#' + el)
}