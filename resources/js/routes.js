import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//importo i componenti
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'



const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
    ],
})

export default router;