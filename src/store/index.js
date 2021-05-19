import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    notes: [
      {
        title: "Learning",
        content: "Learing the Vue",
        color: "orange",
        id: 1,
      },
      {
        title: "React",
        content: "Learing the Vue",
        color: "blue",
        id: 2,
      },
      {
        title: "Hooks",
        content: "Learing the Vue",
        color: "green",
        id: 3,
      },
      {
        title: "Learning",
        content: "Learing the Vue",
        color: "yellow",
        id: 4,
      },
    ],
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
  mutations: {
    addNote(state, note) {
      state.notes = [...state.notes, note];
    },
    deleteNote(state, id) {
      let res = state.notes.filter(
        (note) => note.id !== id
      );
      state.notes = res;
    },
    editNote(state, payload) {
      state.notes = state.notes.map((note) => {
        if (note.id === payload.id) {
          return {
            title: note.title,
            content: payload.content,
            id: note.id,
            color: payload.color,
          };
        } else {
          return note;
        }
      });
    },
    editColor(state, payload) {
      console.log("editColor", payload);
      state.notes = state.notes.map((note) => {
        if (note.id === payload.id) {
          return {
            title: note.title,
            content: note.content,
            id: note.id,
            color: payload.color,
          };
        } else {
          return note;
        }
      });
      console.log(state.notes);
    },
  },
});
