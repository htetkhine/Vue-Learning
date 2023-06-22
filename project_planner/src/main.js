import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Button} from 'vant'
import 'vant/lib/index.css'


createApp(App).use(router).mount('#app')
createApp(App).use(Button).mount('#app')