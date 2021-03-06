import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import Profile from './Profile';
import {
  getStatus,
  profileThunkCreator,
  savePhoto,
  setUsersProfile,
  updateStatus,
  editProfile,
} from '../../Redux/prof_reducer';
import { withAuthRedirect } from '../../Hock/withAuthRedirect';
import { useProfileContainer } from '../../Hook/useProfileContainer';

// import {Redirect} from "react-router";

const ProfileContainer = ({
  match,
  authorisedUserId,
  history,
  getUsers,
  getStatus,
  isAuth,
  profile,
  status,
  updateStatus,
  savePhoto,
  ...props
}) => {
  useProfileContainer(match, authorisedUserId, getUsers, getStatus, history);

  // const userUpdateProfile = () => {
  //      let userId = match.params.userId;
  //
  //      if (!userId){
  //
  //          userId = authorisedUserId
  //          if (!userId) {
  //              userId = history.push('/login')
  //          }
  //      }
  //      getUsers(userId)
  //      getStatus(userId);
  // }
  //
  // // componentDidMount() {
  // //
  // //     this.userUpdateProfile()
  // //     //  let userId = this.props.match.params.userId;
  // //     //
  // //     //  if (!userId){
  // //     //
  // //     //      userId = this.props.authorisedUserId
  // //     //      // userId= 14585;
  // //     //      // <img src={'https://goodhostel
  // .lviv.ua/sites/default/files/clAvHWVG4GE.jpg'}/>
  // //     //      //     // 1049;
  // //     //          // 14585;
  // //     //      if (!userId) {
  // //     //          userId = this.props.history.push('/login')
  // //     //      }
  // //     //  }
  // //     //  this.props.getUsers(userId)
  // //     // // this.props.profileThunkCreator(userId);
  // //     //  this.props.getStatus(userId);
  // //     //  // this.props.updateStatusThunkCreator(status);
  // //     //
  // //     // //  addAxios.getProfile(userId)
  // //     // // // axios.get(`https://social-network
  // .samuraijs.com/api/1.0/Profile/`+userId)
  // //     // //
  // //     // //     .then(response => {
  // //     // //
  // //     // //     this.props.setUsersProfile(response.data);
  // //     // //
  // //     // // })
  // // }
  // useEffect(()=>{
  //     userUpdateProfile()
  // },[match.params.userId])

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //
  //    if (this.props.match.params.userId !== prevProps.match.params.userId){
  //           this.userUpdateProfile()
  //    }
  //
  //     // let userId = this.props.match.params.userId;
  //     //
  //     // if (!userId){
  //     //
  //     //     userId = this.props.authorisedUserId
  //     //     if (!userId) {
  //     //         userId = this.props.history.push('/login')
  //     //     }
  //     // }
  //     // this.props.getUsers(userId)
  //     // this.props.getStatus(userId);
  // }

  if (!isAuth) return <Redirect to="/login" />;
  return (
    <div>
      <Profile
        {...props}
        isOwner={!match.params.userId}
        profile={profile}
        savePhoto={savePhoto}
        status={status}
        updateStatus={updateStatus}
      />
    </div>
  );
};
// let RedirectComponent = (props) => {
//
//     if (!props.isAuth) return <Redirect to={'/login'} />
//
//     return  <ProfileContainer {...props} />
//
// }
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer) ;
// let mapStateToPropsRedirect = (state) => ({
//     isAuth: state.auth.isAuth
// });
// AuthRedirectComponent =
// connect(mapStateToPropsRedirect) (AuthRedirectComponent)
ProfileContainer.propTypes = {
  match: PropTypes.shape({ params: PropTypes.number, userId: PropTypes.number })
    .isRequired,
  authorisedUserId: PropTypes.number.isRequired,
  history: PropTypes.shape().isRequired,
  getUsers: PropTypes.func.isRequired,
  getStatus: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  profile: PropTypes.shape().isRequired,
  status: PropTypes.string.isRequired,
  updateStatus: PropTypes.func.isRequired,
  savePhoto: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  profPage: { profile, status },
  auth: { authorisedUserId, isAuth },
}) => ({
  // state: state.profPage,
  profile,
  status,
  authorisedUserId,
  isAuth,
});

// let WithRouterProfileContainer = withRouter(AuthRedirectComponent)
// export default connect (mapStateToProps,
// {setUsersProfile,profileThunkCreator}) (WithRouterProfileContainer);
export default compose(
  connect(mapStateToProps, {
    setUsersProfile,
    getUsers: profileThunkCreator,
    getStatus,
    updateStatus,
    savePhoto,
    editProfile,
  }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
