import React, { useCallback, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
// import classes from './News.module.css';
// eslint-disable-next-line import/namespace,import/default
import News from './News';
import {
  currentPageSetAcCr,
  followAcCr,
  newPutStatusThunk,
  newGetStatusThunk,
  setFollowThunk,
  setLoadDisableButAcCr,
  setProfAcCr,
  setProfThunk,
  settingUserAcCr,
  setUnfollowThunk,
  unfollowAcCr,
  showPhoto,
  saveContacts,
} from '../Settings/Set_reducers/setUserReducer';
import {
  newAuthThunk,
  setAuthReducerAcCr,
} from '../Settings/Set_reducers/setAuthReducer';
// import {newAuthMeApi, newProfileApi} from "../Settings/Api/SetApiAxios";
// import {withSetComponent} from "../Settings/HocSetting/hocWithSet";
// import NewsStatus from "./newsStatus";
import {
  newCountUsersSet,
  newCurrentPageSet,
  newIdAuth,
  newIsLoad,
  newIsSetAuth,
  newLogin,
  newPageSizeSet,
  newProf,
  newSetDisableBut,
  newStatus,
  newUsers,
} from './selectorNew';
// import {useNewsContainer} from "../../Hook/useNewsContainer";

const NewsContainer = ({
  match,
  history,
  newAuthThunk,
  userId,
  email,
  login,
  idAuth,
  setProfThunk,
  newGetStatusThunk,
  countUsersSet,
  currentPageSet,
  isOwnerNew,
  isSetAuth,
  newPutStatusThunk,
  pageSizeSet,
  prof,
  saveContacts,
  SetCurPage,
  setDisableBut,
  setFollowThunk,
  setUnfollowThunk,
  showPhoto,
  status,
  users,
  ...props
}) => {
  // const {methodMontUpdate} = useNewsContainer(match,history,props)
  const methodMontUpdate = useCallback(() => {
    let { userId } = +match.params;
    newAuthThunk(userId, email, login);
    if (!userId) {
      userId = idAuth;
      if (!userId) {
        history.push('/News');
      }
    }
    setProfThunk(userId);
    newGetStatusThunk(userId);
  }, [
    email,
    history,
    idAuth,
    login,
    match.params,
    newAuthThunk,
    newGetStatusThunk,
    setProfThunk,
  ]);

  useEffect(() => {
    methodMontUpdate();
  }, [match.params.userId, methodMontUpdate]);
  // componentDidMount() {
  //
  //     methodMontUpdate()
  //     // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`
  //     , {withCredentials: true })
  //     // newAuthMeApi().then(data => {
  //     //           if (data.resultCode===0){
  //     //           let {id,email,login } = data.data
  //     //           this.props.setAuthReducer(id,email,login)
  //     //       }
  //     //
  //     //     })
  //     // this.props.newAuthThunk(this.props.userId,
  //     this.props.email,this.props.login)
  //     //
  //     // let userId = this.props.match.params.userId
  //     // if (!userId){
  //     //     userId = this.props.idAuth
  //     //     if (!userId) {
  //     //         this.props.history.push("/News")
  //     //     }
  //     // }
  //     //
  //     // this.props.setProfThunk(userId)
  //     // this.props.newGetStatusThunk(userId)
  //     // newProfileApi(userId).then(response => {
  //     //           this.props.setProf(response.data)
  //     //        })
  //     // axios.get(`https://social-network.
  //     samuraijs.com/api/1.0/Profile/`+ userId,
  //     //     {withCredentials:true})
  //     //     .then(response => {
  //     //     this.props.setProf(response.data)
  //     //
  //     // })
  // }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //    if (props.match.params.userId !== prevProps.match.params.userId){
  //        methodMontUpdate()
  //    }
  //
  // }
  // if (!props.isSetAuth) return <Redirect to={'/Login'}/>
  return (
    <div>
      <News
        {...props}
        countUsersSet={countUsersSet}
        currentPageSet={currentPageSet}
        isOwnerNew={match.params.userId}
        isSetAuth={isSetAuth}
        login={login}
        newPutStatusThunk={newPutStatusThunk}
        pageSizeSet={pageSizeSet}
        prof={prof}
        saveContacts={saveContacts}
        SetCurPage={SetCurPage}
        setDisableBut={setDisableBut}
        setFollowThunk={setFollowThunk}
        setUnfollowThunk={setUnfollowThunk}
        showPhoto={showPhoto}
        status={status}
        users={users}
      />
    </div>
  );
};

const mapStateToProps = ({
  users,
  countUsersSet,
  pageSizeSet,
  currentPageSet,
  isLoad,
  prof,
  isSetAuth,
  login,
  setDisableBut,
  status,
  idAuth,
}) => {
  return {
    users: newUsers(users),
    countUsersSet: newCountUsersSet(countUsersSet),
    pageSizeSet: newPageSizeSet(pageSizeSet),
    currentPageSet: newCurrentPageSet(currentPageSet),
    isLoad: newIsLoad(isLoad),
    prof: newProf(prof),
    isSetAuth: newIsSetAuth(isSetAuth),
    login: newLogin(login),
    setDisableBut: newSetDisableBut(setDisableBut),
    status: newStatus(status),
    idAuth: newIdAuth(idAuth),
    // profile: state.profPage.profile
    // users: state.users.users,
    // countUsersSet: state.users.countUsersSet ,
    // pageSizeSet: state.users.pageSizeSet ,
    // currentPageSet: state.users.currentPageSet,
    // isLoad: state.users.isLoad,
    // prof: state.users.prof,
    // isSetAuth:state.setAuth.isSetAuth,
    // login: state.setAuth.login,
    // setDisableBut:state.users.setDisableBut,
    // status:state.users.status,
    // idAuth:state.setAuth.id
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setFollow: userId => {
      dispatch(followAcCr(userId));
    },
    setUnFollow: userId => {
      dispatch(unfollowAcCr(userId));
    },
    settingAddUser: users => {
      dispatch(settingUserAcCr(users));
    },
    SetCurPage: currentPageSet => {
      dispatch(currentPageSetAcCr(currentPageSet));
    },
    setProf: prof => {
      dispatch(setProfAcCr(prof));
    },
    setAuthReducer: (id, email, login) => {
      dispatch(setAuthReducerAcCr(id, email, login));
    },
    setLoadDisableBut: (isLoad, userId) => {
      dispatch(setLoadDisableButAcCr(isLoad, userId));
    },
    newAuthThunk: (id, email, login) => {
      dispatch(newAuthThunk(id, email, login));
    },
    setProfThunk: userId => {
      dispatch(setProfThunk(userId));
    },
    setFollowThunk: userId => {
      dispatch(setFollowThunk(userId));
    },
    setUnfollowThunk: userId => {
      dispatch(setUnfollowThunk(userId));
    },
    newGetStatusThunk: userId => {
      dispatch(newGetStatusThunk(userId));
    },
    newPutStatusThunk: (status, newPutStatus) => {
      dispatch(newPutStatusThunk(status, newPutStatus));
    },
    showPhoto: file => {
      dispatch(showPhoto(file));
    },
    saveContacts: prof => {
      dispatch(saveContacts(prof));
    },
  };
};
NewsContainer.propTypes = {
  match: PropTypes.shape({ params: PropTypes.number, userId: PropTypes.number })
    .isRequired,
  history: PropTypes.shape().isRequired,
  newAuthThunk: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  idAuth: PropTypes.bool.isRequired,
  setProfThunk: PropTypes.func.isRequired,
  newGetStatusThunk: PropTypes.func.isRequired,
  countUsersSet: PropTypes.func.isRequired,
  currentPageSet: PropTypes.number.isRequired,
  isOwnerNew: PropTypes.bool.isRequired,
  isSetAuth: PropTypes.bool.isRequired,
  newPutStatusThunk: PropTypes.func.isRequired,
  pageSizeSet: PropTypes.number.isRequired,
  prof: PropTypes.shape().isRequired,
  saveContacts: PropTypes.func.isRequired,
  SetCurPage: PropTypes.func.isRequired,
  setDisableBut: PropTypes.func.isRequired,
  setFollowThunk: PropTypes.func.isRequired,
  setUnfollowThunk: PropTypes.func.isRequired,
  showPhoto: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      photos: PropTypes.string,
      followed: PropTypes.bool,
      name: PropTypes.string,
      status: PropTypes.string,
    }),
  ).isRequired,
};

export default compose(
  // withSetComponent,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(NewsContainer);
//    // let withSetComponentRedirectCont = withSetComponent(NewsContainer)
//    let NewsContainerRouter = withRouter(NewsContainer)
// export default
// connect(mapStateToProps,mapDispatchToProps)
// (NewsContainerRouter)
