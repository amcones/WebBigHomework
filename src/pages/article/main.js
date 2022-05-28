import { createApp } from 'vue'
import AboutPage from './article.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createApp(AboutPage).mount('#app')



const siteHeader = document.querySelector(".site-header");

window.addEventListener('scroll',function() {
    if (document.documentElement.scrollTop > 0) {
        siteHeader.classList.add("yya");
    } else {
        siteHeader.classList.remove("yya");
    }
});


