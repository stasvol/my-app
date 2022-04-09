import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import { loginOut } from '../../Redux/auth_reducer';

// import * as axios from "axios";
// import {userApi} from "../../Api/api";
// import classes from './Header.module.css';

const HeaderContainer = ({ isAuth, login }) => (
  <Header isAuth={isAuth} login={login} />
  // componentDidMount(props) {
  //      this.props.authThunkCreator (this.props.id, this.props.email,
  //      this.props.login,this.props.isAuth)
  //     // userApi.loginUser().then(data => {
  //     //
  //     //           if (data.resultCode === 0){
  //     //               let {id, email, login} = data.data
  //     //            this.props.setAuthUserData(id, email, login);
  //     //        }
  //     // });
  //
  // }
);

const mapStateToProps = ({ auth: { isAuth, login } }) => ({
  // auth,
  isAuth,
  login,
});
HeaderContainer.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  login: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, { loginOut })(HeaderContainer);
