import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Link from "@mui/material/Link";
import TooltipDetails from "../tooltipDetails/TooltipDetails";
import rec from "../../assets/rec.png";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// const leaderShipCounter = (row) => {

//   let newList = []
//    leaderships.forEach((leadership)=> {
//     if (row[leadership]) {
//       newList.push(leadership)
//     }

//   }

//   )
//   return newList.join(", ")
// }

const leaderShipCounter = (row) => {
  let count = 0;
  if (row["Customer_Obsession"]) {
    count++;
  }
  if (row["Ownership"]) {
    count++;
  }
  if (row["Invent & Simplify"]) {
    count++;
  }
  if (row["Are Right, A Lot"]) {
    count++;
  }
  if (row["Learn & be Curious"]) {
    count++;
  }
  if (row["Think Big"]) {
    count++;
  }
  if (row["Hire and Develop the best"]) {
    count++;
  }
  if (row["Insist on the highest standards"]) {
    count++;
  }
  if (row["Bias for Action"]) {
    count++;
  }
  if (row["Frugality"]) {
    count++;
  }
  if (row["Earn Trust"]) {
    count++;
  }
  if (row["Dive Deep"]) {
    count++;
  }
  if (row["Have Backbone; Disagree and Commit"]) {
    count++;
  }
  if (row["Deliver Results"]) {
    count++;
  }
  if (row["Strive to be Earths Best Employer"]) {
    count++;
  }
  if (row["Success and Scale Bring Broad Responsibility"]) {
    count++;
  }
  return count;
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const ProgramTable = ({ rows, page, setPage }) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    let url = new URL(window.location.href);
    url.searchParams.set("page", newPage);
    window.history.replaceState(null, null, url.toString());
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }));
  return (
    <>
      <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
        <Table size="small">
          <TableHead
            sx={{
              "td, th": { border: 0 },
              backgroundColor: "#006DAD",
              whiteSpace: "nowrap",
            }}
          >
            <TableRow>
              <StyledTableCell align="left">Team</StyledTableCell>
              <StyledTableCell align="left">Program</StyledTableCell>
              <StyledTableCell align="center">Level</StyledTableCell>
              <StyledTableCell align="center">Launch Date</StyledTableCell>
              <StyledTableCell align="center">Format</StyledTableCell>
              {/* <StyledTableCell align="center">
                Leadership principles
              </StyledTableCell> */}
              {/* <StyledTableCell align="center">Link</StyledTableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <StyledTableRow key={row.id} sx={{ "td, th": { border: 0 } }}>
                  <StyledTableCell align="left" sx={{ width: "25%" }}>
                    {row.team}
                  </StyledTableCell>
                  <StyledTableCell align="left" sx={{ width: "30%" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <TooltipDetails row={row} />
                      {row.rec ? (
                        <img
                          style={{ width: "23px", marginLeft: 5 }}
                          src={rec}
                        />
                      ) : null}
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "10%" }}>
                    {row.level.join("- ")}
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "10%" }}>
                    {row.lunch_date}
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ width: "25%" }}>
                    {row.format}
                  </StyledTableCell>
                  {/* <StyledTableCell align="center">
                    {leaderShipCounter(row)}
                  </StyledTableCell> */}
                  {/* <StyledTableCell align="center" sx={{ width: "150px" }}>
                    {row.link ? (
                      <Link href={row.link} target="_blank">
                        Link
                      </Link>
                    ) : (
                      "-"
                    )}
                  </StyledTableCell> */}
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 10,
        }}
      >
        <Typography
          variant="body2"
          style={{
            display: "flex",
            alignItems: "center",
            color: "gray",
            fontSize: 12,
          }}
        >
          <img style={{ width: "23px", marginRight: 5 }} src={rec} /> Amazon
          Recommended Programs
        </Typography>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
};

export default ProgramTable;
