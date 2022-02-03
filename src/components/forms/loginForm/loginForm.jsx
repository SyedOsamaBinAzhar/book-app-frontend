import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import loginUser from './loginUser';

import { userAction } from '../../../actions/userAction';

const LoginForm = () => {

 const classes = useStyles();

 let navigate = useNavigate();


 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const dispatch = useDispatch()


 const emailHandler = (e) => {
    setEmail(e.target.value)
}

const passwordHandler = (e) => {
    setPassword(e.target.value)
}



const onFormSubmit = async(e) => {

    e.preventDefault();


    const userDetails = {
        email,
        password,
    }


    const user = await loginUser(userDetails);

    //Even if we change this code to !user.data then no damage will happen
    //  because access token won't be sent from backend if there's no
    // true user

    if(user.data) {
        alert("signin successful");

        // set global state in redux
        dispatch(userAction(user));

        navigate(`/books`);

    } else {
        alert("invalid email or password please try again.");
        // dispatch(signoutAction());
    }

    
    
}
 return <form className={classes.formStyling} onSubmit={onFormSubmit}>
        
      <TextField 
        className = {classes.fieldStyling} 
        id="outlined-basic" 
        label="Enter Email" 
        variant="outlined" 
        required
        margin='normal'
        onChange = {emailHandler}
        value = {email}
        InputProps={{
            style : {
                fontSize : "15px",
                fontFamily: "Poppins",
                color : "#24819E"
            }                               
        }}
      />

      <TextField 
        className = {classes.fieldStyling} 
        required 
        id="outlined-basic" 
        label="Enter Password" 
        type="password" 
        variant="outlined"
        onChange={passwordHandler}
        value = {password} 
        margin='normal' 
        InputProps={{
            style : {
                fontSize : "15px",
                fontFamily: "Poppins",
                color : "#24819E"
            }
        }}
      />

      <Button variant="contained" className = {classes.buttonStyles} type = "submit"><p>Login</p></Button>

     </form>;
};

const useStyles = makeStyles((theme) => ({
    formStyling : {
        background : "white",
        display : "flex",
        alignItems : "left",
        flexFlow : "column",
        width : "75%",
        height : "70%",
        marginTop : "20px"
    },
   fieldStyling : {
        width : "90%",
   },
   buttonStyles : {
        background : "#24819E",
        fontFamily : "Poppins",
        fontSize : "17px",
        marginTop : 30,
        width : "90%",
        fontWeight : 600,
        color : "#FFFFFF"
   }
  }));

export default LoginForm;
