import { createApp } from 'vue'
import IndexPage from './index.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// ..
AOS.init();


const app = createApp(IndexPage)
app.use(ElementPlus)
app.mount('#app')


