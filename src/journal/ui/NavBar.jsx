
import { LogoutOutlined } from "@mui/icons-material";
import { MenuOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { IconButton, AppBar, Toolbar } from "@mui/material";
import React from "react";

export const NavBar = ({ drawerWidth=240 }) => {
  return (

    
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 3, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography noWrap component='div'>JournalApp</Typography>
          <IconButton color='error'>
            <LogoutOutlined/>
          </IconButton>

        </Grid>
      </Toolbar>
    </AppBar>
  );
};
