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
        justifyContent: 'center',
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
        fontSize : "17px",
        color : "#24819E",

    }
  }));


export default Navbar;
