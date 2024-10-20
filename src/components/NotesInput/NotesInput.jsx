import React from 'react';
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const NotesInput = ({ title, text, onTitleChange, onTextChange, addNotes }) => {
  return (
    <div className="flex flex-col w-[500px] border-gray border-2 p-5 mx-auto mb-8 shadow-md rounded-lg">
      <input
        value={title}
        onChange={onTitleChange}
        placeholder="Enter Title"
        className="p-2 mb-2 focus:outline-none"
      />
      <textarea
        value={text}
        onChange={onTextChange}
        placeholder="Enter Text"
        className=" p-2 mb-2 resize-none focus:outline-none"
        rows="5"
      />
      <div className="flex justify-end mt-2"> 
        <Button onClick={addNotes} size="small" variant="contained" sx={{ borderRadius: '100%',backgroundColor: '#059669' }}>
          <AddIcon />
        </Button>
      </div>
    </div>
  );
};

export default NotesInput;
