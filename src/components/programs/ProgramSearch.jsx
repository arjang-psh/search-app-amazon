import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';



const ProgramSearch = ({filter, setFilter}) => {
  const handleChange = (e) => {
    setFilter({...filter, [e.target.name]: e.target.value})
  }
  return (
    <Card>
      <CardContent sx={{paddingLeft:20, paddingRight:20, backgroundColor: "#BDBDBD"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <TextField label="Search by Team or Program Name" variant="standard" name="search" fullWidth onChange={handleChange}/>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <Typography>Advanced Saerch</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={4}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="demo-multiple-checkbox-label">Level</InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        name="level"
                        value={filter.level}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        // renderValue={(selected) => selected.join(', ')}
                        // MenuProps={MenuProps}
                      >
                        
                          <MenuItem  value={"L1"}>
                            <Checkbox />
                            <ListItemText primary="L1" />
                          </MenuItem>
                          <MenuItem value={"L2"}>
                            <Checkbox  />
                            <ListItemText primary="L2" />
                          </MenuItem>
                          <MenuItem value={"L3"}>
                            <Checkbox  />
                            <ListItemText primary="L3" />
                          </MenuItem>
                          <MenuItem value={"L4"}>
                            <Checkbox  />
                            <ListItemText primary="L4" />
                          </MenuItem>
                          <MenuItem value={"L5"}>
                            <Checkbox  />
                            <ListItemText primary="L5" />
                          </MenuItem>
                          <MenuItem value={"L6"}>
                            <Checkbox  />
                            <ListItemText primary="L6" />
                          </MenuItem>
                          <MenuItem value={"L7"}>
                            <Checkbox  />
                            <ListItemText primary="L7" />
                          </MenuItem>
                          <MenuItem value={"L8"}>
                            <Checkbox  />
                            <ListItemText primary="L8" />
                          </MenuItem>
                        
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                  <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="demo-multiple-checkbox-label">Leadership Principles</InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        name="leaderships"
                        value={filter.leaderships}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        // renderValue={(selected) => selected.join(', ')}
                        // MenuProps={MenuProps}
                      >
                        
                          <MenuItem  value={"In person"}>
                            <Checkbox />
                            <ListItemText primary="In person" />
                          </MenuItem>
                          <MenuItem value={"Online"} >
                            <Checkbox  />
                            <ListItemText primary="Online" />
                          </MenuItem>
                          <MenuItem value={"Multiple modalities"}>
                            <Checkbox  />
                            <ListItemText primary="Multiple modalities" />
                          </MenuItem>
                          <MenuItem value={"ILT"}>
                            <Checkbox  />
                            <ListItemText primary="ILT" />
                          </MenuItem>
                          <MenuItem value={"VILT"}>
                            <Checkbox  />
                            <ListItemText primary="VILT" />
                          </MenuItem>
                          <MenuItem value={"Self Directed"}>
                            <Checkbox  />
                            <ListItemText primary="Self Directed" />
                          </MenuItem>
                          <MenuItem value={"Social Learning"}>
                            <Checkbox  />
                            <ListItemText primary="Social Learning" />
                          </MenuItem>
                        
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                  <FormControl sx={{ width: "100%" }}>
                      <InputLabel id="demo-multiple-checkbox-label">Format</InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        name="format"
                        value={filter.format}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        // renderValue={(selected) => selected.join(', ')}
                        // MenuProps={MenuProps}
                      >
                        
                          <MenuItem  value={"Customer Obsession"}>
                            <Checkbox />
                            <ListItemText primary="Customer Obsession" />
                          </MenuItem>
                          <MenuItem value={"Ownership"}>
                            <Checkbox  />
                            <ListItemText primary="Ownership" />
                          </MenuItem>
                          <MenuItem value={"Invent & Simplify"}>
                            <Checkbox  />
                            <ListItemText primary="Invent & Simplify" />
                          </MenuItem>
                          <MenuItem value={"Are Right, A Lot"}>
                            <Checkbox  />
                            <ListItemText primary="Are Right, A Lot" />
                          </MenuItem>
                        
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProgramSearch
