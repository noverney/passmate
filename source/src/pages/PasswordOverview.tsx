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
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { CellWithIcon } from "../components/cell-component";
import { AddPaddword as PasswordForm } from "../components/AddPassword.form";

const pages = ["Product", "Pricing"];
const settings: { label: string; onClick: () => void }[] = [
  {
    label: "Login",
    onClick: () => {
      window.location.href = "Login";
    },
  },
  {
    label: "Help",
    onClick: () => {
      window.location.href = "Help";
    },
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [passwordFormAnchore, setPasswordFormAnchore] =
    useState<HTMLButtonElement | null>(null);
  const addPaddword = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPasswordFormAnchore(event.currentTarget);
    console.log("add password", event.currentTarget);
  };
  const handlePasswordFormClose = () => {
    setPasswordFormAnchore(null);
  };

  const handleOpenUserMenuPoint = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  useEffect(() => {
    console.log(anchorElUser);
  }, [anchorElUser]);

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
        <PasswordForm />
      </Popover>
      <div className="Navi">
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Account">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.label} onClick={setting.onClick}>
                      <Typography textAlign="center">
                        {setting.label}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>

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
