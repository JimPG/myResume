import { createApp } from 'vue'
import App from './App.vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import router from './router'

const app = createApp(App).use(router)
app.use(VueEasyLightbox)
app.mount('#app')