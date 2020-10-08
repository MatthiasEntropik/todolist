import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        count: 0,
        barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
        barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
        drawer: null,
      },

    mutations: {
        incrementCounter(state, payload) {
            state.count += payload
        },
        SET_BAR_IMAGE (state, payload) {
          state.barImage = payload
        },
        SET_DRAWER (state, payload) {
          state.drawer = payload
        },
      },

    actions: {
        incrementAction(context, payload) {
            context.commit('incrementCounter', payload)
        }
    },

    getters: {
        counter(state) {
            return state.count
        }
    }
})