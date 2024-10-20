import React, { Fragment } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import NotesInput from "../../components/NotesInput/NotesInput";
import { useNotes } from "../../Contexts/NotesContext/NotesContext";
import NotesSection from "../../components/NoteSection/NoteSection";

const Home = () => {
  const { title, text, notes, archivedNotes, notesDispatcher } = useNotes();

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

  const addNotes = () => {
    notesDispatcher({
      type: "add_notes",
    });
    notesDispatcher({
      type: "clear",
    });
  };

  const pinnedNotes = notes.filter((note) => note.isPinned);
  const unpinnedNotes = notes.filter((note) => !note.isPinned);

  console.log(archivedNotes);

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
            addNotes={addNotes}
          />

          <NotesSection title="Pinned" notes={pinnedNotes} className="mb-8" isInArchive={false} isImportant={false}/>

          {pinnedNotes.length > 0 && unpinnedNotes.length > 0 && (
            <div className="mx-8 my-8 text-gray-500 text-center">
              <span className="px-4 font-bold text-emerald-600">
                Other Notes
              </span>
            </div>
          )}

          <NotesSection notes={unpinnedNotes} isInArchive={false} isImportant={false}/>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
