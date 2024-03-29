import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vant from 'vant'
import 'vant/lib/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// import axios from 'axios'

const app = createApp(App);

app.use(vant);
app.use(router);
// app.use(axios);

app.mount('#app');