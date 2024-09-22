import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'



axios.defaults.baseURL="http://localhost:8080/"




loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
