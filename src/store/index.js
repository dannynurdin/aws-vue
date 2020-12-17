import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    signedIn: true,
    baseUrl:null,
    dataURL:null,
    urlApiV2: 'https://gj5192fdkd.execute-api.ap-southeast-1.amazonaws.com'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
