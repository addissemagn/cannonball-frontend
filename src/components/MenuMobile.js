import React from 'react';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as IconFacebook } from '../assets/icons/facebook.svg';
import { ReactComponent as IconInstagram } from '../assets/icons/instagram.svg';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import style from '../styles/theme';

const useStyles = makeStyles({
  list: {
    width: 250,
    padding: '30px 10px',
    fontFamily: 'Aclonica',
    textAlign: 'center',
    alignContent: 'center',
  },
  fullList: {
    width: 'auto',
  },
  links: {
    fontSize: '16px',
    lineHeight: '30px',
    cursor: 'pointer',
    color: (props) => props.isLightTheme ? style.colors.red : style.colors.white,
    fill: (props) => props.isLightTheme ? style.colors.red : style.colors.white,
  },
  social: {
    display: 'flex',
    padding: 0,
    '& a' :{
      marginRight: '10px',
      marginLeft: '0',
    },
    '& svg' :{
      width: '27px',
      marginRight: '20px',
    }
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
      className={clsx(
        classes.list,
        classes.links
      )}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/sign-up">
          <ListItem button key="signup">
            Sign Up
          </ListItem>
        </Link>
        <Link to="/faq">
          <ListItem button key="faq">
            FAQ
          </ListItem>
        </Link>
        <Link to="/quiz">
          <ListItem button key="quiz">
            Buzzfeed Quiz
          </ListItem>
        </Link>
      </List>
      <List className={classes.social}>
        <ListItem button key="instagram">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconFacebook />
          </a>
        </ListItem>
      </List>
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