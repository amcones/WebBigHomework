import { createApp } from 'vue'
import IndexPage from './login.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// ..
AOS.init();

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(IndexPage)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.mount('#app')


