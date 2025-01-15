import TaskList from '@/models/TaskList'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listas: Array<TaskList>()
  },
  getters: {
    getAll(state) {
      return state.listas;
    },
    getCount(state) {
      return state.listas.length;
    },
    getNextId(state) {
      return state.listas.length > 0 ? state.listas[state.listas.length - 1].id + 1 : 1;
    },
    getVisible: (state) => (index: number) => {
      return state.listas[index].visible;
    },
  },
  mutations: {
    add(state, lista: TaskList) {
      state.listas.push(lista);
    },
    del(state, index: number) {
      state.listas.splice(index, 1);
    },
    setVisible(state, index: number) {
      state.listas[index].visible = (state.listas[index].visible ? false : true);
    },
    edit(state, lista: TaskList) {
      const index = state.listas.findIndex(l => l.id === lista.id);
      state.listas.splice(index, 1, { ...lista });
    },
  },
  actions: {
  },
  modules: {
  }
})
