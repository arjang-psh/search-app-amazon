import React, { useState, useEffect } from 'react';
import Navbar from '../../components/header/Navbar'
import Header from '../../components/header/Header'
import ProgramSearch from '../../components/programs/ProgramSearch'
import ProgramTable from '../../components/programs/ProgramTable'
import { data } from '../../data';
import { CommentsDisabledOutlined } from '@mui/icons-material';




const Main = () => {
  const [rows, setRows] = useState([])
  const [filter, setFilter] = useState({search:"", level:[], format:[], leaderships:[]})


    useEffect(()=> {
       let newRows = data
       if (filter.search) {
        newRows.filter((item)=> {
          return item.team.toLowerCase().includes(filter.search.toLowerCase()) || item.program.toLowerCase().includes(filter.search.toLowerCase())})
       }
       setRows(newRows)
    }, [filter])
    
  
  return (
    <>
      <Navbar />
      <Header />
      <ProgramSearch filter={filter} setFilter={setFilter}/>
      <ProgramTable rows={rows}/>
    </>
  )
}

export default Main