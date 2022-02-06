import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import createUser from "./createUser";
import { userAction } from '../../../actions/userAction';
import { authAction } from '../../../actions/authAction';


const SignupForm = () => {

    const classes = useStyles();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate();
    const dispatch = useDispatch();


    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const onFormSubmit = async(e) => {
        e.preventDefault()
        const userDetails = {
            name,
            email,
            password
        }
        

        //initiate request
        const user = await createUser(userDetails)

        //Destructuring:

        // const { data : { userId, usersName, usersEmail } } = user;
        // const {userId, usersName, usersEmail} = data;
        // console.log(userId, usersName, usersEmail);

        const { data } = user;

        if(data) {
            alert("signin successful");

            // set global state in redux for user
            dispatch(userAction(data));
            // set global state in redux for auth true/false
            dispatch(authAction());

            navigate(`/books`);
    
        } else {
            // dispatch(signoutAction());
            alert("Something Went Wrong, Please Try Again")
        }

    }
    return <form className={classes.formStyling} onSubmit={onFormSubmit}>
      
      <TextField 
        className = {classes.fieldStyling} 
        id="outlined-basic" 
        label="Enter Full Name" 
        variant="outlined" 
        margin='normal' 
        required
        onChange={nameHandler} 
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
        id="outlined-basic" 
        label="Enter Email" 
        variant="outlined" 
        required
        onChange={emailHandler} 
        margin='normal'
        type = "email"
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
        margin='normal'
        onChange={passwordHandler} 
        InputProps={{
            style : {
                fontSize : "15px",
                fontFamily: "Poppins",
                color : "#24819E"
            }
        }}
      />

      <Button variant="contained" className = {classes.buttonStyles} type = "submit"><p>Create Account</p></Button>

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

export default SignupForm;
