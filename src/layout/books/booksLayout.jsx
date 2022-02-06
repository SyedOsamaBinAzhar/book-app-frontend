import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import { Navigate } from 'react-router';
import "./booksLayout.css";
import axios from 'axios';

import Navbar from '../../components/navbar/navbar';
import CardsLayout from '../cardsLayout/cardsLayout';


const BooksLayout = () => {

  const [books, setBooks] = useState([]);

  //Consuming user sign in state from Redux. Could've been stored in local storage and fetched from there
  //but wanted to get hands on experience on Redux;
  const isAuthenticated = useSelector((state) => state.authState);

  const readBooks = async() => {

  try {
    // Make a request for books
    const books = await axios.get('http://localhost:8000/api/user/books');
    //set in local state
    setBooks(books.data);
  } catch (error) {
    alert(error);
  }
}

useEffect(() => {
  
  //api call
  readBooks();
  
}, []);


  //if user authenticated -> books page 
  //if not -> redirect to signup
  return isAuthenticated ? <div className='booksLayoutContainer'>
  <div className="navbarContainer"><Navbar/></div>
  <div className="booksContainer"><CardsLayout books = {books}/></div>
</div>
  :
<Navigate push to="/" />
}
export default BooksLayout;
