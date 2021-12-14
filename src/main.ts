import { createApp } from 'vue'
import App from './App.vue'

// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// inonfont
import './assets/iconfont/iconfont.css'

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)

app.use(ElementPlus).use(pinia)
app.mount('#app')