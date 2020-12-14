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
    ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
      background: "rgba(41, 17, 37, 0.5)",
      marginTop: "40px",
      padding: '30px',
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
  }
}));

const SignUp = ({ user, raffleParams, rafflePrizes, handleInputChange, handleRaffleChange, handleSubmit, fieldErrors }) => {
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
            Purchase Ticket
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextInput
                  required
                  name="firstName"
                  label="First Name"
                  value={user.firstName}
                  onChange={handleInputChange}
                />
                {fieldErrors.firstName && (<FormHelperText className={classes.helperRed}>{fieldErrors.firstName}</FormHelperText>)}
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextInput
                  required
                  name="lastName"
                  label="Last Name"
                  value={user.lastName}
                  onChange={handleInputChange}
                />
                {fieldErrors.lastName && (<FormHelperText className={classes.helperRed}>{fieldErrors.lastName}</FormHelperText>)}
              </Grid>
              {/* TODO: Add validation */}
              <Grid item xs={12} sm={12}>
                <TextInput
                  required
                  name="emailuoft"
                  label="uToronto Email"
                  value={user.emailuoft}
                  onChange={handleInputChange}
                />
                {fieldErrors.emailuoft && (<FormHelperText className={classes.helperRed}>{fieldErrors.emailuoft}</FormHelperText>)}
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextInput
                  required
                  name="email"
                  label="Preferred Email"
                  value={user.email}
                  onChange={handleInputChange}
                />
                {fieldErrors.email ? (<FormHelperText className={classes.helperRed}>{fieldErrors.email}</FormHelperText>)
                  : (<FormHelperText>Your gift card will be issued to this email.</FormHelperText>)}
              </Grid>
              {/* GIFT CARD */}
              <Grid item xs={12}>
                <InputLabel>Gift Card *</InputLabel>
                <Select
                  variant="outlined"
                  required
                  fullWidth
                  label="Gift Card"
                  name="gift"
                  value={user.gift}
                  onChange={handleInputChange}
                >
                  <MenuItem key="uberEats" value="uberEats">
                    Uber Eats
                  </MenuItem>
                  <MenuItem key="apple" value="apple">
                    Apple
                  </MenuItem>
                  <MenuItem key="netflix" value="netflix">
                    Netflix
                  </MenuItem>
                </Select>
                {fieldErrors.gift && (
                  <FormHelperText className={classes.helperRed}>
                    {fieldErrors.gift}
                  </FormHelperText>
                )}
              </Grid>
              {/* RAFFLE ITEMS */}
              <Grid item xs={12}>
                <FormControl
                  required
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">
                    Choose 3 Raffle Items
                  </FormLabel>
                  <FormGroup>
                    {rafflePrizes.map((prize) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            value={raffleParams[prize.name]}
                            checked={raffleParams[prize.name]}
                            onChange={handleRaffleChange}
                            name={prize.name}
                            key={prize.name}
                          />
                        }
                        key={prize.label}
                        label={prize.label}
                      />
                    ))}
                  </FormGroup>
                  {fieldErrors.raffle && (
                    <FormHelperText className={classes.helperRed}>
                      {fieldErrors.raffle}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              {/* RAFFLE ITEMS */}
              <Grid item xs={12}>
                <FormHelperText>
                  If you want to participate in Instagram giveaways:
                </FormHelperText>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={user.agreeMedia}
                      checked={user.agreeMedia}
                      name="agreeMedia"
                      onChange={handleInputChange}
                      key="agreeMedia"
                    />
                  }
                  // TODO: Is this really necessary if people would have to submit them anyway? Plus there could be other people in the photos
                  label="I grant Cannonball permission to post my images/videos to social media."
                />
              </Grid>
            </Grid>
            <Grid className={classes.button}>
              <Button
                text="Pay $25"
                onClick={handleSubmit}
                fullWidth
                icon={<IconStripe />}
              />
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
