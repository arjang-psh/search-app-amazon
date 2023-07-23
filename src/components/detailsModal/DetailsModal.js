import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import women from "../../assets/women.jpeg";

const DetailsModal = ({ openRow, setOpenRow }) => {
  if (!openRow) {
    return "";
  }
  let open = Boolean(openRow);
  console.log(open);
  const onClose = () => setOpenRow(null);
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <Typography gutterBottom variant="body1" component="div">
            {openRow.program}
          </Typography>
          {onClose ? (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent dividers>
          <Card>
            <CardMedia
              sx={{ height: 140, width: "100%" }}
              image={women}
              title="women"
            />
            <CardContent>
              {/* <Typography gutterBottom variant="h5" component="div">
          {openRow.team}
        </Typography> */}
              {/* <Typography gutterBottom variant="h5" component="div">
          {openRow.format}
        </Typography> */}
              <Typography variant="body1" component="div">
                Program Objective:
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
                This Program focuses on specific
                <br />
                skills and challenges that women
                <br />
                face in the workplace.
              </Typography>
              <Typography variant="body1" component="div">
                Duration:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                3 days virtual / 2 days in-person
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="/cop-marketplace/details">
                More Details
              </Button>
            </CardActions>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DetailsModal;
