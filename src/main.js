import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './config/RouterConfig'
// import Vuetify from 'vuetify'
import './plugins/vuetify'
Vue.use(VueRouter);
// Vue.use(Vuetify, {
//     iconfont: 'md',
//     theme: {
//         primary: '#3f51b5',
//         secondary: '#b0bec5',
//         accent: '#8c9eff',
//         error: '#b71c1c'
//     }
// })
Vue.config.productionTip = false;
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
