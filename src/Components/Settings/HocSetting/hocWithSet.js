import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const matStateToPropsRedir = ({ setAuth: { isSetAuth } }) => ({ isSetAuth });

export const withSetComponent = Component => {
  const withSetComponentContainer = ({ isSetAuth, ...props }) => {
    if (!isSetAuth) return <Redirect to="/Login" />;
    return <Component {...props} />;
  };
  const withSetComponentRedirect = connect(matStateToPropsRedir)(
    withSetComponentContainer,
  );
  return withSetComponentRedirect;
};

// export const withSetComponent = (Component)=>(props) =>{
//
//     if (!props.isSetAuth) return <Redirect to={'/Login'}/>
//     return <Component {...props}/>
//
// }
