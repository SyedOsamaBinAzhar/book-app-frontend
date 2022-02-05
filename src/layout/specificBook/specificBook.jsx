import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import Heading from '../../components/reusable/heading/heading';
import Paragraph from '../../components/reusable/paragraph/paragraph';
import "./specificBook.css";
import bookCover from "../../Assets/books/1.jpg"
import { Button } from '@material-ui/core';

const SpecificBook = () => {

    useEffect(() => {
    
    }, []);
    
  return <div className='container'>
      <div className="navbarCont"><Navbar/></div>
      <div className="contentCont">
          <div className="imageAndCommentCont">
              <img src={bookCover} className = "bookCover"/>
          </div>
          <div className="bookDetailsCont">
              <div className="bookDetails">
                <Heading 
                value = "Harry Potter And The Chamber Of Secrets." 
                weight = {900}
                fontFamily = "Poppins, sans-serif"
                fontSize = {25}
                color = "black"
                lineHeight = {1.5}
                />

                <Paragraph
                value = "lorem ipsum lorem lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum" 
                weight = {400}
                fontFamily = "Poppins, sans-serif"
                fontSize = {14}
                color = "red"
                textAlign = "left"
                lineHeight = {2}
                />

                <Paragraph
                value = "Author : Osama Azhar" 
                weight = {400}
                fontFamily = "Poppins, sans-serif"
                fontSize = {14}
                color = "red"
                textAlign = "left"
                lineHeight = {2}
                />

                <Paragraph
                value = "Posted At : 22/22/22" 
                weight = {400}
                fontFamily = "Poppins, sans-serif"
                fontSize = {14}
                color = "red"
                textAlign = "left"
                lineHeight = {2}
                />

                <Paragraph
                value = "Price : $20" 
                weight = {400}
                fontFamily = "Poppins, sans-serif"
                fontSize = {14}
                color = "red"
                textAlign = "left"
                lineHeight = {2}
                />

                <Paragraph
                value = "Rating 5/5" 
                weight = {400}
                fontFamily = "Poppins, sans-serif"
                fontSize = {14}
                color = "red"
                textAlign = "left"
                lineHeight = {2}
                />

              <Button variant = "contained" style = {{marginTop : 10}}>Request For Your Book Now!</Button>


              </div>
          </div>
      </div>
  </div>;
};

export default SpecificBook;
