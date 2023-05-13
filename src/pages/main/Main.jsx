import React, {useState, useEffect} from 'react';
import Navbar from '../../components/header/Navbar'
import Header from '../../components/header/Header'
import ProgramSearch from '../../components/programs/ProgramSearch'
import ProgramTable from '../../components/programs/ProgramTable'
import {data} from '../../data';


const Main = () => {
  const [rows, setRows] = useState([])
  const [filter, setFilter] = useState({
    search: "",
    level: [],
    format: [],
    leaderships: [],
  })

  useEffect(() => {
    let newRows = data

    if (filter.search) {
      newRows = newRows.filter((item) => {
        let newString = `${item.team} ${item.program}`.toLowerCase()
        return newString.includes(filter.search)
      })
    }

    if (filter.level.length) {
      newRows = newRows.filter((row) => {
        return filter.level.every(level => row.level.includes(level))
      })
    }

    if (filter.format) {
      newRows = newRows.filter((row) => {
        return filter.format.every(format => row.format.includes(format))
      })
    }

    let leaderships = [
      'Customer Obsession',
      'Ownership',
      'Invent & Simplify',
      'Are Right, A Lot',
      'Learn & be Curious',
      'Think Big',
      'Hire and Develop the best',
      'Insist on the highest standards',
      'Bias for Action',
      'Frugality',
      'Earn Trust',
      'Dive Deep',
      'Have Backbone; Disagree and Commit',
      'Deliver Results',
      'Strive to be Earths Best Employer',
      'Success and Scale Bring Broad Responsibility',
    ]
    leaderships.map(leadership => {
      if (filter.leaderships.includes(leadership)) {
        newRows = newRows.filter(row => row[leadership])
      }
    })

    setRows(newRows)

  }, [filter])


  return (
    <>
      <Navbar/>
      <Header/>
      <ProgramSearch filter={filter} setFilter={setFilter}/>
      <ProgramTable rows={rows}/>
    </>
  )
}

export default Main
