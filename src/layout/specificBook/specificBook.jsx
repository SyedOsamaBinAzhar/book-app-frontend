import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Heading from '../../components/reusable/heading/heading';
import "./specificBook.css";
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RequestModal from './modal';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import BookRating from '../../components/rating/rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';

const SpecificBook = () => {

    const classes = useStyles();
    const [modalState, setModalState] = useState(false);
    const [book, setBook] = useState({});
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const isAuthenticated = useSelector((state) => state.authState);

    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
      };
      

    const params = useParams();

    useEffect(() => {
        if (params.id) {
            getBookDetails();
        }
    }, [params.id]);


    const getBookDetails = async () => {
        const bookDetails = await axios.get(`http://localhost:8000/api/user/books/${params.id}`);
        setBook(bookDetails.data);
    }

    function valuetext(e, value) {
        console.log(e.target);
        console.log(value)
    }

    const handleClick = () => {
        setModalState(!modalState)
    }


    return isAuthenticated ? <div className='container'>
        <div className="navbarCont"><Navbar /></div>
        <div className="contentCont">
            <div className="imageAndCommentCont">
                <img src={book.bookCover} alt="" className="bookCover" />

                <div>
                    <form className="flex-col" style={{ marginTop: 20 }}>
                        <Heading
                            value="How Much Do You Like This Book?"
                            weight={900}
                            fontFamily="Poppins, sans-serif"
                            fontSize={25}
                            color="white"
                            lineHeight={1.5}
                        />
                        
                        <BookRating/>

                        <Button type="submit" className={classes.submitBtn}>SUBMIT</Button>
                    </form>
                </div>
            </div>
            <div className="bookDetailsCont">
                <div className="bookDetails">
                    <Heading
                        value={book.bookName}
                        weight={900}
                        fontFamily="Poppins, sans-serif"
                        fontSize={30}
                        color="#F8F8F8"
                        lineHeight={1.5}
                    />

                    <p className={classes.authorStyles}>Author : {book.bookAuthor}</p>
                    <p className={classes.paraStyles}>Description : {book.bookDescription}</p>
                    <p className={classes.paraStyles}>Price: {book.bookPrice}</p>


                    <Button
                        className={classes.requestYourBookBtn}
                        onClick={handleClick}
                    >
                        Request Your Book Now!
                    </Button>
                </div>
            </div>
        </div>
        <RequestModal modalState={modalState} setModalState={setModalState} book={book} />
    </div>
        :
        <Navigate push to="/" />
};

const useStyles = makeStyles({
    requestYourBookBtn: {
        fontSize: "15px",
        background: "#F8F8F8",
        color: "black",
        fontWeight: 800,
        letterSpacing: 1,
        fontFamily: "Poppins",
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
    },
    submitBtn: {
        fontSize: "15px",
        background: "#F8F8F8",
        color: "black",
        fontWeight: 800,
        letterSpacing: 1,
        fontFamily: "Poppins",
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10,
    },
    paraStyles: {
        color: "#F8F8F8",
        fontFamily: "Poppins",
        letterSpacing: 0.5,
        lineHeight: 2,
        marginTop: 10,
        fontSize: 15,
        fontWeight: 600,
    },
    authorStyles: {
        color: "darkgrey",
        fontFamily: "Poppins",
        letterSpacing: 0.5,
        lineHeight: 1,
        fontWeight: 800,
        marginTop: 10,
        fontSize: 15

    }
})

export default SpecificBook;
