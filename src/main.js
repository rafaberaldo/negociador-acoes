import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'

import { routes } from './routes'

// npm install --save vuex
import store from './store/store'

// npm install --save vue-router
Vue.use(VueRouter);

// npm install --save vue-resource
//Vue.use(VueResource);
//Vue.http.options.root = 'https://api.softeck.io/';

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

const router = new VueRouter({
    mode: 'history',
    routes,
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
