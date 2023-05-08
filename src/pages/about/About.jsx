import React from 'react';
import Navbar from '../../components/header/Navbar';
import Header from '../../components/header/Header';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import women from '../../assets/women.png'


const About = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Box sx={{ flexGrow: 1, padding: 2}}>
        <Grid container spacing={4} >
          <Grid item xs={12} sm={12} md={6}>
          <img src={women} alt='women' style={{ width: "100%"}}/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} >
            <Typography variant="h6">Amazon Talent Development Marketplace (ATDM) is a dynamic and innovative talent platform designed to support the growth and development of our employees. With a vast array of programs, courses, and resources, the library skills and knowladge they need to succeed in their roles.
               <br/>Our talent library is designed with the customer in mind, offering a user-friendly interface that is easy to navigate and search. Our content is curated and developed by industry experts, ensuring that all have access to the most current and relevant information.
                From leadership and management development to technical skills training and beyond, our library offers a comprehensive range of programs to support learners at every stage of their career.
            </Typography><br/>
            <Typography variant="h5">BETTER. FASTER. SIMPLER.</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default About