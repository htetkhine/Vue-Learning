import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Card } from 'vant'
import 'vant/lib/index.css'


createApp(App).use(router).mount('#app')


App.use(Card)