import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    pageId: 1,
    total: 0,
    row: 0
  },
  getters: {
    todos: state => state.todos,
    pageId: state => state.pageId,
    total: state => state.total,
    row: state => state.row
  },
  mutations: {
    SET_TODOS(state, payload) {
      state.todos = payload.todos;
      state.pageId = payload.pageId;
      state.total = payload.total;
      state.row = payload.row;
    }
  },
  actions: {
    getTodos({commit}, payload) {
      axios
        .get(`http://localhost:3000/todos?pageId=${payload.pageId}&row=${payload.row}`)
        .then(res => {
          commit('SET_TODOS', res.data);
        })
        .catch()
    },
    submitTodo({dispatch, state}, payload) {
      let headers = {
        'Content-Type': 'application/json'
      };
      let paramsGet = {
        row: state.row,
        pageId: Math.ceil(state.total/state.row)
      }
      if(payload.id) {
        axios
          .put(`http://localhost:3000/todos/${payload.id}`, payload, headers)
          .then(() => {
            dispatch("getTodos", paramsGet)
          })
          .catch()
      } else {
        axios
          .post('http://localhost:3000/todos', payload, headers)
          .then(() => {
            dispatch("getTodos", paramsGet)
          })
          .catch()
      }
    },
    deleteTodo({dispatch, state}, payload) {
      let paramsGet = {
        row: state.row,
        pageId: Math.ceil(state.total/state.row)
      }
      axios
        .delete(`http://localhost:3000/todos/${payload.id}`, payload)
        .then(() => {
          dispatch("getTodos", paramsGet)
        })
        .catch()
    }
  }
})
