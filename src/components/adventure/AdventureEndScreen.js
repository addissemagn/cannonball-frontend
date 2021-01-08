import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import TextInput from "../TextInput";
import Button from "../Button";
import style from '../../styles/theme';

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: '20px',
    paddingBottom: '20px',
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
      background: "rgba(255, 255, 255, 0.8)",
      margin: '10px',
      padding: '30px',
      boxShadow: "none",
    },
  },
  underlined: {
    '&:hover': {
      borderBottom: `1px dotted #000`,
    }
  },
  prompt: {
    fontFamily: "IBM Plex Sans",
    fontSize: '17px',
    textAlign: 'center',
    '& a': {
      borderBottom: '1px dotted #000',
      fontWeight: 'bold',
    }
  },
  title: {
    fontFamily: "Aclonica",
    fontSize: "23px",
    textAlign: 'center',
    color: style.colors.black,
    marginBottom: '10px',
    // ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
    //   fontSize: "24px",
    // },
  },
}));

const AdventureEndScreen = ({ email }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.outer}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Success!
          </Typography>
          <Grid container spacing={3} className={classes.grid}>
            <span className={classes.prompt}>
              The ticket by the email { email } now has an extra entry. This is a game of luck and your odds are looking good! Now sit
              back, relax, and see you on January 16th. <br /><br />In the meantime, follow us on{" "}
              <a
                href={process.env.REACT_APP_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >Instagram</a>
              {" "}to stay updated.
            </span>
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

export default AdventureEndScreen;
