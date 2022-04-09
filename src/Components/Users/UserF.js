import React from 'react';
import PropTypes from 'prop-types';

import Paginator from './Paginator';
import User from './user';

const UsersF = ({
  currentPage,
  onChangePage,
  totalUsersCount,
  pageSize,
  users,
  disableButton,
  unFollowThunkCreator,
  FollowThunkCreator,
}) => (
  <div>
    <Paginator
      currentPage={currentPage}
      onChangePage={onChangePage}
      pageSize={pageSize}
      totalUsersCount={totalUsersCount}
    />

    {users.map((user, i) => (
      <User
        key={user[i]}
        disableButton={disableButton}
        FollowThunkCreator={FollowThunkCreator}
        unFollowThunkCreator={unFollowThunkCreator}
        users={users}
      />
    ))}
  </div>
);
UsersF.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      photos: PropTypes.string,
      followed: PropTypes.bool,
      name: PropTypes.string,
      status: PropTypes.string,
    }),
  ).isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  totalUsersCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  disableButton: PropTypes.arrayOf(PropTypes.number).isRequired,
  unFollowThunkCreator: PropTypes.func.isRequired,
  FollowThunkCreator: PropTypes.func.isRequired,
};
export default UsersF;
