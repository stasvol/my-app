import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsRedirect = ({auth:{isAuth}}) => ({
    isAuth
});

 export const withAuthRedirect = (Component) => {
    class AuthRedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/Login'} />
            return <Component {...this.props} />
        }
    }
     // let mapStateToPropsRedirect = (state) => ({
     //     isAuth: state.auth.isAuth
     // });
       const ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect) (AuthRedirectComponent)

         return  ConnectedAuthRedirectComponent
     //             return AuthRedirectComponent
 }