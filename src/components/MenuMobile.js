import React from 'react';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as IconFacebook } from '../assets/icons/facebook.svg';
import { ReactComponent as IconInstagram } from '../assets/icons/instagram.svg';
import { ReactComponent as IconEmail } from '../assets/icons/email.svg';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import style from '../styles/theme';

const useStyles = makeStyles({
  list: {
    width: 250,
    padding: '30px 10px',
    fontFamily: 'Aclonica',
    textAlign: 'center',
    alignContent: 'center',
    display: "flex",
    flexDirection: "column",
    '& a' :{
      marginBottom: '10px',
    }
  },
  links: {
    fontSize: '16px',
    lineHeight: '30px',
    cursor: 'pointer',
    color: (props) => props.isLightTheme ? style.colors.red : style.colors.white,
    fill: (props) => props.isLightTheme ? style.colors.red : style.colors.white,
  },
  social: {
    '& svg' :{
      height: '27px',
      margin: '10px',
    },
    '& a:visited' :{
      color: (props) => props.isLightTheme ? style.colors.red : style.colors.white,
      fill: (props) => props.isLightTheme ? style.colors.red : style.colors.white,
    },
  },
  closeIcon: {
    fill: (props) => props.isLightTheme ? style.colors.red : style.colors.white,
    marginBottom: '10px',
    marginTop: '40px',
  }
});

const MenuMobile = ({ direction, menuIcon }) => {
  const classes = useStyles({ isLightTheme: true });
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, classes.links)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Button onClick={toggleDrawer(direction, false)}>
        <CloseIcon className={classes.closeIcon} />
      </Button>
      <Link to="/sign-up">
        <span>Sign Up</span>
      </Link>
      <Link to="/faq">
        <span>FAQ</span>
      </Link>
      <a
        href={process.env.REACT_APP_BUZZFEED}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Buzzfeed Quiz</span>
      </a>
      <div className={classes.social}>
        <a
          href={process.env.REACT_APP_INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconInstagram />
        </a>
        <a
          href={process.env.REACT_APP_FACEBOOK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconFacebook />
        </a>
        <a
          href={process.env.REACT_APP_EMAIL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconEmail />
        </a>
      </div>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(direction, true)}>
        {menuIcon}
      </Button>
      <Drawer
        anchor={direction}
        open={state[direction]}
        onClose={toggleDrawer(direction, false)}
      >
        {list(direction)}
      </Drawer>
    </div>
  );
}


export default MenuMobile;