import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <div className="footer">
    <Typography variant="body2" color="text.secondary" align="center">
    {'Copyright © '}
    <MuiLink color="inherit" href="https://mui.com/">
      passmate
    </MuiLink>{' '}
    {new Date().getFullYear()}.
  </Typography>
    </div>
  );
}