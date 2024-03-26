import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { globalLoader } from 'vue-global-loader';
import { createNotivue } from 'notivue'
import App from './App.vue'
import router from './router'
import 'notivue/notifications.css' // Only needed if using built-in notifications
import 'notivue/animations.css' // Only needed if using built-in animations

const app = createApp(App);
const notivue = createNotivue(/* Options */);

app.use(notivue);
app.use(globalLoader);
app.use(createPinia());
app.use(router);
app.mount('#app');
