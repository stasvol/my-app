import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import Profile from "./Profile";
import {
    getStatus, profileThunkCreator, savePhoto,
    setUsersProfile, updateStatus, editProfile
} from "../../Redux/prof_reducer";
import {withAuthRedirect} from "../../Hock/withAuthRedirect";
import {useProfileContainer} from "../../Hook/useProfileContainer";

const ProfileContainer = ({match,authorisedUserId,history,
                              getUsers,getStatus,isAuth,profile,
                              status,updateStatus,savePhoto,...props}) => {

    const {userUpdateProfile} = useProfileContainer(match,authorisedUserId,getUsers,getStatus)

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
    // //     //      // <img src={'https://goodhostel.lviv.ua/sites/default/files/clAvHWVG4GE.jpg'}/>
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
    // //     // // // axios.get(`https://social-network.samuraijs.com/api/1.0/Profile/`+userId)
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

             if (!isAuth) return <Redirect to={'/login'} />
             return (
                 <div>
                    <Profile  {...props} profile={profile}
                              status={status} updateStatus={updateStatus}
                              isOwner={!match.params.userId}
                              savePhoto={savePhoto}/>
                              {/*saveProfile={this.props.saveProfile}*/}
                 </div>
             )
}
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
// AuthRedirectComponent = connect(mapStateToPropsRedirect) (AuthRedirectComponent)
const mapStateToProps = ({profPage:{profile,status},auth:{authorisedUserId,isAuth}}) => ({
    // state: state.profPage,
    profile,
    status,
    authorisedUserId,
    isAuth,
});
// let WithRouterProfileContainer = withRouter(AuthRedirectComponent)
// export default connect (mapStateToProps, {setUsersProfile,profileThunkCreator}) (WithRouterProfileContainer);
export default compose(
    connect (mapStateToProps, {setUsersProfile,
        getUsers: profileThunkCreator,getStatus,updateStatus,savePhoto, editProfile }),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)