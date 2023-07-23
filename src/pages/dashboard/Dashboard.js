import React from "react";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          padding: "5px 70px 5px 70px",
          backgroundColor: "#FFF",
          color: "#000",
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
          <Typography variant="h5">ADMIN</Typography>
        </Box>
        <Typography variant="body1">
          This section will be available for use by end of July.<br></br> The
          admin portal on the Amazon Talent Development Marketplace (ATDM)
          website provides a seamless and efficient way for authorized
          individuals to upload new talent development programs. As an admin,
          you have the ability to contribute to the growth and diversity of
          programs available on ATDM. Here's how the admin portal works:
          <br></br> To add a new program use this survey{" "}
          <a
            href="https://amazoninteu.qualtrics.com/jfe/form/SV_aa7jlwdcqmyj0ZU"
            alt="survey to add program"
            target="_blank"
            style={{ color: "#66CCFF", textDecoration: "none" }}
          >
            link
          </a>
          . <br></br>To request a program use this survey{" "}
          <a
            href="https://amazoninteu.qualtrics.com/jfe/form/SV_2bO5OKW2XtsEFNA"
            alt="survey to add program"
            target="_blank"
            style={{ color: "#66CCFF", textDecoration: "none" }}
          >
            link
          </a>
          .
        </Typography>
      </Box>
      <Footer />
    </>
  );
};

export default Dashboard;
