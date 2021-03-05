// ========================================
// IMPORTS CORE APP
// ========================================
import Vue from 'vue'
import router from '@/router/router'
import store from '@/store/store'

// ========================================
// IMPORT POLYFILLS
// ========================================
import '@babel/polyfill'
import 'mutationobserver-shim'

// ========================================
// IMPORT PLUGINGS
// ========================================

// ========================================
// IMPORT MAIN COMPONENT
// ========================================
import App from '@/App.vue'

import vuetify from './plugins/vuetify/vuetify'

// vue config
Vue.config.productionTip = false

// ========================================
// INIT VUE APP
// ========================================
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
