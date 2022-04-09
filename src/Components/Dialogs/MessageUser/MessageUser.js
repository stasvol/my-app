import React from 'react';
import PropTypes from 'prop-types';

import classes from './MessageUser.module.css';

const MessageUser = ({ message }) => (
  <div>
    <ul className={classes.messageUser}>
      <li>{message}</li>
    </ul>
  </div>
);
MessageUser.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageUser;
