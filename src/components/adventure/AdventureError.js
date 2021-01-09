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

  button: {
      width: '100%',
      margin: '10px 0',
      textAlign: 'center',
  }
}));

const AdventureError = ({ error, goToSuccess, goToStart }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.outer}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Oh no! Something went wrong.
          </Typography>
          <Grid container spacing={3} className={classes.grid}>
            <span className={classes.prompt}>
              It's our unlucky day but that doesn't mean it has to be yours! <br /><br />

              Here's your next choice: <br /><br />
            </span>
            <Grid className={classes.button}>
                <Button text="Get your extra entry on us!" onClick={() => goToSuccess()} fullWidth />
            </Grid>
            <Grid className={classes.button}>
                <Button text="Re-embark on the adventure!" onClick={() => goToStart()} fullWidth/>
            </Grid>
            <span className={classes.prompt}>
              <br/>
              To prevent this from happening to someone else, please message us <b>"Error from step {error.prevStep} to step {error.currStep}"</b> at <a href="mailto:cannonball@skule.ca">cannonball@skule.ca</a> or <a href={process.env.REACT_APP_INSTAGRAM}>@cannonball2t1</a>
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

export default AdventureError;
