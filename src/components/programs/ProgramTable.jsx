import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import DetailsModal from '../detailsModal/DetailsModal';
import { leaderships } from '../../leaderships';



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
    let count= 0
    if (row["Customer_Obsession"]){
        count++;
    }
    if (row["Ownership"]){
        count++;
    }
    if (row["Invent & Simplify"]){
        count++;
    }
    if (row["Are Right, A Lot"]){
        count++;
    }
    if (row["Learn & be Curious"]){
        count++;
    }
    if (row["Think Big"]){
        count++;
    }
    if (row["Hire and Develop the best"]){
        count++;
    }
    if (row["Insist on the highest standards"]){
        count++;
    }
    if (row["Bias for Action"]){
        count++;
    }
    if (row["Frugality"]){
        count++;
    }
    if (row["Earn Trust"]){
        count++;
    }
    if (row["Dive Deep"]){
        count++;
    }
    if (row["Have Backbone; Disagree and Commit"]){
        count++;
    }
    if (row["Deliver Results"]){
        count++;
    }
    if (row["Strive to be Earths Best Employer"]){
        count++;
    }
    if (row["Success and Scale Bring Broad Responsibility"]){
        count++;
    }
    return count
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const ProgramTable = ({rows}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [open, setOpen] = useState(false);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  return (
    <>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer component={Paper} >
    <DetailsModal open={open} setOpen={setOpen}/>
    <Table>
      <TableHead  sx={{ 'td, th': { border:1 }, backgroundColor: "#5B9BD5" }}>
        <TableRow onClick={()=> setOpen(false)}>
          <StyledTableCell>Team</StyledTableCell>
          <StyledTableCell align="center">Program</StyledTableCell>
          <StyledTableCell align="center">Level</StyledTableCell>
          <StyledTableCell align="center">Launch Date</StyledTableCell>
          <StyledTableCell align="center">Format</StyledTableCell>
          <StyledTableCell align="center">Leadership principles</StyledTableCell>
          <StyledTableCell align="center">Link</StyledTableCell>
        </TableRow>
      </TableHead>
      
      <TableBody>
        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
          <StyledTableRow
            key={row.id}
            // sx={{ 'td, th': { border: 1 } }}
          >
            <StyledTableCell component="th" scope="row">{row.team}</StyledTableCell>
            <StyledTableCell align="left">{row.program}</StyledTableCell>
            <StyledTableCell align="center">{row.level.join("- ")}</StyledTableCell>
            <StyledTableCell align="center">{row.lunch_date}</StyledTableCell>
            <StyledTableCell align="left">{row.format}</StyledTableCell>
            <StyledTableCell align="center">{leaderShipCounter(row)}</StyledTableCell>
            <StyledTableCell align="center">
                {row.link ? <Link href={row.link} target="_blank">Link</Link> : "-"}
            </StyledTableCell>
          </StyledTableRow>
        ))}
        
      </TableBody>
    </Table>
  </TableContainer>
  <TablePagination
  rowsPerPageOptions={[5, 10, 25, 100]}
  component="div"
  count={rows.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>
</Paper>

</>
  )
}

export default ProgramTable