import { useState, useEffect } from "react";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Copyright from "../utils/Copyright";
import { Popover } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Nav from '../utils/Nav';
import { CellWithIcon } from "../components/cell-component";
import { AddPassword as PasswordForm, PasswordFormInterface } from "../components/AddPassword.form";
import { PasswordCell } from "../components/tableCell/password.cell";
import DevApi, { PasswordBackend } from "../api";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {

  const [fingerprint, setFingerPrint] = React.useState<string>("");
  const [passwords, setPassowrds] = React.useState<PasswordBackend[]>([]);

  useEffect(()=>{
    var storageFinger = localStorage.getItem("fingerPrint");
    setFingerPrint(storageFinger)

    DevApi.getSecrets(storageFinger).then((passwords: PasswordBackend[]) => {
      setPassowrds(passwords);
    })
  }, [])

  var addPassword = (password: PasswordFormInterface) => {
    DevApi.add_new_password_entry({
      fingerprint: fingerprint,
      password: password.paswword,
      url: password.url,
      userName: password.name
    }).then(() => {
      DevApi.getSecrets(fingerprint).then((passwords: PasswordBackend[]) => {
        setPassowrds(passwords);
      })}
    )
  }
  
  const [passwordFormAnchore, setPasswordFormAnchore] =
    useState<HTMLButtonElement | null>(null);
  const addPaddword = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPasswordFormAnchore(event.currentTarget);
  };
  const handlePasswordFormClose = () => {
    setPasswordFormAnchore(null);
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 30 },
    { field: "userName", headerName: "Username", width: 160 },
    { field: "url", headerName: "Website", width: 160 },
    { field: "CreationDate", headerName: "Creation Date", width: 160 },
    {
      field: "password",
      headerName: "Password",
      width: 160,
      renderCell: PasswordCell,
    },
    {
      field: "SyncDeviceNumbers",
      headerName: "Linked Devices",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 130,
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 130,
      sortable: false,
      renderCell: CellWithIcon,
    },
  ];

  return (
    <div className="container">
      <Nav />
      <Popover
        id="PasswordPopOver"
        open={Boolean(passwordFormAnchore)}
        anchorEl={passwordFormAnchore}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose = {handlePasswordFormClose} 
      >
        <PasswordForm addNewPassword={addPassword}/>
      </Popover>     
       <h1>Password Overview</h1>
       <Typography component="h5">
        The Fingerprint {fingerprint} was used.
       </Typography>


      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={8}>
            <Stack spacing={2} sx={{ width: 300 }}>
              <Autocomplete
                id="search"
                freeSolo
                options={passwords.map((option) => option.userName)}
                renderInput={(params) => (
                  <TextField {...params} label="search" />
                )}
              />
            </Stack>
          </Grid>
          <Grid>
            <IconButton onClick={addPaddword} sx={{ p: 0 }}>
              <AddRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={passwords}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>

      <Copyright />
    </div>
  );
}

export default App;
