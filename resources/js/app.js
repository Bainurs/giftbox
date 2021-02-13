require('./bootstrap');

window.Vue = require('vue');

import App from './components/App';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import {routes} from './router';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {});

const app = new Vue({
    el: '#app',
});

const router = new VueRouter({
    mode: 'history',
    routes: routes
});
new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
