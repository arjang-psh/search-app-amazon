import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


import women from '../../assets/women.jpeg'




const DetailsModal = ({open, setOpen}) => {
    if(!open) return null
    console.log(open)
    const onClose = () => setOpen(false)   
  return (
    
    <>
  <Dialog>
    <DialogTitle sx={{ m: 0, p: 2 }}>
    {onClose ? (
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
    ) : null}
  </DialogTitle>
  <DialogContent dividers>
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
        </DialogContent>
  </Dialog>

    </>
  )
}

export default DetailsModal