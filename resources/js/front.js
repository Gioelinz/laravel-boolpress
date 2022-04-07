
require('./bootstrap');

//importa solo axios
/* window.axios = require('axios');
Vue.prototype.$http = window.axios; */

window.Vue = require('vue');
import vClickOutside from 'v-click-outside'

Vue.use(vClickOutside)


import router from './routes.js'
import App from './components/App.vue'

const app = new Vue({
    el: '#root',
    router,
    render: h => h(App)
});