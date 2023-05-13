import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import women from '../../assets/women.jpeg'

const DetailsModal = ({open}) => {
    if(!open) return null
  return (
    <Card sx={{ maxWidth: 345, position:'fixed', top:"40%", right:"50%"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={women}
        title="women"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Program Objective
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Leadership</Button>
        <Button size="small">Amazon Leaders</Button>
      </CardActions>
    </Card> 
  )
}

export default DetailsModal