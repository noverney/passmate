import Image from "next/image";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Copyright from '../utils/Copyright';
import Nav from '../utils/Nav';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import problemIcon from '../assets/problemIcon.jpg';
import solutionIcon from '../assets/solutionIcon.jpg';
import { convertFileSrc } from "@tauri-apps/api/tauri";
import { useState, useEffect } from "react";
import { appDir, join } from '@tauri-apps/api/path';
import AppBar from '@mui/material/AppBar';
import noveltyIcon from "../assets/noveltyIcon.jpg";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
// @ts-ignore
const s : string = false


function App() {
  return (
    <div className="container">
      <Nav />

      <Typography variant="h1" gutterBottom>
      Passmate
      </Typography>
      <Typography variant="h2" gutterBottom>
      Offline-first Password Manager
      </Typography>
      <Typography variant="h5" gutterBottom>
      Passmate ist a password manage for everybody. It is your mate for everyday. Enjoy the simple way how PasswordMate make your life easier.
       </Typography>

       <div className='cardBox'>
       <Box sx={{  display: { xs: 'flex', }}}>
        <div className='card'>
       <Card sx={{ maxWidth: 345 }}>
       <CardActionArea className="cardboxHight">
        <div className="cardImg">
         <Image
              width={144}
              height={144}
              src={problemIcon}
              className="cardImg"
              alt="PassMateLogo"
            />
            </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Problem
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul>
              <li><mark> 86% </mark>of people use passwords that are leaked.</li>
              <li><mark>158</mark> accounts hacked <mark>every second</mark>.</li>
              <li> Compromised passwords cost <mark>SMBs $0.3M per attack.</mark></li>
            </ul>
                      
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
      <div className='card'>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea className="cardboxHight">
      <div className="cardImg">
         <Image
          width={144}
          height={144}
          src={solutionIcon}
          className="cardImg"
          alt="Novelty"
        />
        </div>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Solution
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul>
              <li>The only <mark>offline-first cloud</mark> password Manager, Offline sync using <mark> multiple Devices</mark>.</li>
              <li>Master login <mark>without</mark> a password. </li>
            </ul>

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
      <div className='card'>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea className="cardboxHight">
      <div className="cardImg">
          <Image
              width={144}
              height={144}
              src={noveltyIcon}
              className="cardImg"
              alt="Novelty"
            />
            </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Novelty / Benefits
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul>
              <li>Manage <mark>all their passwords </mark>in not just one offline device but multiple.</li>
              <li>Multiple devices sync data with <mark>encryption by default (end-to-end encryption)</mark>.</li>
              <li><mark>No complex setup</mark> for a cloud environment. Can connect to <mark>Github or Gitlab</mark>.</li>
            </ul>
                           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>


    </Box>
    </div>

      <Copyright />
    </div> 
  );
}

export default App;
