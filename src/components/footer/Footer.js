import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <>
      <hr></hr>
      <Box
        sx={{
          flexGrow: 1,
          padding: 0.5,
          marginBottom: 1,
          backgroundColor: "#FFF",
          color: "gray",
          textAlign: "center",
          //   display: "flex",
          //     justifyContent: "",
        }}
      >
        <Typography variant="body2" sx={{ fontSize: 12 }}>
          Would you like to add a new program? please submit it{" "}
          <Link
            href="https://amazoninteu.qualtrics.com/jfe/form/SV_aa7jlwdcqmyj0ZU"
            alt="survey to add program"
            target="_blank"
            style={{ color: "#66CCFF", textDecoration: "none" }}
          >
            here.
          </Link>
          &nbsp;Any further questions or feedback, reach out to{" "}
          <Link
            style={{ color: "#66CCFF", textDecoration: "none" }}
            href="mailto: wwas-cop-pm@amazon.com"
          >
            wwas-cop-pm@amazon.com
          </Link>
          .
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 12 }}>
          <Link
            style={{ color: "#66CCFF", textDecoration: "none" }}
            href="https://quip-amazon.com/jZVpAmjPB7i8/Talent-Development-Program-Marketplace"
            target="_blank"
          >
            Version 1.3.6 - Updated July 2023
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
