import * as React from 'react';
import Container from '@mui/material/Container';
import MuiLink from '@mui/material/Link';
import Copyright from '../utils/Copyright';
import Nav from '../utils/Nav';




function App() {

 
  return (
    <div className="container">
        <Nav />
      <h1>Device Overiew</h1>

        <Container sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
       
                
        </Container>

      


      <Copyright />

    </div>
 
  );
}

export default App;
