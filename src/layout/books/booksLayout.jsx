import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import { Navigate } from 'react-router';
import "./booksLayout.css";

import Navbar from '../../components/navbar/navbar';
import CardsLayout from '../cardsLayout/cardsLayout';

const BooksLayout = () => {

  const isAuthenticated = useSelector((state) => state.authState.authState)

  console.log(isAuthenticated);

  useEffect(() => {
    //to do:
    //step1 : check if authenticated
    //step2 : if yes: call function for api call
    //step3 : if no: do nothing    

  },[isAuthenticated])
  
   
  return isAuthenticated ?
      <div className='booksLayoutContainer'>
          <div className="navbarContainer"><Navbar/></div>
          <div className="booksContainer"><CardsLayout/></div>
      </div>
        :
      <Navigate push to="/" />
};

export default BooksLayout;
