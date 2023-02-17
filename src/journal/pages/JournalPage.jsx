import React from "react";
import { JournalLayout } from "../layout/JournalLayout";

import { NoteView, NothingSelectedView } from "../views";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView/>
      {/* <NoteView/> */}
      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {
            backgroundColor: 'error.main',
            opacity: 0.9           
          },
          position: 'fixed',
            right: 50,
            bottom:70

        }}
      >
        <AddIcon
          sx={{fontSize:30} }
        />
      </IconButton>
    </JournalLayout>
  );
};
