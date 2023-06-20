import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback'
import './assets/plugins/fontawesome-free/css/all.min.css'
import './assets/dist/css/adminlte.min.css'
import './assets/plugins/jquery/jquery.min.js'
import './assets/plugins/bootstrap/js/bootstrap.bundle.min.js'
import './assets/dist/js/adminlte.min.js'
import Toaster from "@meforma/vue-toaster";


// dist/css/adminlte.min.css
// plugins/fontawesome-free/css/all.min.css
// plugins/jquery/jquery.min.js
// plugins/bootstrap/js/bootstrap.bundle.min.js
// dist/js/adminlte.min.js


createApp(App).use(store).use(router).use(Toaster, { position: "top-right" }).mount('#app')
