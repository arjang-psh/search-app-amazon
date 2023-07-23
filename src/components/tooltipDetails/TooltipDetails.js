import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import women from "../../assets/women.jpeg";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const TooltipDetails = ({ row }) => {
  const renderDetails = (detail, id) => {
    if (!detail) {
      detail =
        "This Program focuses on specific skills and challenges that women face in the workplace. ";
    }
    let words = detail.split(" ");
    let finalDetail = "";
    if (words.length < 21) {
      finalDetail = detail;
    } else {
      finalDetail = detail.split(" ").slice(0, 20).join(" ") + "... ";
    }

    return (
      <>
        {finalDetail}
        <Link
          sx={{ textDecoration: "none", whiteSpace: "nowrap" }}
          href={`/cop-marketplace/details/${row.id}${window.location.search}`}
        >
          Read More
        </Link>
      </>
    );
  };

  return (
    <HtmlTooltip
      title={
        <>
          <Card>
            {/* <CardMedia
        sx={{minHeight : "100px", width:"100%"}}
        image={women}
        title="women"
      /> */}
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                {row.program}
              </Typography>
              {/* <Typography gutterBottom variant="h5" component="div">
          {openRow.format}
        </Typography> */}
              {/* <Typography  variant="body1" component="div"> 
          Program Objective:
        </Typography> */}
              <Typography gutterBottom variant="body2" color="text.secondary">
                {renderDetails(row.description, row.id)}
              </Typography>
              {/* <Typography  variant="body2" color="text.primary"> 
          Duration:
        </Typography> */}
              {/* <Typography variant="body2" color="text.secondary">
          3 days virtual/2 days in-person
        </Typography> */}
            </CardContent>
            {/* <CardActions>
        <Button size="small" href='/cop-marketplace/details'>More Details</Button>
      </CardActions> */}
          </Card>
        </>
      }
      placement="right"
      arrow
    >
      <Link
        sx={{ textDecoration: "none" }}
        href={`/cop-marketplace/details/${row.id}${window.location.search}`}
      >
        {row.program}
      </Link>
    </HtmlTooltip>
  );
};

export default TooltipDetails;
