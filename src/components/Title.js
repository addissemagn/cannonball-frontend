import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '4em',
    color: '#CF0323', // TODO: make this dynamic with day / night
    margin: '0',
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      maxWidth: '80%',
      fontSize: '3em',
    },
  }
}));

const Title = ({ text }) => {
  const classes = useStyles();

  return (
    <div className={classes.title}>
      {text}
    </div>
  );
};

export default Title;