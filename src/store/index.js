import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    notes: JSON.parse(localStorage.getItem("notes")) || [],
  },
  getters: {
    notes(state) {
      return state.notes;
    },
    getBgByColor: (state) => (color) => {
      return state.notes.find(
        (note) => note.color === color
      );
    },
  },
  mutations,
});
