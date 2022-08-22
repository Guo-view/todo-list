import Vue from 'vue'
import Vuex from 'vuex'
import Users from './modules/users'
import Tabber from './modules/Tabbers'
import Homes from './modules/Homes'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Users,
    Tabber,
    Homes
  },
  getters,
})