import { createStore } from "vuex";
import BASE_URL from "../axios";

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        }
    },
    getters: {},
    actions: {
        register({commit}, user) {
            return BASE_URL.post('/register', user)
            .then(({data}) => {
                commit('setUser', data);
                return data;
            })
        },
        login({commit}, user) {
            return BASE_URL.post('/login', user)
            .then(({data}) => {
                commit('setUser', data);
                return data;
            })
        },
        logout({commit}) {
            return BASE_URL.post('logout')
            .then(response => {
                commit('logout');
                return response;
            })
        }
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
        }
    },
    modules: {}
});

export default store;