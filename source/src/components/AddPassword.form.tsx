import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

export const AddPaddword: React.FunctionComponent = () => {
  return (
    <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
            '& .MuiTextField-root': {m: 1, width: '25ch'},
        }}
    >
        <div style={{"margin": "5px"}}>
            <Typography variant="subtitle2" gutterBottom>
                Add Password Form
            </Typography>
        </div>
      <div>
        <TextField
          required
          id="passwordName"
          label="Name"
          placeholder="Password Name"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="password"
          label="Password"
          placeholder="Password"
          variant="filled"
        />
      </div>
    </Box>
  );
};
