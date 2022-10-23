import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

interface PasswordFormInterface {
  name: string;
  paswword: string;
  url: string;
}

export const AddPaddword: React.FunctionComponent = () => {
  var [addForm, setAddForm] = React.useState<PasswordFormInterface>({});

  var savePassword = () => {
    console.log(addForm);
  };


  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <div style={{ margin: "5px" }}>
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
          value={addForm?.name}
          onChange={(event) => {
            setAddForm((addForm) => {
              addForm.name = event.target.value;
              return addForm;
            });
          }}
        />
      </div>
      <div>
        <TextField
          required
          id="password"
          label="Password"
          placeholder="Password"
          variant="filled"
          value={addForm?.paswword}
          onChange={(event) => {
            setAddForm((addForm) => {
              addForm.paswword = event.target.value;
              return addForm;
            });
          }}
        />
      </div>

      <div>
        <TextField
          id="url"
          label="Website Url"
          placeholder="Url"
          variant="filled"
          value={addForm?.url}
          onChange={(event) => {
            setAddForm((addForm) => {
              addForm.url = event.target.value;
              return addForm;
            });
          }}
        />
      </div>

      <div>
        <Button variant="outlined" onClick={savePassword}>
          save
        </Button>
      </div>
    </Box>
  );
};
