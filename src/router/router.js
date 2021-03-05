import Vue from 'vue'
import VueRouter from 'vue-router'

// ========================================
// COMPONENTS
// ========================================

// home
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'home',
        component: Home
    }

]

// ========================================
// INIT ROUTER
// ========================================
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})

export default router
