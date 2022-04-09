import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginPost } from '../../Redux/auth_reducer';
import LoginReduxForm from './LoginForm';

const LoginContainer = ({ isAuth, captchaUrl, loginPost }) => {
  const onSubmit = ({ formData: { Email, Password, RememberMe, captcha } }) => {
    loginPost(Email, Password, RememberMe, captcha);
    // alert(formData.email,formData.password,formData.rememberMe)
    // console.log(formData)
  };
  if (isAuth) return <Redirect to="/Profile" />;

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = ({ auth: { isAuth, captchaUrl } }) => ({
  isAuth,
  captchaUrl,
});
LoginContainer.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  captchaUrl: PropTypes.string.isRequired,
  loginPost: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { loginPost })(LoginContainer);
