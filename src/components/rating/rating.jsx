import React, { useState } from 'react';
import { Rating } from '@mui/material';
import { Button, Box } from '@material-ui/core';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import writeComment from "./createComment";

const BookRating = ({bookId}) => {

    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
    const classes = useStyles();
    const user = useSelector((state) => state.userDetails.user);
    const {userId, userName} =  user;

    console.log(userId,userName);


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



    const onSubmitHandler = () => {
    const review = labels[hover !== -1 ? hover : value];

        const commentObj = {
            userId,
            userName,
            commentContent : review,
            bookId
        }
        console.log("review",commentObj);

        //create comment in db
        writeComment(commentObj)
    }
    return (
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
                flexFlow : "column",
                marginTop : 20
            }}
        >
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                style = {{color: "white", fontSize: 30}}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarBorderPurple500OutlinedIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box className={classes.ratingLabel} sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}

        <Button onClick = {onSubmitHandler} className={classes.submitBtn}>SUBMIT</Button>

        </Box>
    );;
};


const useStyles = makeStyles({
    ratingLabel: {
        color: "white", fontSize: 20, fontFamily: "Poppins", fontWeight: 600, marginTop : 20,
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
})
export default BookRating;



