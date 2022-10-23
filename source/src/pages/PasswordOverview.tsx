import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import reactLogo from "../assets/react.svg";
import tauriLogo from "../assets/tauri.svg";
import nextLogo from "../assets/next.svg";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Login } from "@mui/icons-material";
import Copyright from "../utils/Copyright";
import { Popover, Table } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Password from "../Password/Password.classes";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Icon } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Nav from '../utils/Nav';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

   const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 30 },
    { field: "Name", headerName: "Username", width: 160 },
    { field: "CreationDate", headerName: "Creation Datee", width: 160 },
    {
      field: "Password",
      headerName: "Password",
      width: 160,
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

  const rows: Password[] = [
    {
      id: 1,
      Name: "BaselHack 2022",
      CreationDate: new Date(),
      Password: "Very Secure",
      SyncDeviceNumbers: 2,
    },
    {
      id: 2,
      Name: "Google",
      CreationDate: new Date(),
      Password: "Admin123",
      SyncDeviceNumbers: 3,
    },
  ];

  return (
    <div className="container">
      <Nav />
      <h1>Password Overview</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={8}>
            <Stack spacing={2} sx={{ width: 300 }}>
              <Autocomplete
                id="search"
                freeSolo
                options={rows.map((option) => option.Name)}
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
          rows={rows}
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
