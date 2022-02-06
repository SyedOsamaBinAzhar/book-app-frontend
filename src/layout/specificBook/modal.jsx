import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import updateUser from './updateUser';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 20,
    top: "20%",
    left: "30%"

  },
  form: {
    display: "flex",
    flexFlow: "column",
  },
  field: {
    marginTop: 15,
  },
  formHeading: {
    fontFamily: "Poppins",
    color: "#24819E",
    fontSize: 18,
    fontWeight: 600
  },
  submitBtnStyles: {
    background: "#24819E",
    color: "#F8F8F8",
    fontFamily: "Poppins",
    fontSize: 13,
    fontWeight: 600,
    marginTop: 15
  }
}));

export default function RequestModal({ modalState, setModalState, book }) {

  const classes = useStyles();
  const user = useSelector((state) => state.userDetails.user);

  const name = user.userName;
  const email = user.userEmail;
  const userId = user.userId;
  const bookId = book._id; 

  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleClose = () => {
    setModalState(false);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value)
  }

  const handleContact = (e) => {
    setContact(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      address, contact, userId
    }

    //User address and contact updated on book request submission.
    updateUser(updatedUser)

    const reqObject = {
      userId, bookId
    }

    setModalState(false);
  }

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title" className={classes.formHeading}>Fill This Form, To Place A Request.</h2>
      <form className={classes.form} onSubmit={handleSubmit}>

        <TextField
          id="outlined-basic" label="Name" variant="outlined"
          className={classes.field}
          disabled
          value={name}
          InputProps={{
            style: {
              fontSize: "15px",
              fontFamily: "Poppins",
            }
          }}
        />

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className={classes.field}
          value={email}
          disabled
          InputProps={{
            style: {
              fontSize: "15px",
              fontFamily: "Poppins",
            }
          }}
        />

        <TextField
          id="outlined-basic"
          label="Address"
          className={classes.field}
          onChange={handleAddress}
          value={address}
          variant="outlined"
          InputProps={{
            style: {
              fontSize: "15px",
              fontFamily: "Poppins",
              color: "#24819E",
            }
          }}
        />

        <TextField
          id="outlined-basic"
          label="Contact"
          variant="outlined"
          type="number"
          value={contact}
          className={classes.field}
          onChange={handleContact}
          InputProps={{
            style: {
              fontSize: "15px",
              fontFamily: "Poppins",
              color: "#24819E",
            }
          }}
        />

        <Button className={classes.submitBtnStyles} type="submit">SUBMIT</Button>
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