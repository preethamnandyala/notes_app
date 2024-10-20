import React, { Fragment } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import { useNotes } from "../../Contexts/NotesContext/NotesContext";
import NotesSection from "../../components/NoteSection/NoteSection";

const Archive = () => {
  const { archivedNotes } = useNotes();
  return (
    <Fragment>
      <NavBar />
      <main className="flex">
        <SideBar />
        <div className="flex flex-col flex-1 items-center mt-5">
          {archivedNotes?.length > 0 ? (
            <>
              <div className="mx-8 my-8 text-gray-500 text-center">
                <span className="px-4 font-bold text-emerald-600">
                  Archived Notes
                </span>
              </div>
              <NotesSection notes={archivedNotes} isInArchive={true} isImportant={false}/>
            </>
          ) : (
            <p className="text-gray-500">No archived notes</p>
          )}
        </div>
      </main>
    </Fragment>
  );
};

export default Archive;
