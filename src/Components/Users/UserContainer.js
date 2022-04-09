import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import {
  disableButtonFol,
  follow,
  FollowThunkCreator,
  getUsersThunkCreator,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  togglePreloader,
  unfollow,
  unFollowThunkCreator,
} from '../../Redux/user_reducer';
import UsersF from './UserF';
import Preloader from '../Common/preloader/preloader';
import { withAuthRedirect } from '../../Hock/withAuthRedirect';
import {
  currentPageSelector,
  disableButtonSector,
  getUsersSelector,
  isLoadingSelector,
  pageSizeSelector,
  totalUsersCountSelector,
} from '../../Redux/users_selectors';

const UsersApiContainer = ({
  getUsersThunkCreator,
  currentPage,
  pageSize,
  isLoading,
  disableButton,
  disableButtonFol,
  follow,
  FollowThunkCreator,
  totalUsersCount,
  unfollow,
  unFollowThunkCreator,
  users,
}) => {
  // componentDidMount() {
  //
  // eslint-disable-next-line max-len
  //     this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  //
  // }
  useEffect(() => {
    getUsersThunkCreator(currentPage, pageSize);
  }, [getUsersThunkCreator, currentPage, pageSize]);

  const onChangePage = pageNumber => {
    getUsersThunkCreator(pageNumber);
  };

  return (
    <>
      {isLoading ? <Preloader /> : null}
      <UsersF
        currentPage={currentPage}
        disableButton={disableButton}
        disableButtonFol={disableButtonFol}
        follow={follow}
        FollowThunkCreator={FollowThunkCreator}
        onChangePage={onChangePage}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        unfollow={unfollow}
        unFollowThunkCreator={unFollowThunkCreator}
        users={users}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    users: getUsersSelector(state),
    pageSize: pageSizeSelector(state),
    totalUsersCount: totalUsersCountSelector(state),
    currentPage: currentPageSelector(state),
    isLoading: isLoadingSelector(state),
    disableButton: disableButtonSector(state),
  };
};

UsersApiContainer.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      photos: PropTypes.string,
      followed: PropTypes.bool,
      name: PropTypes.string,
      status: PropTypes.string,
    }),
  ).isRequired,
  disableButtonFol: PropTypes.shape({ userId: PropTypes.number }).isRequired,
  currentPage: PropTypes.number.isRequired,
  totalUsersCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  disableButton: PropTypes.arrayOf(PropTypes.number).isRequired,
  unFollowThunkCreator: PropTypes.func.isRequired,
  FollowThunkCreator: PropTypes.func.isRequired,
  getUsersThunkCreator: PropTypes.func.isRequired,
  unfollow: PropTypes.bool.isRequired,
  follow: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    togglePreloader,
    disableButtonFol,
    getUsersThunkCreator,
    FollowThunkCreator,
    unFollowThunkCreator,
  }),
)(UsersApiContainer);
