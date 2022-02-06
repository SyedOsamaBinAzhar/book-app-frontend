import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Navbar = () => {

    const classes = useStyles();

  return <div className = {classes.root}>
      <div className = {classes.navItemStyles}>Books</div>
      <div className = {classes.navItemStyles}>Logout</div>
  </div>;
};


const useStyles = makeStyles((theme) => ({

    root : {
        display : "flex",
        alignItems : "center",
        flexFlow : "row",
        width : "15%",
        justifyContent: 'space-between',
        position : "absolute",
        right : "5%",
        top : "5%"
    },
    navItemStyles : {
        fontFamily : "Poppins",
        fontSize : "20px",
        color : "white",
        fontWeight : 600
    }
  }));


export default Navbar;
