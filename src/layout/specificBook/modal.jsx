import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius : 20,
    top : "20%",
    left : "30%"

  },
  form : {
    display : "flex",
    flexFlow : "column",
  },
  field : {
      marginTop : 15,
  },
  formHeading : {
      fontFamily : "Poppins",
      color : "#24819E",
      fontSize : 18,
      fontWeight : 600
  },
  submitBtnStyles : {
      background : "#24819E",
      color : "#F8F8F8",
      fontFamily : "Poppins",
      fontSize : 13,
      fontWeight : 600,
      marginTop : 15
  }
}));

export default function RequestModal({modalState, setModalState}) {
    
  const classes = useStyles();

  const handleOpen = () => {
    setModalState(true);
  };

  const handleClose = () => {
    setModalState(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title" className={classes.formHeading}>Fill This Form, To Place A Request.</h2>
      
      <form className={classes.form}>

        <TextField 
        id="outlined-basic" label="Name" variant="outlined" 
        className={classes.field}
        InputProps={{
          style : {
                fontSize : "15px",
                fontFamily: "Poppins",
                color : "#24819E",
            }
        }}
        />

        
        <TextField 
          id="outlined-basic" 
          label="Email" 
          variant="outlined" 
          className={classes.field}
          InputProps={{
            style : {
                fontSize : "15px",
                fontFamily: "Poppins",
                color : "#24819E",
            }
        }} 
        />

        <TextField 
          id="outlined-basic" 
          label="Address" 
          className={classes.field} 
          variant="outlined"
          InputProps={{
            style : {
                fontSize : "15px",
                fontFamily: "Poppins",
                color : "#24819E",
            }
        }} 
        />
          
        <TextField 
          id="outlined-basic" 
          label="Contact" 
          variant="outlined" 
          type="number" 
          className={classes.field}
          InputProps={{
            style : {
                fontSize : "15px",
                fontFamily: "Poppins",
                color : "#24819E",
            }
        }} 
        />

      <Button className = {classes.submitBtnStyles}>SUBMIT</Button>
      </form>
      
    </div>
  );

  return (
    <div>
      <Modal
        open={modalState}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}