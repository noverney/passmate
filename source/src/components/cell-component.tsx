import { Grid, IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

export const CellWithIcon: React.FunctionComponent<GridRenderCellParams> = (
  options
) => {
  var handleClick = () => {
    console.log("click");
  };

  return (
    <Grid xs={4}>
      <IconButton onClick={handleClick} sx={{ p: 0 }}>
        <EditRoundedIcon />
      </IconButton>
      <IconButton onClick={handleClick} sx={{ p: 0 }}>
        <DeleteForeverRoundedIcon />
      </IconButton>
    </Grid>
  );
};
