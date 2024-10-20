import React, { Fragment } from 'react'
import { useNotes } from '../../Contexts/NotesContext/NotesContext';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import NotesInput from '../../components/NotesInput/NotesInput';
import NotesSection from '../../components/NoteSection/NoteSection';

const Priority = () => {
  const { title, text, importantNotes, notesDispatcher } = useNotes();

  const onTitleChange = (e) => {
    notesDispatcher({
      type: "title",
      payload: e.target.value,
    });
  };

  const onTextChange = (e) => {
    notesDispatcher({
      type: "text",
      payload: e.target.value,
    });
  };

  const addImportantNotes = () => {
    notesDispatcher({
      type: "add_important_notes",
    });
    notesDispatcher({
      type: "clear_important_notes",
    });
  };

 
  return (
    <Fragment>
      <NavBar />
      <main className="flex">
        <SideBar />
        <div className="flex flex-col flex-1 items-center mt-5">
        <NotesInput
            title={title}
            text={text}
            onTitleChange={onTitleChange}
            onTextChange={onTextChange}
            addNotes={addImportantNotes}
          />
      
      <NotesSection notes={importantNotes} isInArchive={false} isImportant={true} isDelete={false}/>
        </div>
      </main>
    </Fragment>
  );
}

export default Priority
