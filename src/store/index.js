import { createStore } from "vuex";

export default createStore({
  state: {
    url: "http://127.0.0.1:8000/api",
    authenticated: false
  },
  getters: {
  },
  mutations: {
    setAuthentication(state, status) {
      state.authenticated = status;
    }
  },
  actions: {
  },
  modules: {
  }
})
