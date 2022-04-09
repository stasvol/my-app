import React from 'react';
import PropTypes from 'prop-types';

import classes from './Post.module.css';

const Post = ({ message, like }) => (
  <div>
    <div className={classes.post}>Post: {message}</div>
    <img
      alt=""
      className={classes.imgAvat}
      src={
        'https://memax.' +
        'club/wp-content/uploads/2019/06/Krasivye_avatarki_dlya_kartinki_1_09074657.jpg'
      }
    />
    <span>Like: </span> {like}
  </div>
);
Post.propTypes = {
  message: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
};

export default Post;
