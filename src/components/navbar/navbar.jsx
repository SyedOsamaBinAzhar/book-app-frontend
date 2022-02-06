import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { signoutAction } from '../../actions/authAction';
import {clearUserDetailsAction} from "../../actions/userAction";

const Navbar = () => {

    const classes = useStyles();

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const onBooksClickHandler = () => {
      navigate(`/books`);
    }

    const onLogoutClickHandler = () => {
      //set global auth state to false
      dispatch(clearUserDetailsAction())
      dispatch(signoutAction());
    }

  return <div className = {classes.root}>
      <div className = {classes.navItemStyles} onClick = {onBooksClickHandler}>Books</div>
      <div className = {classes.navItemStyles} onClick = {onLogoutClickHandler}>Logout</div>
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
        fontWeight : 600,
        cursor : 'pointer'
    }
  }));


export default Navbar;
