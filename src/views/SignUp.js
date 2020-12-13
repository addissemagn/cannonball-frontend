import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import TextInput from '../components/TextInput';
import Button from '../components/Button';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '40px 60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    boxShadow: '0px 10px 40px 0px rgba(0, 0, 0, 0.1)',
    ['@media (max-width:512px)']: { // eslint-disable-line no-useless-computed-key
      background: 'none',
      padding: '0px',
      boxShadow: 'none',
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    fontFamily: 'Aclonica',
    fontSize: '30px',
  },
}));

const SignUp = ({ user, handleInputChange, handleSubmit, fieldErrors }) => {
    const classes = useStyles();
    const theme = createMuiTheme({
        palette: {
          type: 'dark',
        },
        typography: {
          fontFamily: 'IBM Plex Sans',
        }
    });

    const rafflePrizes = [
      { label: '$200 Donation', name: 'donation'},
      { label: '$100 Steam Gift Card', name: 'steam'},
      { label: '$100 Amazon Gift Card', name: 'etsy'},
      { label: '$100 Etsy Gift Card', name: 'amazon'},
    ];

    const raffleInitialState = {};
    rafflePrizes.forEach((prize) => (
      raffleInitialState[prize.name] = false
    ));

    const [raffle, setRaffle] = useState(raffleInitialState);

    const handleChange = (event) => {
      const updateRaffle = { ...raffle, [event.target.name]: event.target.checked };
      setRaffle(updateRaffle);
      handleInputChange({ target: { name: 'raffle', value: updateRaffle } });
    };

    const TextField = ({ name, label, helperText }) => {
      let error = false;

      if(fieldErrors[name]) {
        helperText = fieldErrors[name];
        error = true
      };

      return (
        <Grid item xs={12} sm={12}>
          <TextInput required name={name} label={label} value={user[name]} onChange={handleInputChange}/>
          {helperText && (<FormHelperText className={error ? classes.helperRed : '' }>{helperText}</FormHelperText>)}
        </Grid>
      )
    };

    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
            <Typography component="h1" variant="h5" className={classes.title}>
                Purchase Ticket
            </Typography>
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                <TextField name="firstName" label="First Name" />
                <TextField name="lastName" label="Last Name" />
                <TextField name="emailuoft" label="UofT Email" /> {/* TODO: Add validation */}
                <TextField name="email" label="Preferred Email" helperText="Your gift card will be issued to this email." />

                {/* GIFT CARD */}
                <Grid item xs={12}>
                    <InputLabel>Gift Card</InputLabel>
                    <Select variant="outlined" required fullWidth label="Gift Card" name="gift" value={user.gift} onChange={handleInputChange}>
                    <MenuItem value="uberEats">Uber Eats</MenuItem>
                    <MenuItem value="apple">Apple</MenuItem>
                    <MenuItem value="netflix">Netflix</MenuItem>
                    </Select>
                    {fieldErrors.gift && <FormHelperText className={classes.helperRed}>{fieldErrors.gift}</FormHelperText>}
                </Grid>

                {/* RAFFLE ITEMS */}
                <Grid item xs={12}>
                    <FormControl required component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Choose 3 Raffle Items</FormLabel>
                    <FormGroup>
                        {rafflePrizes.map((prize) => (
                        <FormControlLabel
                            control={
                              <Checkbox value={raffle[prize.name]} checked={raffle[prize.name]} onChange={handleChange} name={prize.name} />
                            }
                            label={prize.label}
                        />
                        ))}
                    </FormGroup>
                    {fieldErrors.raffle && <FormHelperText className={classes.helperRed}>{fieldErrors.raffle}</FormHelperText>}
                    </FormControl>
                </Grid>

                {/* RAFFLE ITEMS */}
                <Grid item xs={12}>
                    <FormControlLabel
                    control={<Checkbox value={user.agreeMedia} checked={user.agreeMedia} name="agreeMedia" onChange={handleInputChange} />}
                    label="I give permission to post my photos to social media."
                    />
                </Grid>

                </Grid>
                <Grid className={classes.button}>
                <Button text="Purchase" onClick={handleSubmit} />
                </Grid>
            </form>
            </div>
        </Container>
      </ThemeProvider>
    );
  }

export default SignUp;
