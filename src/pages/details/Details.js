import { useState, useRef } from "react";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { data } from "../../data";
import Link from "@mui/material/Link";
import { applyFilters } from "../../utils";

const Details = () => {
  const urlShare = window.location.href;
  // const [showForm, setShowForm] = useState(false);
  let { id } = useParams();
  const idRef = useRef(parseInt(id));
  let row = data.find((item) => item.id === idRef.current);
  const [program, setSProgram] = useState(row);

  let url = new URL(window.location.href);
  let urlFiltersJson = url.searchParams.get("q");
  let urlFilters = JSON.parse(urlFiltersJson);

  // const taggleForm = () => {
  //   setShowForm(!showForm);
  // };

  let filterRows = applyFilters(urlFilters, data);
  let index = filterRows.findIndex((item) => item.id === idRef.current);

  const next = () => {
    let indexRow = filterRows[index + 1];
    idRef.current = indexRow.id;
    let url = `/cop-marketplace/details/${idRef.current}${window.location.search}`;
    window.history.replaceState(null, null, url);
    let course = data.find((item) => item.id === idRef.current);
    setSProgram(course);
  };

  const previous = () => {
    let indexRow = filterRows[index - 1];
    idRef.current = indexRow.id;
    let url = `/cop-marketplace/details/${idRef.current}${window.location.search}`;
    window.history.replaceState(null, null, url);
    let course = data.find((item) => item.id === idRef.current);
    setSProgram(course);
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          padding: "10px 50px 0px 50px",
          backgroundColor: "#FFF",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* <Grid container spacing={6}> */}
        {/* <Grid item xs={6} sm={9} md={9}> */}
        <Button
          onClick={() => window.history.back()}
          variant="outlined"
          color="primary"
          startIcon={<KeyboardDoubleArrowLeftIcon />}
          size="small"
        >
          Back to list
        </Button>
        {/* </Grid> */}
        {/* <Grid item xs={6} sm={3} md={3}> */}
        <Button
          sx={{}}
          component={Link}
          href={`mailto:?subject=Check%20out%20this%20program%20on%20Talent%20Development%20Marketplace&body=Team:%0d%0a${program.team}%0d%0a%0d%0aName:%0d%0a${program.program}%0d%0a%0d%0aDescription:%0d%0a${program.description}%0d%0aUrl:%0d%0a${urlShare}`}
          variant="outlined"
          color="primary"
          size="small"
          endIcon={<ShareTwoToneIcon />}
        >
          share
        </Button>
        {/* </Grid> */}
        {/* </Grid> */}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          padding: "10px 0px 20px 50px",
          backgroundColor: "#FFF",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4}>
            <Box
              sx={{
                flexGrow: 1,
                padding: 1,
                marginBottom: 1,
                textAlign: "center",
                boxShadow:
                  "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              {program.img ? (
                <img
                  style={{
                    width: "100%",
                    height: "250px",
                  }}
                  src={process.env.PUBLIC_URL + program.img}
                  alt={program.program}
                />
              ) : (
                <Box
                  sx={{
                    margin: "0 auto",
                    padding: "10px",
                    fontSize: 40,
                    fontWeight: "bold",
                    backgroundImage:
                      "linear-gradient(90deg, rgba(0,44,69,1) 0%, rgba(0,66,106,1) 18%, rgba(113,190,243,1) 96%)",
                    minHeight: "250px",
                    color: "#FFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {program.program}
                </Box>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={8} sx={{ color: "#000" }}>
            <div style={{ padding: "0px 50px 0px 0px" }}>
              <Box
                sx={{
                  flexGrow: 1,
                  padding: 0.5,
                  marginBottom: 1,
                  textAlign: "center",
                  boxShadow:
                    "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#006DAD",
                  color: "#FFF",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0 5px",
                  }}
                >
                  {" "}
                  <Button
                    disabled={index === 0 ? true : false}
                    component={Link}
                    onClick={previous}
                    variant="outlined"
                    color="secondary"
                    size="small"
                    startIcon={<KeyboardDoubleArrowLeftIcon />}
                  >
                    Previous
                  </Button>
                  {program.program}{" "}
                  <Button
                    disabled={index + 1 === filterRows.length ? true : false}
                    component={Link}
                    onClick={next}
                    variant="outlined"
                    color="secondary"
                    size="small"
                    endIcon={<KeyboardDoubleArrowRightIcon />}
                    sx={{ paddingLeft: 4 }}
                  >
                    Next
                  </Button>
                </Typography>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  padding: 0.5,
                  marginBottom: 2,
                  textAlign: "center",
                  // boxShadow:
                  //   "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "gray", textAlign: "left" }}
                >
                  {program.description ? (
                    program.description
                  ) : (
                    <Typography variant="body2">
                      We need your help! Please click{" "}
                      <Link
                        style={{ color: "#66CCFF", textDecoration: "none" }}
                        href="mailto: wwas-cop-pm@amazon.com"
                        target="_blank"
                      >
                        here
                      </Link>{" "}
                      to send the missing information of this section.{" "}
                    </Typography>
                  )}
                </Typography>
                {program.link ? (
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    Click&nbsp;
                    <Link
                      style={{ color: "#66CCFF", textDecoration: "none" }}
                      href={program.link}
                      target="_blank"
                    >
                      here
                    </Link>
                    &nbsp;for more information.
                  </Typography>
                ) : null}
              </Box>

              <Box
                sx={{
                  // flexGrow: 1,
                  padding: 0.5,
                  marginBottom: 1,
                  backgroundColor: "#006DAD",
                  color: "#FFF",
                  textAlign: "center",
                  boxShadow:
                    "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Typography variant="body1">Pre-Requisites</Typography>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  padding: 0.5,
                  marginBottom: 1,
                  textAlign: "center",
                  // boxShadow:
                  //   "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "gray", textAlign: "left" }}
                >
                  {program.preRequest ? (
                    program.preRequest
                  ) : (
                    <Typography variant="body2">
                      We need your help! Please send the missing information of
                      this section by using "REQUEST UPDATE" button below.
                    </Typography>
                  )}
                </Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <Box
                    sx={{
                      // flexGrow: 1,
                      padding: 0.5,
                      marginBottom: 1,
                      backgroundColor: "#006DAD",
                      color: "#FFF",
                      textAlign: "center",
                      boxShadow:
                        "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Typography variant="body1">Level</Typography>
                  </Box>
                  <Box
                    sx={{
                      flexGrow: 1,
                      padding: 0.5,
                      marginBottom: 1,
                      textAlign: "center",
                      // boxShadow:
                      //   "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Typography variant="body1" sx={{ color: "gray" }}>
                      {program.level.join(", ")}{" "}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Box
                    sx={{
                      // flexGrow: 1,
                      padding: 0.5,
                      marginBottom: 1,
                      backgroundColor: "#006DAD",
                      color: "#FFF",
                      textAlign: "center",
                      boxShadow:
                        "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Typography variant="body1">Duration</Typography>
                  </Box>
                  <Box
                    sx={{
                      flexGrow: 1,
                      padding: 0.5,
                      marginBottom: 1,
                      textAlign: "center",
                      // boxShadow:
                      //   "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Typography variant="body1" sx={{ color: "gray" }}>
                      {program.duration ? program.duration : "-"}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <Box
                    sx={{
                      // flexGrow: 1,
                      padding: 0.5,
                      marginBottom: 1,
                      backgroundColor: "#006DAD",
                      color: "#FFF",
                      textAlign: "center",
                      boxShadow:
                        "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Typography variant="body1">Modality</Typography>
                  </Box>
                  <Box
                    sx={{
                      flexGrow: 1,
                      padding: 0.5,
                      marginBottom: 1,
                      textAlign: "center",
                      // boxShadow:
                      //   "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Typography variant="body1" sx={{ color: "gray" }}>
                      {program.format}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Box
                    sx={{
                      // flexGrow: 1,
                      padding: 0.5,
                      marginBottom: 1,
                      backgroundColor: "#006DAD",
                      color: "#FFF",
                      textAlign: "center",
                      boxShadow:
                        "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Typography variant="body1">Reviews</Typography>
                  </Box>
                  <Box
                    sx={{
                      flexGrow: 1,
                      padding: 0.5,
                      marginBottom: 1,
                      textAlign: "center",
                      // boxShadow:
                      //   "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Typography variant="body1" sx={{ color: "gray" }}>
                      -
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <Box
                    sx={{
                      // flexGrow: 1,
                      padding: 0.5,
                      marginBottom: 1,
                      backgroundColor: "#006DAD",
                      color: "#FFF",
                      textAlign: "center",
                      boxShadow:
                        "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Typography variant="body1">
                      Additional Expenses Per Participant
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      flexGrow: 1,
                      padding: 0.5,
                      marginBottom: 1,
                      textAlign: "center",
                      // boxShadow:
                      //   "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <Typography variant="body1" sx={{ color: "gray" }}>
                      {program.CPP ? program.CPP : "-"}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Box
                    sx={{
                      // flexGrow: 1,
                      padding: 0.5,
                      marginBottom: 1,
                      // backgroundColor: "#006DAD",
                      color: "#000",
                      textAlign: "center",
                      // boxShadow:
                      //   "0px 2px 4px 2px rgba(0, 0, 0, 0.2), 0px 2px 6px 2px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {/* <Typography variant="body1">
                    {program.link ? (
                      <Link
                        href={program.link}
                        target="_blank"
                        // sx={{ color: "#FFF" }}
                      >
                        Click here to know more...
                      </Link>
                    ) : (
                      "No external link available"
                    )}
                  </Typography> */}
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ textAlign: "center" }}>
                <Grid container spacing={0} sx={{ padding: "20px 0 0 0" }}>
                  <Grid item xs={12} sm={12} md={4}>
                    <Button
                      component={Link}
                      href={`mailto:wwas-cop-pm@amazon.com?subject=Request%20an%20Update&body=Team:%0d%0a${program.team}%0d%0a%0d%0aName:%0d%0a${program.program}%0d%0a%0d%0aUrl:%0d%0a${urlShare}%0d%0a%0d%0aPlease let us know the information to be updated:%0d%0a%0d%0aAuthorized leader (L7+):`}
                      variant="outlined"
                      color="warning"
                      size="small"
                      startIcon={<SystemUpdateAltIcon />}
                      sx={{ width: "200px" }}
                    >
                      Request Update
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <Button
                      component={Link}
                      href="https://amazoninteu.qualtrics.com/jfe/form/SV_2bO5OKW2XtsEFNA"
                      sx={{
                        // padding: 1.2,
                        // marginLeft: 1.5,
                        background: "#fdaf1d",
                        color: "#1c1404",
                        width: "200px",
                      }}
                      variant="contained"
                      color="primary"
                      target="_blank"
                      // endIcon={<InputIcon />}
                      // onClick={taggleForm}
                    >
                      Request This Program
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <Button
                      component={Link}
                      href={`mailto:wwas-cop-pm@amazon.com?subject=Request%20Deletion&body=Team:%0d%0a${program.team}%0d%0a%0d%0aName:%0d%0a${program.program}%0d%0a%0d%0aUrl:%0d%0a${urlShare}%0d%0a%0d%0aPlease let us know the reason you want to delete this program:%0d%0a%0d%0aAuthorized leader (L7+):`}
                      variant="outlined"
                      color="error"
                      size="small"
                      endIcon={<DeleteOutlineOutlinedIcon />}
                      sx={{ width: "200px" }}
                    >
                      Request Deletion
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </Grid>
        </Grid>
        {/* {showForm && <RequestForm />} */}
      </Box>
      <Footer />
    </>
  );
};

export default Details;
