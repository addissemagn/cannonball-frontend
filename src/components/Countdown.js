import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import style from '../styles/theme';

const useStyles = makeStyles((theme) => ({
  countdown: {
    display: 'flex',
    margin: '24px 0px',
    color: (props) => props.isLightTheme ? style.colors.black : style.colors.white,
  },
  time: {
    display: 'block',
    textAlign: 'center',
    padding: '0px 10px',
    '& div': {
      fontSize: '40px',
    },
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      '& div': {
        fontSize: '30px',
      },
    },
  }
}));

const Countdown = ({ isLightTheme, finalDate }) => {
  const classes = useStyles({ isLightTheme });

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  });

  // update every second
  setInterval(() => {
    const timeLeft = calculateCountdown(finalDate);
    timeLeft ? setCountdown(timeLeft) : stopCountdown();
  }, 1000);

  const stopCountdown = () => {
      // TODO: handle this
  }

  const calculateCountdown = (endDate) => {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  };

  const addLeadingZeros = (value) => {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  return (
    <div className={classes.countdown}>
      <div className={classes.time}>
        <div>{addLeadingZeros(countdown.days)}</div>
        <span>{countdown.days === 1 ? "Day" : "Days"}</span>
      </div>

      <div className={classes.time}>
        <div>{addLeadingZeros(countdown.hours)}</div>
        <span>Hours</span>
      </div>

      <div className={classes.time}>
        <div>{addLeadingZeros(countdown.min)}</div>
        <span>Mins</span>
      </div>

      <div className={classes.time}>
        <div>{addLeadingZeros(countdown.sec)}</div>
        <span>Secs</span>
      </div>
    </div>
  );
};

export default Countdown;