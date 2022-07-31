import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mybookss: [],
    shurustr:''
  },
  mutations: {
    gomybooks(state, obj) {
      if(state.mybookss.length){
        state.mybookss.forEach(item=>{
          if(item.id===obj.id){
            item.num++
          }
        })
      }else{
        state.mybookss.push(obj)
      }
    },
    addliuxing(state,str){
      state.shurustr=str
    }
  },
  actions: {},
  modules: {}
})