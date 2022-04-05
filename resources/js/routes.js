import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//importo i componenti
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import PostDetail from './components/pages/PostDetail.vue'
import NotFound from './components/pages/NotFound.vue'




const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/posts/:slug', component: PostDetail, name: 'post-detail' },
        { path: '*', component: NotFound },

    ],
})

export default router;