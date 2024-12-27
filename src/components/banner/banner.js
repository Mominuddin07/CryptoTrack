// banner.js
import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Carousel from "./carousel"; // Use the correct name, capital "Carousel"

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url('/banner2.jpg')", // Corrected path for the public folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  },
  bannerContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "center",
    textAlign: "center",
    color: "white",
  },
  tagline:{
    display:'flex',
    height:'40%',
    flexDirection:'column',
    justifyContent:"center",
    textAlign:"center"
  }
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <h1>Welcome to CryptoTracker</h1>
          <p>Track your favorite cryptocurrencies with ease!</p>
         
        </div>
        <Carousel /> {/* Use capital "Carousel" here */}
      </Container>
    </div>
  );
};

export default Banner;
