import React from 'react';
import PropTypes from 'prop-types';

import classes from './SiteBar.module.css';
// import {handleChangeActionCreator} from "../../../Redux/prof_reducer";

const SiteBar = ({ name, img, id }) => (
  <div key={id} className={classes.block}>
    <img alt={id} className={classes.imgAvat} src={img} />
    <span className={classes.text}>{name}</span>
  </div>
);
SiteBar.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default SiteBar;
