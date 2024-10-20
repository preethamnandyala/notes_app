import {v4 as uuid} from 'uuid';


export const notesReducer = (state, {type, payload}) => {

    switch(type){

      case 'title':{
        return{
          ...state,
          title: payload
        }
      }

      case 'text':{
        return{
          ...state,
          text: payload
        }
      }

      case 'add_notes' :{
        return{
          ...state,
          notes: [...state.notes, 
            {
              title: state.title, 
              text: state.text, 
              id: uuid(), 
              isPinned: false,
              createdAt: new Date().toISOString()
            }
            ]
        }
      }

      case 'clear' :{
        return{
         ...state, 
         title:'',
         text:''
        }
      }

      case 'pin' :{
        console.log("Pin action triggered for id:", payload.id);
        return{
          ...state,
          notes: state.notes.map((note) => note.id === payload.id ? {...note, isPinned: !note.isPinned} : note)
        }
      }

      case 'archive' :{
        const noteToArchive = state.notes.find((note) => note.id === payload.id)
        return{
          ...state,
          notes: state.notes.filter((note) => note.id !== payload.id),
          archivedNotes: [...state.archivedNotes, noteToArchive]
        }
      }

      case 'unarchive' :{
        const noteToUnArchive = state.archivedNotes.find((note) => note.id === payload.id)
        return{
          ...state,
          archivedNotes: state.archivedNotes.filter((note) => note.id !== payload.id),
          notes: [...state.notes, noteToUnArchive]
        }
      }

      case 'add_important_notes' :{
        return{
          ...state,
          importantNotes: [...state.importantNotes, 
            {
              title: state.title, 
              text: state.text, 
              id: uuid(), 
              isPinned: false,
              createdAt: new Date().toISOString()
            }
            ]
        }
      }

      case 'clear_important_notes' :{
        return{
         ...state, 
         title:'',
         text:''
        }
      }

      case 'delete': {
        const notesToDelete = state.notes.find((note) => note.id === payload.id);
        if (!notesToDelete) {
          console.error(`Note with id normal ${payload.id} not found.`);
          return state;
        }
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== payload.id),
          archivedNotes: state.archivedNotes.filter((note) => note.id !== payload.id),
          deleteNotes: [...state.deleteNotes, notesToDelete],
        };
      }
  
      case 'deleteImportant': {
        const notesToDelete = state.importantNotes.find(
          (note) => note.id === payload.id
        );
        return {
          ...state,
          importantNotes: state.importantNotes.filter(
            (note) => note.id !== payload.id
          ),
          deleteNotes: [...state.deleteNotes, notesToDelete],
        };
      }
  
      case 'deletePermanent': {
        
        const noteToDelete = state.deleteNotes.find((note) => note.id === payload.id);
        
        if (!noteToDelete) {
          console.error(`Note with id ${payload.id} not found in deleteNotes.`);
          return state;
        }
      
        return {
          ...state,
          deleteNotes: state.deleteNotes.filter((note) => note.id !== payload.id),
        };
      }
      default:
        return state;
    }

}

