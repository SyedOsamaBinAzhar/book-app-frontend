import React from 'react';
import "./cardsLayout.css";
import Heading from "../../components/reusable/heading/heading";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router';

const useStyles = makeStyles({
    root: {
        maxWidth: 305,
        height: 580,
        borderRadius : 15,
        boxShadow: "0px 6px 9px rgba(0, 0, 0, 0.29)",
    },
    media: {
        height: 240,
    },
    cardTitle: {
        color: "#24819E",
        fontFamily: "Poppins",
        letterSpacing: 0.5,
        fontSize: 18,
    },
    authorStyles: {
        color: "grey",
        fontFamily: "Poppins",
        letterSpacing: 0.5,
        lineHeight: 1,
        fontWeight: 600,
        marginTop: 10

    },
    paraStyles: {
        fontFamily: "Poppins",
        letterSpacing: 0.5,
        lineHeight: 1.5,
        marginTop: 10
    },
    learnMoreBtn: {
        color: "white",
        fontFamily: "Poppins",
        background: "#24819E",
        fontWeight: 500,
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 13,
    }
});

const CardsLayout = ({ books }) => {

    const classes = useStyles();

    const navigate = useNavigate();

    const handleShowMore = (id) => {
        if(id) {
            navigate(`/book/${id}`);
        }
    }


    return <div className='cardsLayoutCont'>
        <div className="headingCont flex">
            <Heading
                value="Check Our Books Out!"
                weight={900}
                fontFamily="Poppins, sans-serif"
                fontSize={35}
                color="white"
            />
        </div>
        <div className="booksCont">
            {
                books.map((book, index) => <Card key ={index} className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={book.bookCover}
                  />
                  <CardContent>
                      <Heading
                      value = {book.bookName}
                      fontFamily = "Poppins"
                      color="#24819E"
                      fontWeight = {700}
                      fontSize = {25}
                      />
                    <p className={classes.authorStyles}>Author : {book.bookAuthor}</p>
                    <p className={classes.paraStyles}>Description : {book.bookDescription}</p>
                    <p className={classes.paraStyles}>Price: {book.bookPrice}</p>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button 
                    className = {classes.learnMoreBtn} 
                    id={book._id}
                    onClick = {() => handleShowMore(book._id)}
                    >
                        Show More
                    </Button>
                </CardActions>
              </Card>)
            }
        </div>
    </div>;
};

export default CardsLayout;
