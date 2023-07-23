import React from "react";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import women from "../../assets/women.png";

const About = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          padding: "5px 70px 5px 70px",
          backgroundColor: "#FFF",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            padding: 0.5,
            marginBottom: 1,
            backgroundColor: "#006DAD",
            color: "#FFF",
            textAlign: "center",
            boxShadow:
              "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Typography variant="h5">ABOUT</Typography>
        </Box>
        <Grid container spacing={4} sx={{ color: "#000" }}>
          <Grid item xs={12} sm={12} md={5}>
            <Box
              sx={{
                flexGrow: 1,
                padding: 1,
                marginTop: 2,
                marginBottom: 1,
                textAlign: "center",
                boxShadow:
                  "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              <img
                src={women}
                alt="women"
                style={{
                  width: "100%",
                }}
              />
            </Box>
            <Typography variant="h5" sx={{ textAlign: "center", marginTop: 2 }}>
              BETTER. FASTER. SIMPLER.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="body1" sx={{ padding: 1, marginLeft: 2 }}>
              Welcome to the WWAS Talent Development Programs Marketplace
              (TDPM), your one-stop destination for all talent development
              programs and resources offered by TD teams in WWAS as well as PXT.
              Business leaders in WWAS , as well as PXT Talent Development
              leaders supporting WWAS, consistently reported a lack of
              visibility to all the programs available within WWAS. TDPM will
              address that need by:
              <br />
              &nbsp; a. Providing a comprehensive and updated list of talent
              development programs being offered in WWAS,
              <br />
              &nbsp; b. Providing the development objectives being met by each
              program and the LP it supports,
              <br />
              &nbsp; c. Providing the logistical information (like resources
              needed, lead time to offer it, etc.), and,
              <br />
              &nbsp; d. Providing a mechanism for the team offering the program
              and team requesting it to establish contact and finalize terms.
              <br />
              TDPM has been created as a project under WWAS Talent Development
              Community of Practice. For more information on WWAS TD CoP, please
              visit our wiki{" "}
              <a
                href="https://w.amazon.com/bin/view/WWAS-TD-CoP/"
                alt="wiki page URL"
                target="_blank"
                style={{ color: "#66CCFF", textDecoration: "none" }}
              >
                here
              </a>
              .
            </Typography>
            <br />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default About;
