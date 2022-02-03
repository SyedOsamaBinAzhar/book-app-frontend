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
import Typography from '@material-ui/core/Typography';
import One from "../../Assets/books/1.jpg";

const useStyles = makeStyles({
    root: {
        maxWidth: 305,
        height: 480,
    },
    media: {
        height: 180,
        //   backgroundSize : "100% 100%, cover",
    },
    cardTitle: {
        color: "#24819E",
        fontFamily: "Poppins",
        letterSpacing: 0.5,
        fontSize: 18,
    },
    authorStyles: {
        color: "",
        fontFamily: "Poppins",
        letterSpacing: 0.5,
        lineHeight: 1,
        fontWeight: 700,
        marginTop: 10

    },
    paraStyles: {
        color: "",
        fontFamily: "Poppins",
        letterSpacing: 0.5,
        lineHeight: 1,
        marginTop: 10
    },
    learnMoreBtn: {
        color: "white",
        fontFamily: "Poppins",
        background: "#24819E",
        fontWeight: 500,
        paddingLeft: 40,
        paddingRight: 40,
    }
});

const CardsLayout = () => {

    const classes = useStyles();

    return <div className='cardsLayoutCont'>
        <div className="headingCont flex">
            <Heading
                value="Check Our Books Out!"
                weight={900}
                fontFamily="Poppins, sans-serif"
                fontSize={35}
                // color = "#24819E"
                color="white"

            />
        </div>
        <div className="booksCont">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={One}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <h4 className={classes.cardTitle}>Harry Potter The Prisoner Of Askaban.</h4>
                        <p className={classes.authorStyles}>Author : Osama Azhar</p>
                        <p className={classes.paraStyles}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit asperiores saepe voluptates provident maiores aliquam quo, quia cumque rem optio? Id, ab at incidunt fuga tempora eos quasi molestiae dolor?</p>
                        <p className={classes.paraStyles}>Availability : <span style={{ color: "#24819E" }}>Available</span></p>
                        {/* <p>Posted At: 20th/Jan/2021</p> */}


                    </CardContent>
                </CardActionArea>
                <CardActions stlye={{ border: "1px solid black" }}>

                    <Button variant="contained" className={classes.learnMoreBtn}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={One}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <h4 className={classes.cardTitle}>Harry Potter The Prisoner Of Askaban.</h4>
                        <p className={classes.authorStyles}>Author : Osama Azhar</p>
                        <p className={classes.paraStyles}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit asperiores saepe voluptates provident maiores aliquam quo, quia cumque rem optio? Id, ab at incidunt fuga tempora eos quasi molestiae dolor?</p>
                        <p className={classes.paraStyles}>Availability : Available</p>
                        {/* <p>Posted At: 20th/Jan/2021</p> */}


                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={One}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <h4 className={classes.cardTitle}>Harry Potter The Prisoner Of Askaban.</h4>
                        <p className={classes.authorStyles}>Author : Osama Azhar</p>
                        <p className={classes.paraStyles}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit asperiores saepe voluptates provident maiores aliquam quo, quia cumque rem optio? Id, ab at incidunt fuga tempora eos quasi molestiae dolor?</p>
                        <p className={classes.paraStyles}>Availability : Available</p>
                        {/* <p>Posted At: 20th/Jan/2021</p> */}


                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={One}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <h4 className={classes.cardTitle}>Harry Potter The Prisoner Of Askaban.</h4>
                        <p className={classes.authorStyles}>Author : Osama Azhar</p>
                        <p className={classes.paraStyles}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit asperiores saepe voluptates provident maiores aliquam quo, quia cumque rem optio? Id, ab at incidunt fuga tempora eos quasi molestiae dolor?</p>
                        <p className={classes.paraStyles}>Availability : Available</p>
                        {/* <p>Posted At: 20th/Jan/2021</p> */}


                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={One}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <h4 className={classes.cardTitle}>Harry Potter The Prisoner Of Askaban.</h4>
                        <p className={classes.authorStyles}>Author : Osama Azhar</p>
                        <p className={classes.paraStyles}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit asperiores saepe voluptates provident maiores aliquam quo, quia cumque rem optio? Id, ab at incidunt fuga tempora eos quasi molestiae dolor?</p>
                        <p className={classes.paraStyles}>Availability : Available</p>
                        {/* <p>Posted At: 20th/Jan/2021</p> */}


                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    </div>;
};

export default CardsLayout;
