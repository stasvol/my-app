import React from 'react';
import {Redirect} from "react-router-dom"
import {connect} from "react-redux";

import {loginPost} from "../../Redux/auth_reducer";
import LoginReduxForm from "./LoginForm";

const LoginContainer = ({isAuth,captchaUrl,loginPost}) => {
    const onSubmit = ({formData:{Email,Password,RememberMe,captcha }}) => {
         loginPost(Email, Password, RememberMe, captcha )
        // alert(formData.email,formData.password,formData.rememberMe)
        // console.log(formData)
    }
    if (isAuth) return <Redirect to={'/Profile'}/>

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

const mapStateToProps = ({auth:{isAuth,captchaUrl}}) => ({
    isAuth,
    captchaUrl
});

export default connect(mapStateToProps, {loginPost})(LoginContainer)