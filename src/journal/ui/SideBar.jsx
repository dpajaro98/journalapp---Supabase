import { TurnedInNot } from "@mui/icons-material";
import { ListItem } from "@mui/material";
import { Grid } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { Toolbar, Box, Drawer, Divider, Typography } from "@mui/material";

import React from "react";

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { sm: drawerWidth },
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Darien Pajaro
          </Typography>
        </Toolbar>
        <Divider />
        {["Enero", "Enero", "Enero", "Enero"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TurnedInNot />
              </ListItemIcon>
              <Grid container>
                <ListItemText primary={text} />
                <ListItemText
                  secondary={
                    "Minim anim incididunt deserunt ipsum dolore qui sit."
                  }
                />
              </Grid>
            </ListItemButton>
          </ListItem>
        ))}
      </Drawer>
    </Box>
  );
};
