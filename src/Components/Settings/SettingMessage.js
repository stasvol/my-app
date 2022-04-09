import React from 'react';
import PropTypes from 'prop-types';

import { useSettingMessage } from '../../Hook/useSettingMessage';
import { SetMessageFormRedux } from './setMessageForm';

import classes from './Setting.module.css';

const SettingMessage = ({ posts, addText }) => {
  const { addPostNewMes, handleAddText } = useSettingMessage(posts, addText);

  return (
    <div className={classes.post}>
      <SetMessageFormRedux onSubmit={handleAddText} />
      {addPostNewMes}
    </div>
  );
};
SettingMessage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addText: PropTypes.func.isRequired,
};

export default SettingMessage;
