import React from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToPropsRedirect = ({ auth: { isAuth } }) => ({
  isAuth,
});

export const withAuthRedirect = Component => {
  const AuthRedirectComponent = ({ ...props }) => {
    // if (!isAuth) return <Redirect to="/Login" />;
    return <Component {...props} />;
  };
  // const mapStateToPropsRedirect = state => ({
  //   isAuth: state.auth.isAuth,
  // });
  const ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(
    AuthRedirectComponent,
  );
  return ConnectedAuthRedirectComponent;
  //             return AuthRedirectComponent
};
withAuthRedirect.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};
