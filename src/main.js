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
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// dist/css/adminlte.min.css
// plugins/fontawesome-free/css/all.min.css
// plugins/jquery/jquery.min.js
// plugins/bootstrap/js/bootstrap.bundle.min.js
// dist/js/adminlte.min.js

const app = createApp(App);
// app.config.productionTip = false
app.use(store);
app.use(router);
app.use(Toaster, { position: "top-right" });
app.use(VueSweetalert2);

app.mount('#app');
