import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#373c3f" }}>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={4} sm={3} md={1.2}>
              <Link href="/cop-marketplace">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "100%", marginTop: 17, marginLeft: 8 }}
                />
              </Link>
            </Grid>
            <Grid item xs={8} sm={9} md={6.8}>
              <Link
                href="/cop-marketplace"
                sx={{ textDecoration: "none", color: "#FFF" }}
              >
                <div
                  style={{ marginLeft: 10, paddingTop: 5, paddingBottom: 5 }}
                >
                  <Typography variant="subtitle1" sx={{ letterSpacing: 2.2 }}>
                    Talent Development
                  </Typography>
                  <Typography variant="subtitle1" sx={{ letterSpacing: 1 }}>
                    Programs Marketplace
                  </Typography>
                </div>
              </Link>
            </Grid>
          </Grid>
          <Button
            href="/cop-marketplace"
            color="inherit"
            sx={{ letterSpacing: 1.5, lineHeight: 3 }}
          >
            Home
          </Button>
          <Button
            href="/cop-marketplace/about"
            color="inherit"
            sx={{ letterSpacing: 1.5 }}
          >
            About
          </Button>
          <Button
            href="/cop-marketplace/dashboard"
            color="inherit"
            sx={{ letterSpacing: 1.5 }}
          >
            Admin
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
