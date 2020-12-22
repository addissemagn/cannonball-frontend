import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import style from '../styles/theme'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.5em',
    color: style.colors.black, // TODO: make this dynamic with day / night
    margin: '0',
    ['@media (max-width:620px)']: { // eslint-disable-line no-useless-computed-key
      maxWidth: '80%',
      fontSize: '1.4em',
    },
  }
}));

const Subtitle = ({ text }) => {
  const classes = useStyles();

  return (
    <div className={classes.title}>
      {text}
    </div>
  );
};

export default Subtitle;