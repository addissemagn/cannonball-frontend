import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as Cannon } from '../assets/cannon.svg';
import CannonImg from'../assets/cannon.png';


import style from '../styles/theme';

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: '20px',
  },
  paper: {
    padding: "40px 60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: 'white',
    borderRadius: "15px",
    // boxShadow: "0px 10px 40px 0px rgba(0, 0, 0, 0.1)",
    ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
      background: "rgba(255, 255, 255, 0.5)",
      marginTop: "40px",
      padding: '30px',
      boxShadow: "none",
    },
    '& svg' :{
      height: '120px',
      margin: 0,
    },
  },
  title: {
    fontFamily: "Aclonica",
    fontSize: "23px",
    textAlign: 'center',
    color: style.colors.black,
    marginTop: '30px',
    // ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
    //   fontSize: "24px",
    // },
  },
  desc: {
    fontFamily: "IBM Plex Sans",
    fontSize: '18px',
    marginTop: '20px',
    textAlign: 'center',
  }
}));

const Success = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <img  src={CannonImg} height="100px" alt="Cannon"/>
        <Typography component="h1" variant="h5" className={classes.title}>
            Your payment was successful!
        </Typography>
        <Typography component="h1" variant="h5" className={classes.desc}>
            Thank you for your payment!
            An automated receipt will be sent to your registered email.
        </Typography>
        {/* <Grid container spacing={2} className={classes.grid}>
            <span>Hello!</span>
        </Grid> */}
      </div>
    </Container>
  );
};

export default Success;
