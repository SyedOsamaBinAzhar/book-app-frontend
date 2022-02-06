import React, { useState } from 'react';
import { Rating } from '@mui/material';
import Box from '@mui/material/Box';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import { makeStyles } from '@material-ui/core/styles';

const BookRating = () => {

    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
    const classes = useStyles();

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

    const review = labels[hover !== -1 ? hover : value];
    return (
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
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
                <Box className={classes.ratingLabel} sx={{ ml: 2 }}>{review}</Box>
            )}
        </Box>
    );;
};


const useStyles = makeStyles({
    ratingLabel: {
        color: "white", fontSize: 20, fontFamily: "Poppins", fontWeight: 600
    },
})
export default BookRating;



