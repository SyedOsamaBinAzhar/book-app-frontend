import React from 'react';
import "./booksLayout.css";

import Navbar from '../../components/navbar/navbar';

const BooksLayout = () => {
  return <div className='booksLayoutContainer'>
      <div className="navbarContainer"><Navbar/></div>
      <div className="booksContainer"></div>
  </div>;
};

export default BooksLayout;
