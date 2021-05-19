import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const StoreNotes = (note) => {
  localStorage.setItem("notes", JSON.stringify(note));
};

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
  mutations: {
    addNote(state, note) {
      state.notes = [...state.notes, note];
      StoreNotes(state.notes);
    },
    deleteNote(state, id) {
      state.notes = state.notes.filter(
        (note) => note.id !== id
      );
      StoreNotes(state.notes);
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
      StoreNotes(state.notes);
    },
    editColor(state, payload) {
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
      StoreNotes(state.notes);
    },
  },
});
