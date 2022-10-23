import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import reactLogo from "../assets/react.svg";
import tauriLogo from "../assets/tauri.svg";
import nextLogo from "../assets/next.svg";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Login } from "@mui/icons-material";
import MuiLink from '@mui/material/Link';
import Copyright from '../utils/Copyright';
import Nav from '../utils/Nav';
import Heading from '../assets/Heading.svg';


function App() {

  return (
    <div className="container">
      <Nav />

      <Typography>

      <h1>Welcome to PasswordMate!</h1>
      <p>PassMate is your mate for everyday. Enjoy the simple way how PasswordMate make your life easier.</p>

      <Image
              width={700}
              height={400}
              src={Heading}
              className="Heading"
              alt="Overview about the different password managers"
            />
      </Typography>

      <Copyright />
    </div>
  );
}

export default App;
