import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
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
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';



const ProgramSearch = ({filter, setFilter}) => {
  const handleChange = (e) => {
    setFilter({...filter, [e.target.name]: e.target.value})
  }
  return (
    <Card>
      <CardContent sx={{paddingLeft:12, paddingRight:12, backgroundColor: "#BDBDBD"}}>
      <h2 style={{textAlign:"center", marginBottom:0}}>What are you looking for?</h2>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <TextField label="Search by Team or Program Name" variant="standard" value={filter.search} name="search" fullWidth onChange={handleChange} size="small"/>
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
                <Grid container spacing={1.5}>
                  <Grid item xs={12} sm={12} md={3.5}>
                    <FormControl sx={{ width: "100%" }} size="small">
                      <InputLabel id="demo-multiple-checkbox-label">Level</InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        name="level"
                        input={<OutlinedInput label="Tag" />}
                        // renderValue={(selected) => selected.join(', ')}
                        SelectProps={{
                          multiple: true,
                          value: filter.level,
                          onChange: handleChange,
                        }}
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
                  <Grid item xs={12} sm={12} md={3.5}>
                  <FormControl sx={{ width: "100%" }} size="small">
                      <InputLabel id="demo-multiple-checkbox-label">Format</InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        name="format"
                        value={filter.format}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
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
                  <Grid item xs={12} sm={12} md={3.5}>
                  <FormControl sx={{ width: "100%" }} size="small">
                      <InputLabel id="demo-multiple-checkbox-label">Leadership Principles</InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        name="leaderships"
                        value={filter.leaderships}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
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
                          <MenuItem value={"Learn & be Curious"}>
                            <Checkbox  />
                            <ListItemText primary="Learn & be Curious" />
                          </MenuItem>
                          <MenuItem value={"Think Big"}>
                            <Checkbox  />
                            <ListItemText primary="Think Big" />
                          </MenuItem>
                          <MenuItem value={"Hire and Develop the best"}>
                            <Checkbox  />
                            <ListItemText primary="Hire and Develop the best" />
                          </MenuItem>
                          <MenuItem value={"Insist on the highest standards"}>
                            <Checkbox  />
                            <ListItemText primary="Insist on the highest standards" />
                          </MenuItem>
                          <MenuItem value={"Bias for Action"}>
                            <Checkbox  />
                            <ListItemText primary="Bias for Action" />
                          </MenuItem>
                          <MenuItem value={"Frugality"}>
                            <Checkbox  />
                            <ListItemText primary="Frugality" />
                          </MenuItem>
                          <MenuItem value={"Earn Trust"}>
                            <Checkbox  />
                            <ListItemText primary="Earn Trust" />
                          </MenuItem>
                          <MenuItem value={"Dive Deep"}>
                            <Checkbox  />
                            <ListItemText primary="Dive Deep" />
                          </MenuItem>
                          <MenuItem value={"Have Backbone; Disagree and Commit"}>
                            <Checkbox  />
                            <ListItemText primary="Have Backbone; Disagree and Commit" />
                          </MenuItem>
                          <MenuItem value={"Deliver Results"}>
                            <Checkbox  />
                            <ListItemText primary="Deliver Results" />
                          </MenuItem>
                          <MenuItem value={"Strive to be Earths Best Employer"}>
                            <Checkbox  />
                            <ListItemText primary="Strive to be Earths Best Employer" />
                          </MenuItem>
                          <MenuItem value={"Success and Scale Bring Broad Responsibility"}>
                            <Checkbox  />
                            <ListItemText primary="Success and Scale Bring Broad Responsibility" />
                          </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} md={1.5}>
                    <Button onClick={() => {setFilter({search:"", level:[], format:[], leaderships:[]})}} variant="outlined" sx={{float:"right"}} color="error" size="large">Clear All</Button>
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
