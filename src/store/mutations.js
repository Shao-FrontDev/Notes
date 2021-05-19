const StoreNotes = (note) => {
  localStorage.setItem("notes", JSON.stringify(note));
};

export default {
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
};
