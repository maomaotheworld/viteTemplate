import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import zhLang from 'element-plus/lib/locale/lang/zh-TW';

import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// font awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, far);
dom.watch();

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'
import "bootstrap";



const app = createApp(App);
for (const [name, comp] of Object.entries(ElementPlusIconsVue)) {
    app.component(name, comp);
}
app.use(router).use(ElementPlus, { locale: { ...zhLang } }).use(store).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
