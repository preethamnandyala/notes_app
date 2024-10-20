import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../../reducers/NotesReducer/notesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const intialstate = {
    title: "",
    text: "",
    notes: [],
    archivedNotes: [],
    importantNotes: [],
    deleteNotes: []
  };

  const [{ title, text, notes, archivedNotes, importantNotes, deleteNotes}, notesDispatcher] = useReducer(
    notesReducer,
    intialstate
  );

  return <NotesContext.Provider value={{title, text, notes, archivedNotes, importantNotes, deleteNotes, notesDispatcher}}>{children}</NotesContext.Provider>;
};

const useNotes = () => useContext(NotesContext);

export {NotesProvider, useNotes}
