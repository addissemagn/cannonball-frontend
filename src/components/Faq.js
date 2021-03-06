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
  outer: {
    ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
      position: 'absolute',
      top: 200,
      left:0,
      paddingBottom: '100px',
    },
  },
  paper: {
    padding: "40px 60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // background: "rgba(41, 17, 37, 1)",
    background: 'white',
    borderRadius: "15px",
    ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
      background: "rgba(255, 255, 255, 0.5)",
      margin: '10px',
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
  },
  underlined: {
    '&:hover': {
      borderBottom: `1px dotted #000`,
    }
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


const Faq = ({ faqList }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.outer}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={2} className={classes.grid}>
              {faqList.map((faq) => (
                  <Entry question={faq.q} answer={faq.a} />
              ))}
          </Grid>
        </div>
        <div className="footer">
          <span className="black">
            Questions? Well, we've got answers at{" "}
            <a
              className={classes.underlined}
              href="mailto:cannonball@skule.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              cannonball@skule.ca
            </a>
            .
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Faq;
