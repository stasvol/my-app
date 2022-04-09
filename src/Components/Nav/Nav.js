import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import SiteBar from './SiteBar/SiteBar';

import classes from './Nav.module.css';

const Navbar = ({ siteBarNav, changeClick }) => (
  <nav className={classes.nav}>
    <ul>
      <li className={`${classes.item} ${classes.active}`}>
        <NavLink activeClassName={classes.active} to="/Profile">
          Profile
        </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink activeClassName={classes.active} to="/Dialogs">
          Dialogs
        </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink activeClassName={classes.active} to="/News">
          News
        </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink activeClassName={classes.active} to="/Music">
          Music
        </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink activeClassName={classes.active} to="/User">
          Users
        </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink activeClassName={classes.active} to="/Setting">
          Settings
        </NavLink>
      </li>
      <li className={classes.item}>
        <h2 className={classes.header}>FRIEND</h2>
      </li>
    </ul>
    {siteBarNav.map(({ id, name, img }) => (
      <SiteBar key={id} changeClick={changeClick} id={id} img={img} name={name} />
    ))}
  </nav>
);
Navbar.propTypes = {
  siteBarNav: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  changeClick: PropTypes.func.isRequired,
};

export default Navbar;
