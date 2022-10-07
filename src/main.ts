import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'
import "bootstrap";

createApp(App).use(router).use(ElementPlus).use(store).mount('#app')
