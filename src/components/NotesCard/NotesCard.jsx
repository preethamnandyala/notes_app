import React from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useNotes } from "../../Contexts/NotesContext/NotesContext";

const NotesCard = ({
  id,
  title,
  text,
  isPinned,
  isInArchive,
  isImportant,
  isDelete,
}) => {
  const { notesDispatcher } = useNotes();

  const handlePin = () => {
    notesDispatcher({
      type: "pin",
      payload: { id },
    });
  };

  const handleArchive = () => {
    notesDispatcher({
      type: isInArchive ? "unarchive" : "archive",
      payload: { id },
    });
  };

  const handleDelete = () => {
    notesDispatcher({
      type: 'delete',
      payload: { id }
    });
  };

  const handleDeleteImportant = () => {
    notesDispatcher({
      type: 'deleteImportant',
      payload: { id }
    });
  };

  const handleDeletePermanent = () => {
    notesDispatcher({
      type: 'deletePermanent',
      payload: { id }
    });
  };

  return (
    <div className="border-2 w-[300px] p-2 shadow-md rounded-lg">
      <div className="flex justify-between items-center">
        <p className="font-bold p-2 text-[#2E7D32]">{title}</p>
        {!isImportant && !isInArchive && !isDelete && (
          isPinned ? (
            <button onClick={handlePin}>
              <PushPinIcon />
            </button>
          ) : (
            <button onClick={handlePin}>
              <PushPinOutlinedIcon />
            </button>
          )
        )}
      </div>
      <hr />
      <div className="flex flex-col p-2">
        <p className="break-words text-[#424242]">{text}</p>
        <div className="flex gap-2 self-end">
          {isImportant ? (
            <>
              {isDelete ? (
                <button onClick={() => handleDeletePermanent(id)}>
                  <DeleteOutlinedIcon />
                </button>
              ) : (
                <>
                  <span className="bg-emerald-600 text-white px-2 py-1 rounded">
                    Important
                  </span>
                  <button onClick={handleDeleteImportant}>
                    <DeleteOutlinedIcon />
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              {!isDelete && (
                <button onClick={handleArchive}>
                  {isInArchive ? <ArchiveIcon /> : <ArchiveOutlinedIcon />}
                </button>
              )}
              <button  onClick={() => isDelete ? handleDeletePermanent(id) : handleDelete(id)}>
                <DeleteOutlinedIcon />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
