import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { authStore } from './pinia/auth';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.config.globalProperties.$auth = authStore();

app.mount('#app');