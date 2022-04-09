import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import classes from './DialogUser.module.css';

const DialogUser = ({ id, img, name }) => {
  const path = `/dialogs/1${id}`;
  return (
    <div>
      <img alt={name} className={classes.imgAvatar} src={img} />

      <ul className={classes.dialogUser}>
        <li className={`${classes.user} `}>
          <NavLink activeClassName={classes.active} to={path}>
            {name}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
DialogUser.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DialogUser;
