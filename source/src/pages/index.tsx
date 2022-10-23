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
      <Typography variant="body1" gutterBottom>
      Passmate ist a password manage for everybody. It is your mate for everyday. Enjoy the simple way how PasswordMate make your life easier.
       </Typography>

       <div className='cardBox'>
       <Box sx={{  display: { xs: 'flex', margin:'10px', }}}>
        <div className='card'>
      <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../assets/next.svg"
          alt="Problem"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Problem
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>86% of people use passwords that are leaked.</p>
          <p> 158 accounts hacked every second. </p>
          <p>Compromised passwords cost SMBs $0.3M per Attack.</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='card'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Solution
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>the only offline-first cloud password manager.</p>
          <p>Offline sync using multiple devices.</p>
          <p>Master login without a password.</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div className='card'>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Novelty Benefits
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>Manage all their passwords in not just one offline device but multiple.</p>
          <p>Multiple devices sync data with encryption by default (end-to-end encryption).</p>
          <p>No complex setup for a cloud environment. Can connect to Github or Gitlab.</p>
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
