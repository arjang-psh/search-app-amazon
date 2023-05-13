import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';



const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ backgroundColor: "#303F9F"}}>
      <Toolbar>
        <Typography variant="h" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" sx={{textDecoration: 'none', color:"#FFF"}}></Link>
        </Typography>
        <Button href="about" color="inherit">About</Button>
        <Button href="dashboard" color="inherit">Dashboard</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar