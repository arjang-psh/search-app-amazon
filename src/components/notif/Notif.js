import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CloseIcon from "@mui/icons-material/Close";

const Notif = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Box
      sx={{
        display: isVisible ? "flex" : "none",
        padding: "10px 20px",
        background: "#a90067",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Great News! We just added the ability to share programs! Look for a
        share button in the program's details page.
      </Typography>
      <CloseIcon onClick={() => setIsVisible(false)} />
    </Box>
  );
};

export default Notif;
