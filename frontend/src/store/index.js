import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const mutations = {
  INCREMENT_COUNT: 'increment count'
}

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    [mutations.INCREMENT_COUNT](state) {
      state.count++
    }
  },
  actions: {
    incrementCount({ commit }) {
      commit(mutations.INCREMENT_COUNT)
    },
    async fetchQuiz(store, id) {
      const quizRequest = await axios.get(`/api/quizzes/${id}`)
      return quizRequest.data
    },
    async fetchQuizzes() {
      const quizzesRequest = await axios.get('/api/quizzes')
      return quizzesRequest.data
    }
  },
  modules: {}
})
