import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import photo from '../../Photo/Images/user.png';
import classes from './user.module.css';

const User = ({
  users: { id, photos, followed, name, status },
  disableButton,
  unFollowThunkCreator,
  FollowThunkCreator,
}) => {
  const handleUnfollow = () => unFollowThunkCreator(id);
  const handleFollow = () => FollowThunkCreator(id);
  return (
    <div>
      <div>
        {/* <img src={user.photoUrl} className={classes.photo}/> */}
        <NavLink to={`/Profile/${id}`}>
          <img
            alt=""
            className={classes.photo}
            src={photos.small != null ? photos.small : photo}
          />
        </NavLink>
      </div>
      <div>
        {followed ? (
          <button
            disabled={disableButton.some(userId => userId === id)}
            onClick={handleUnfollow}
          >
            UnFollow
          </button>
        ) : (
          <button
            disabled={disableButton.some(userId => userId === id)}
            onClick={handleFollow}
          >
            Follow
          </button>
        )}
      </div>
      <div>{name}</div>
      <div>{status}</div>
      <div>user.location.country</div>
      <div>user.location.city</div>
    </div>
  );
};
User.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      photos: PropTypes.string,
      followed: PropTypes.bool,
      name: PropTypes.string,
      status: PropTypes.string,
      small: PropTypes.string,
    }),
  ).isRequired,
  disableButton: PropTypes.bool.isRequired,
  unFollowThunkCreator: PropTypes.func.isRequired,
  FollowThunkCreator: PropTypes.func.isRequired,
};
export default User;
