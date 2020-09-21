import Vue from 'vue';
import Vuetify from 'vuetify';
import Routes from './routes.js';
import store from './store';
import Layout from './layouts/Layout.vue';
import 'vuetify/dist/vuetify.min.css';
import _ from 'lodash';
import vuetify from './vuetify.js'

Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    vuetify,
    router: Routes,
    store,
    components: { Layout },
})


export default new Vuetify(app);