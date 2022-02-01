import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const LoginForm = () => {

 const classes = useStyles();

 return <form className={classes.formStyling}>
        
      <TextField 
        className = {classes.fieldStyling} 
        id="outlined-basic" 
        label="Enter Email" 
        variant="outlined" 
        required m
        argin='normal'
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
        InputProps={{
            style : {
                fontSize : "15px",
                fontFamily: "Poppins",
                color : "#24819E"
            }
        }}
      />

      <Button variant="contained" className = {classes.buttonStyles}><p>Login</p></Button>

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
