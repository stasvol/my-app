import React from 'react';
import {Field, reduxForm} from 'redux-form'

import {Input} from "../Common/FormControl/formComponent";
import { maxLength20, minLength2, required} from "../../Utility/ValidateForm/validator";

import classes from './Login.module.css';

const LoginForm = ({handleSubmit, captchaUrl, error}) => (

        <form onSubmit={handleSubmit} className={classes.formClass}>
            <div>
                <label htmlFor="Email">Email</label>
                <Field name="Email" component={Input} type="email"
                       placeholder={"email"} validate={[required, maxLength20, minLength2]}/>
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <Field name="Password" component={Input} type="password"
                       placeholder={"Password"} validate={[required, maxLength20, minLength2]}/>
            </div>
            {/* <div>*/}
            {/* <label htmlFor="email">Email</label>*/}
            {/* <Field name="Email" component="input" type="email" placeholder={'email'} />*/}
            {/*</div>*/}
            <div>
                <label htmlFor="Checkbox">Remember me</label>
                <Field name="RememberMe" component={Input}
                       type="checkbox" validate={[required]}/>
            </div>

            {captchaUrl && <img src={captchaUrl} alt={'error'}/>}
            {captchaUrl && <Field name="captcha" component={Input}
                                  placeholder={'Symbol from image'} validate={[required]}/>}

            {error
                ? <div className={classes.formError}>
                    {error}
                </div>
                : ''
            }
            <button type="submit">LOGIN</button>
        </form>
    )

const LoginReduxForm = reduxForm({
// a unique name for the form
    form: 'login'
})(LoginForm)

export default LoginReduxForm