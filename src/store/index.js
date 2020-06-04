import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import blog from './modules/index_blog'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    blog
  }
})
