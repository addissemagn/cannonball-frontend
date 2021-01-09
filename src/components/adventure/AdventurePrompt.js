import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import CannonKaboomImg from'../../assets/cannon/cannon-kaboom.png';
import style from '../../styles/theme';

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: '20px',
    color: (props) => props.failure ? 'white' : 'black',
  },
  flexEnd: {
    width: '100%',
    marginBottom: '10px',
  },
  gridRightAlign: {
    margin: 0,
    width: '100%',
    marginBottom: '15px',
    float:'right',
  },
  optionContainer: {
    marginTop: '30px',
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
    background: (props) => props.failure ? style.colors.lightPurple : 'white',
    borderRadius: "15px",
    ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
      background: "rgba(255, 255, 255, 0.8)",
      margin: '10px',
      padding: '40px',
      boxShadow: "none",
    },
  },
  title: {
    fontFamily: "Aclonica",
    fontSize: "28px",
    textAlign: 'center',
    color: style.colors.red,
    marginTop: '15px',
    marginBottom: '15px',
    ["@media (max-width:512px)"]: { // eslint-disable-line no-useless-computed-key
      fontSize: "26px",
    },
  },
  titleStatus: {
    fontFamily: "Aclonica",
    fontSize: "24px",
    textAlign: 'center',
    color: (props) => props.failure ? style.colors.white : style.colors.black,
    margin: '10px 0',
    width: '100%',
  },
  underlined: {
    '&:hover': {
      borderBottom: `1px dotted #000`,
    }
  },
  prompt: {
    fontFamily: "IBM Plex Sans",
    fontSize: '18px',
    color: (props) => props.failure ? 'white' : 'black',
    '& a': {
      borderBottom: '1px dotted #000',
      fontWeight: 'bold',
    }
  },
  option: {
    // background: style.colors.red,
    // fontFamily: "Aclonica",
    fontFamily: "IBM Plex Sans",
    background: (props) => props.icon ? style.colors.green : style.colors.white,
    // border: (props) => props.border ? '1px solid black' : '',
    color: style.colors.white,
    cursor: 'pointer',
    margin: '5px 0px',
    borderRadius: "10px",
    fontSize: '17px',
    width: '100%',
    textAlign: (props) => props.icon ? 'center' : 'left',
  },
  icon: {
    textAlign: 'left',
    marginLeft: '-13px', // don't come for me css gods
    marginBottom: '5px',
    cursor: 'pointer',
    color: (props) => props.failure ? 'white' : 'black',
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  button: {
    textAlign: 'center',
    paddingTop: '20px',
  },
  buttonConatiner: {
    padding: 0,
    margin: 0,
    marginTop: '20px',
  },
  helperRed: {
    color: style.colors.red, // TODO: check if contrast is okay
  },
  switch: {
    marginTop: '10px',
    marginBottom: '0px',
  },
  switchRight: {
    marginBottom: '0px',
    float: 'right',
    // todo: at this point im just surrendering
    marginRight:'-10px',
    marginTop: '-10px',
  },
  formControlLabel: {
    fontFamily: "IBM Plex Sans",
    fontSize: '17px',
    color: (props) => props.failure ? 'white' : 'black',
  },
  img: {
    textAlign: 'center',
    alignItems: 'center',
  }
}));

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 38,
    height: 22,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 0,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: style.colors.green,
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: style.colors.green,
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 23,
    height: 23,
  },
  track: {
    borderRadius: 23 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const Option = ({ text, icon, onClick }) => {
    const classes = useStyles({ icon: icon === undefined});

    return (
      <Grid item xs={12} className={classes.option} onClick={onClick}>
        <span
          className={classes.prompt}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {icon}
      </Grid>
    );
}


const AdventurePrompt = ({
  adventureList,
  step,
  changeStep,
  goBack,
  user,
  fieldErrors,
  handleInputChange,
  handleSubmit,
  handleStartOver,
  soundOn,
  handleSoundToggle,
}) => {
  const classes = useStyles({ failure: adventureList[step].status === "failure"});

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.outer}>
        <div className={classes.paper}>
          {step === "0" && (
            <Typography component="h1" variant="h5" className={classes.title}>
              Choose Your Own Adventure
            </Typography>
          )}
          {step !== "0" && (
            <div className={classes.flexEnd}>
              <span onClick={() => goBack()} className={classes.icon}>
                <ArrowBackIcon fontSize="small" />
              </span>
              <FormControlLabel
                control={
                  <IOSSwitch
                    checked={soundOn}
                    onChange={handleSoundToggle}
                    name="checkedB"
                  />
                }
                label={
                  <Typography className={classes.formControlLabel}>
                    Music
                  </Typography>
                }
                className={classes.switchRight}
              />
            </div>
          )}
          <Grid container spacing={3} className={classes.grid}>
            {!adventureList[step].status && (
              <span
                className={classes.prompt}
                dangerouslySetInnerHTML={{ __html: adventureList[step].prompt }}
              />
            )}
          </Grid>
          <Grid container spacing={3} className={classes.optionContainer}>
            {adventureList[step].options &&
              adventureList[step].options.map((option) => (
                <Option
                  text={option.text}
                  onClick={() => changeStep(option.goTo)}
                  key={option.text}
                />
              ))}
          </Grid>
          {step === "0" && (
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={soundOn}
                  onChange={handleSoundToggle}
                  name="checkedB"
                />
              }
              label={
                // eslint-disable-next-line jsx-a11y/accessible-emoji
                <Typography className={classes.formControlLabel}>
                  Mood Music ✨
                </Typography>
              }
              className={classes.switch}
            />
          )}
          {adventureList[step].status === "success" && (
            <form
              className={classes.form}
              noValidate
              name="raffleEntry"
              onSubmit={handleSubmit}
            >
              <Grid container spacing={3}>
                <Typography component="h1" variant="h5" className={classes.titleStatus}>
                  Congratulations!
                </Typography>
                <Grid item xs={12} className={classes.prompt}>
                  {adventureList[step].prompt}
                </Grid>
                <Grid item xs={12} className={classes.img}>
                  <img src={CannonKaboomImg} width="200px" alt="Cannon" />
                </Grid>
                <Grid item xs={12} className={classes.prompt}>
                  Please enter the utoronto email associated with your ticket to
                  have your raffle choices doubled! <br />
                  <br />
                  No ticket? No problem. First, enter your utoronto email so we
                  know you've completed this. Then, get your ticket at{" "}
                  <a href="/ticket">cannonball.skule.ca/ticket</a>!
                </Grid>
                <Grid item xs={12}>
                  <TextInput
                    required
                    name="emailuoft"
                    label="uToronto Email"
                    value={user.emailuoft}
                    onChange={handleInputChange}
                  />
                  {fieldErrors.emailuoft && (
                    <FormHelperText className={classes.helperRed}>
                      {fieldErrors.emailuoft}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
              <Grid className={classes.button}>
                <Button text="Submit 🎉" onClick={handleSubmit} fullWidth />
              </Grid>
            </form>
          )}
          {adventureList[step].status === "failure" && (
            <form
              className={classes.form}
              noValidate
              name="startOver"
              onSubmit={handleStartOver}
            >
              <Grid container spacing={3}>
                <Typography component="h1" variant="h5" className={classes.titleStatus}>
                  What's this...
                </Typography>
                <Grid item xs={12} className={classes.prompt}>
                  <span
                    className={classes.prompt}
                    dangerouslySetInnerHTML={{
                      __html: adventureList[step].prompt,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid className={classes.button}>
                <Button text="Start Over" onClick={handleStartOver} fullWidth />
              </Grid>
            </form>
          )}
          {step === "0" && (
            // <Grid container>
            <Grid item xs={12} className={classes.buttonConatiner}>
              <Button text="Enter" onClick={() => changeStep("1")} fullWidth />
            </Grid>
            // </Grid>
          )}
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

export default AdventurePrompt;
