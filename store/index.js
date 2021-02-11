import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // todos: [],
    // showDone: false,
  },
  mutations: {
    // addTodo: (state, todo) =>
    //   state.todos.push({
    //     id: Date.now(),
    //     content: todo,
    //     done: false,
      },
    // removeTodo: (state, todo) =>
    //   state.todos.filter((element) => element.id != todo.id),
    // showDoneDo: (state) => (state.showDone = !state.showDone),
//   },
  getters: {
    // toDo: (state) =>
    //   state.showDone ? state.todos.filter((e) => !e.done) : state.todos,
    // toDoLeft: (state) => state.todos.filter((todo) => !todo.done).length,
    // showHide: (state) => (state.showDone ? "hide" : "show"),
  },
  actions: {},
  modules: {},
});