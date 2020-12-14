import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button as MaterialUiButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    fontFamily: 'Aclonica',
    fontSize: '1em',
    minWidth: '64px',
    width: (props) => props.fullWidth ? '100%': 'auto',
    padding: '15px 24px',
    borderRadius: '10px',
    background: '#fff',
    color: 'black',
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'none',
    margin: 0,
    boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s cubic-bezier(0.25, 0.25, 0.315, 1.35), transform 0.1s linear',
    '& svg': {
      height: '1.25em',
      width: 'auto',
      padding: 0,
      paddingRight: '10px',
      margin: 0,
    },
    '&:hover': {
      background: '#fff',
      tranform: 'translateY(-1px)',
      boxShadow: '0px 10px 40px 0px rgba(0, 0, 0, 0.3)',
    },
    ['@media (max-width:512px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '0.9em',
    },
  },
}));

const Button = ({ text, onClick, fullWidth, icon }) => {
  const classes = useStyles({ fullWidth });

  return (
    <MaterialUiButton className={classes.button} onClick={onClick}>
      {icon && (icon)}
      {text}
    </MaterialUiButton>
  );
}

export default Button;
