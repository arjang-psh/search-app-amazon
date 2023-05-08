import React, { useState, useEffect } from 'react';
import Navbar from '../../components/header/Navbar'
import Header from '../../components/header/Header'
import ProgramSearch from '../../components/programs/ProgramSearch'
import ProgramTable from '../../components/programs/ProgramTable'
import { data } from '../../data';






const Main = () => {
  const [rows, setRows] = useState([])
  const [filter, setFilter] = useState({search:"", level:[], format:[], leaderships:[]})


    useEffect(()=> {
       let newRows = data
       console.log(filter)
       if (filter.search) {
        
        newRows = newRows.filter((item)=> {
          let newString = `${item.team} ${item.program}`.toLowerCase()
          return newString.includes(filter.search) 
        })
       }
       if (filter.level.length) {
          newRows = newRows.filter((item)=> {
            let sharedItems = item.level.filter(item => filter.level.includes(item))
            return sharedItems.length  
          })
       }
       if (filter.format) {
        newRows = newRows.filter((item) =>{
          return item.format.includes(filter.format)
        })
       }
       setRows(newRows)
       console.log(newRows)
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