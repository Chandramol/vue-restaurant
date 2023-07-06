import { createApp } from 'vue'
import App from './App.vue'

// Add Bootstrap file 
import  'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Adding CSS file
require('./assets/style.css');

// importing router from routes.js
import router from './routes';

createApp(App).use(router).mount('#app');
