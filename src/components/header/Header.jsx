import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 1}}>
    <Grid container spacing={2} >
      <Grid item xs={4} sm={4} md={1.2}>
        <img src={logo} alt='logo' style={{ width: "100%", marginTop: 8, marginLeft: 15}}/>
      </Grid>
      <Grid item xs={8} sm={8} md={6.8}>
       <div style={{marginLeft: 10}}>
        <Typography variant="h6">
            Talent Development
        </Typography>
        <Typography variant="subtitle1" >
           Marketplace
        </Typography>
       </div> 
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
      <Typography variant="body1" gutterBottom>
        Find The Rigth Talent Development Program
      </Typography>
      <Typography variant="body2" gutterBottom>
        Better. Faster. Simpler.
      </Typography>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Header