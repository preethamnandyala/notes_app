import React, { Fragment } from 'react'
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import NotesSection from '../../components/NoteSection/NoteSection';
import { useNotes } from '../../Contexts/NotesContext/NotesContext';

const Bin = () => {
  const { deleteNotes } = useNotes();
  return (
    <Fragment>
      <NavBar/>
      <main className="flex">
        <SideBar/>
        <div className="flex flex-col flex-1 items-center mt-5">
          {deleteNotes?.length > 0 ? (
            <>
              <div className="mx-8 my-8 text-gray-500 text-center">
                <span className="px-4 font-bold text-emerald-600">
                  Deleted Notes
                </span>
              </div>
              <NotesSection notes={deleteNotes} isInArchive={false} isImportant={false} isDelete={true}/>
            </>
          ) : (
            <p className="text-gray-500">Bin is Empty</p>
          )}
        </div>
      </main>
    </Fragment>
  );
}

export default Bin
