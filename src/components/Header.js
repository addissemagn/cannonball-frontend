import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { ReactComponent as IconFacebook } from '../assets/icons/facebook.svg';
import { ReactComponent as IconInstagram } from '../assets/icons/instagram.svg';
import LogoCannonball from '../assets/icons/LogoCannonball';
import MenuMobile from './MenuMobile';
import style from '../styles/theme';
import "../App.css";

const useStyles = makeStyles((theme) => ({
  logo: {
    cursor: 'pointer',
    '&:hover' :{
      transform: 'translateY(-2px)',
    },
  },
  header: {
    display: 'flex',
    padding: '48px',
    paddingBottom: '20px',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& a:hover, span:hover' :{
      transform: 'translateY(-2px)',
    },
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
      padding: '48px 30px 0px 30px',
    },
  },
  social: {
    display: 'flex',
    fontFamily: 'Aclonica',
    fontSize: '16px',
    lineHeight: '25px',
    cursor: 'pointer',
    color: (props) => props.isLightTheme ? style.colors.red : style.colors.white,
    fill: (props) => props.isLightTheme ? style.colors.red : style.colors.white,
    '& a, span' :{
      display: 'inline-block',
      marginRight: '15px',
    },
    '& svg' :{
      width: '25px',
      marginRight: '15px',
    },
    '& a:last-child' :{
      marginRight: '0px',
    },
  },
  menuIcon: {
    fill: (props) => props.isLightTheme ? style.colors.red : style.colors.white,
    fontSize: '40px',
  }
}));

const Header = ({ isLightTheme }) => {
  const classes = useStyles({ isLightTheme });
  const mobileSize = window.matchMedia("(max-width: 512px)").matches

  return (
    <>
      <div className={classes.header}>
        <div className={classes.logo}>
          <Link to="/">
            <LogoCannonball width="120" />
          </Link>
        </div>
        <div className={classes.social}>
          {mobileSize && (
            <MenuMobile
              direction="right"
              menuIcon={<MenuIcon className={classes.menuIcon} />}
            />
          )}
          {!mobileSize && (
            <>
              <Link to="/sign-up">
                <span>Sign Up</span>
              </Link>
              <Link to="/faq">
                <span>FAQ</span>
              </Link>
              <a
                href="https://buzzfeed.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Buzzfeed Quiz</span>
              </a>
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
