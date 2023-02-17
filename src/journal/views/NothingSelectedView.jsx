import { StarOutlineOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";

export const NothingSelectedView = () => {
  return (
    
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        padding: 5,
        borderRadius:3
      }}
    >
      
      <Grid item xs={12}>
        <StarOutlineOutlined sx={{ fontSize: 100, color: "white" }} />
      </Grid>

      <Grid item xs={12}>
       <Typography color='white' variant="h6">Selecciona o crea una tarea por fa</Typography>
      </Grid>
    </Grid>
  );
};
