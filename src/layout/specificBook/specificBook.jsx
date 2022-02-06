import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import Heading from '../../components/reusable/heading/heading';
import Paragraph from '../../components/reusable/paragraph/paragraph';
import "./specificBook.css";
import bookCover from "../../Assets/books/1.jpg"
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider'
import { makeStyles } from '@material-ui/core/styles';

const SpecificBook = () => {

    const classes = useStyles();


    function valuetext(value) {
        console.log(value)
      }

  return <div className='container'>
      <div className="navbarCont"><Navbar/></div>
      <div className="contentCont">
          <div className="imageAndCommentCont">
              <img src={bookCover} className = "bookCover"/>

              <div>
                  <form className = "flex-col" style = {{marginTop : 20}}>
                        <Heading
                            value = "How Much Do You Like This Book?"
                            weight = {900}
                            fontFamily = "Poppins, sans-serif"
                            fontSize = {25}
                            color = "white"
                            lineHeight = {1.5}
                        />
                        <Slider
                        aria-label="Small steps"
                        defaultValue={0.00000005}
                        getAriaValueText={valuetext}
                        step={1}
                        marks
                        min={1}
                        max={5}
                        valueLabelDisplay="auto"
                        valueLabelDisplay="on"
                        
                        style ={{width : 250, marginTop : 40, color : "#24819E"}}
                    />
                  
                    <Button type = "submit" className = {classes.submitBtn}>SUBMIT</Button>
                  </form>
              </div>
          </div>
          <div className="bookDetailsCont">
              <div className="bookDetails">
                <Heading 
                value = "Harry Potter And The Chamber Of Secrets." 
                weight = {900}
                fontFamily = "Poppins, sans-serif"
                fontSize = {30}
                // color = "#24819E"
                color = "#F8F8F8"
                lineHeight = {1.5}
                />

                <Paragraph
                value = "lorem ipsum lorem lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum" 
                weight = {400}
                fontFamily = "Poppins, sans-serif"
                fontSize = {14}
                color = "white"
                textAlign = "left"
                lineHeight = {2}
                />

                <Paragraph
                value = "Author : Osama Azhar" 
                weight = {400}
                fontFamily = "Poppins, sans-serif"
                fontSize = {14}
                color = "white"
                textAlign = "left"
                lineHeight = {2}
                />

                <Paragraph
                value = "Posted At : 22/22/22" 
                weight = {400}
                fontFamily = "Poppins, sans-serif"
                fontSize = {14}
                color = "white"
                textAlign = "left"
                lineHeight = {2}
                />

                <Paragraph
                value = "Price : $20" 
                weight = {400}
                fontFamily = "Poppins, sans-serif"
                fontSize = {14}
                color = "white"
                textAlign = "left"
                lineHeight = {2}
                />

                <Paragraph
                value = "Rating 5/5" 
                weight = {400}
                fontFamily = "Poppins, sans-serif"
                fontSize = {14}
                color = "white"
                textAlign = "left"
                lineHeight = {2}
                />

                <Button className = {classes.requestYourBookBtn}>Request Your Book Now!</Button>
              </div>
          </div>
      </div>
  </div>;
};

const useStyles = makeStyles({
    requestYourBookBtn : {
        fontSize : "15px",
        background : "#F8F8F8",
        color : "black", 
        fontWeight : 800, 
        letterSpacing: 1, 
        fontFamily : "Poppins", 
        marginTop : 20,
        marginBottom : 20,
        paddingLeft : 30,
        paddingRight : 30,
        paddingTop : 15,
        paddingBottom : 15,
    },
    submitBtn : {
        fontSize : "15px",
        // background: "#24819E",
        background : "#F8F8F8",
        color : "black", 
        fontWeight : 800, 
        letterSpacing: 1, 
        fontFamily : "Poppins", 
        marginTop : 20,
        marginBottom : 20,
        paddingLeft : 40,
        paddingRight : 40,
        paddingTop : 10,
        paddingBottom : 10,
    }
})

export default SpecificBook;
