import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from "@material-ui/core/Grid";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

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
    // background: "rgba(41, 17, 37, 1)",
    background: 'white',
    borderRadius: "15px",
    // boxShadow: "0px 10px 40px 0px rgba(0, 0, 0, 0.1)",
    ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
      background: "rgba(255, 255, 255, 0.5)",
      marginTop: "40px",
      padding: '30px',
      boxShadow: "none",
    },
  },
  title: {
    fontFamily: "Aclonica",
    fontSize: "25px",
    textAlign: 'center',
    color: style.colors.black,
    ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
      fontSize: "24px",
    },
  },
  accordion: {
    width: '100%',
    background: 'none',
    boxShadow: 'none',
    padding: '3px 0',
  },
  question: {
    fontFamily: "Aclonica",
    fontSize: "15px",
    color: style.colors.red,
    margin: 0,
    padding: 0,
  },
  answer: {
    color: style.colors.black,
    fontSize: "15px",
    padding: 0,
  }
}));

const Entry = ({ question, answer}) => {
    const classes = useStyles();

    return (
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          className={classes.question}
        >
          {question}
        </AccordionSummary>
        <AccordionDetails className={classes.answer}>{answer}</AccordionDetails>
      </Accordion>
    );
}


const EventInfo = () => {
  const classes = useStyles();

  const faqList = [
    {
      q: "With your $25 ticket, you get:",
      a: "With your $25 Cannonball Ticket, you get a gift card of equal value AND the chance to win awesome raffle prizes (over $3,000 worth of prizes to be won) and/or the Cannonball Photo Contest cash prize (up to $500)! So really, it isn’t costing you any money.",
    },
    {
      q: "A $25 gift card of your choice of Uber Eats, Netlify, or Apple",
      a: "No! The whole idea of Cannonball 2T1 is that it can be whatever you want! There will be games, good vibes and music, but we understand that zoom fatigue is real. If you don’t attend the call, you can still win raffle prizes/the Cannonball Photo Contest. Winners will be contacted by email, regardless of if they attend the call.",
    },
    {
      q: "Entered into a raffle contest for $3,000 worth of prizes",
      a: "Up to you! To fit with the choose your own adventure theme, feel free to come dressed however you wish! Whether it be in your finest outfit, your warmest PJs, or that halloween costume that you want to show off a bit more, everything is welcome! Don’t forget to submit a photo to the Cannonball Photo contest for a chance to win a $500 visa gift card!",
    },
    {
      q: "Ability to enter a Photo Contest for cash prizes up to $500",
      a: "Photo submission to the Cannonball Photo Contest will be open from noon to 10pm EST on January 16th. Photos will be judged by Skule’s very own: Mario Baker, Chief and Bnad. The photos will be judged on creativity and should showcase how you are spending your Cannonball 2T1 adventure. Winners will be announced at 10:30pm on the Cannonball Discord call. Winners will also be notified by email.",
    },
    {
      q: "Access to a Cannonball 2T1 call on January 16, when winnders will be announced!",
      a: "You will have the option to have it shipped to you (which we will cover the cost of) or arrange a time to pick it up from campus.",
    },
  ]


  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.title}>
            Choose Your Own Adventure
        </Typography>
        <Grid container spacing={2} className={classes.grid}>
            {faqList.map((faq) => (
                <Entry question={faq.q} answer={faq.a} />
            ))}
        </Grid>
      </div>
    </Container>
  );
};

export default EventInfo;
