import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './Header.module.css';
// import photo from "../../Photo/Images/kot.png";

const Header = ({ isAuth, loginOut }) => (
  <header className={classes.header}>
    <img
      alt=""
      src={
        'https://img2.pngio.com/' +
        'logo-png-images-download-150000-logo-png-' +
        'resources-with-logo-download-png-360_360.png'
      }
    />
    <div className={classes.log}>
      {isAuth ? (
        <div>
          <button onClick={loginOut}>Log out</button>
        </div>
      ) : (
        <NavLink to="/login">LOGIN</NavLink>
      )}
    </div>
  </header>
);
Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  loginOut: PropTypes.func.isRequired,
};
export default Header;
