import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import Routes from './routes.js';
import {store} from './store/index';
import Layout from './layouts/Layout.vue';
import 'vuetify/dist/vuetify.min.css';
import _ from 'lodash';
import vuetify from './vuetify.js'

Vue.use(Vuetify);
Vue.use(Vuex)

const app = new Vue({
    el: '#app',
    vuetify,
    router: Routes,
    store,
    components: { Layout },
})




export default new Vuetify(app);