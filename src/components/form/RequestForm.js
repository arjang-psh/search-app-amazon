import React from "react";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const RequestForm = () => {
  return (
    <div style={{ padding: "0 500px" }}>
      <Card sx={{ marginTop: 2, padding: "20px 5 px" }}>
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="Enter first name"
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder="Enter last name"
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter email"
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Type your message here"
                  variant="outlined"
                  fullWidth
                  required
                  size="small"
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="small"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestForm;
