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
       <CardActionArea>
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
             <div className="hl">86%</div> of people use passwords that are leaked.
              158 accounts hacked every second.
             Compromised passwords cost SMBs $0.3M per attack.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
      <div className='card'>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
             The only offlinbe-first cloud password Manager,
             Offline sync using multiple Devices.
             Master login without a password. 

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </div>
      <div className='card'>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
             Manage all their passwords in ot just one offline device but multiple.
             Multiple devices sync data with encryption by default (end-to-end encryption)
             No complex setup for a cloud environment. Can connect to Github or Gitlab. 
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
