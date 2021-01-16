import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";

import { ReactComponent as IconStripe } from '../assets/icons/stripe.svg';
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import style from '../styles/theme';

const useStyles = makeStyles((theme) => ({
  container: {
    ["@media (min-width:513px)"]: { // eslint-disable-line no-useless-computed-key
      marginRight: 0,
      paddingRight: '48px',
      paddingLeft: '48px',
    },
  },
  paper: {
    padding: "40px 60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(41, 17, 37, 1)",
    borderRadius: "15px",
    // boxShadow: "0px 10px 40px 0px rgba(0, 0, 0, 0.1)",
    // this is def getting hacky :(
    ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
      background: "rgba(41, 17, 37, 0.5)",
      position: 'absolute',
      top: 200,
      left:0,
      margin: '10px',
      padding: '30px',
      paddingBottom: '100px',
      boxShadow: "none",
    },
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    fontFamily: "Aclonica",
    fontSize: "30px",
    textAlign: 'center',
    ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
      fontSize: "25px",
    },
  },
  button: {
    textAlign: 'center',
    paddingTop: '20px',
  },
  helperRed: {
    color: style.colors.red, // TODO: check if contrast is okay
  },
  underlined: {
    '&:hover': {
      borderBottom: `1px dotted #fff`,
    }
  }
}));

const TicketSalesClosed = ({}) => {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
    typography: {
      fontFamily: "IBM Plex Sans",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Ticket sales are now closed!
          </Typography>
          <div className="footer">
            <span>
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
    </ThemeProvider>
  );
};

export default TicketSalesClosed;
