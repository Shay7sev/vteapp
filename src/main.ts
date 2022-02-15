import { createApp } from 'vue'
import { store, key } from './store'
import ElementPlus from 'element-plus';
// import { ElButton, ElSelect } from 'element-plus';
import router from "./router";
import 'element-plus/dist/index.css';
import App from './App.vue';
import './index.css'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
/* or
 * app.config.globalProperties.$ELEMENT = option
 * app.use(ElButton)
 * app.use(ElSelect)
 */
app.use(store, key)
app.use(router)
app.mount('#app')