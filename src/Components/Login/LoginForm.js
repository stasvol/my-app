import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { Input } from '../Common/FormControl/formComponent';
import { maxLength20, minLength2, required } from '../../Utility/ValidateForm/validator';

import classes from './Login.module.css';

const LoginForm = ({ handleSubmit, captchaUrl, error }) => (
  <form className={classes.formClass} onSubmit={handleSubmit}>
    <div>
      <label htmlFor="Email">Email</label>
      <Field
        component={Input}
        name="Email"
        placeholder="email"
        type="email"
        validate={[required, maxLength20, minLength2]}
      />
    </div>
    <div>
      <label htmlFor="Password">Password</label>
      <Field
        component={Input}
        name="Password"
        placeholder="Password"
        type="password"
        validate={[required, maxLength20, minLength2]}
      />
    </div>
    {/* <div> */}
    {/* <label htmlFor="email">Email</label> */}
    {/* <Field name="Email" component="input"
    type="email" placeholder={'email'} /> */}
    {/* </div> */}
    <div>
      <label htmlFor="Checkbox">Remember me</label>
      <Field component={Input} name="RememberMe" type="checkbox" validate={[required]} />
    </div>
    {captchaUrl && <img alt="error" src={captchaUrl} />}
    {captchaUrl && (
      <Field
        component={Input}
        name="captcha"
        placeholder="Symbol from image"
        validate={[required]}
      />
    )}

    {error ? <div className={classes.formError}>{error}</div> : ''}
    <button type="submit">LOGIN</button>
  </form>
);
LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  captchaUrl: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};
const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login',
})(LoginForm);

export default LoginReduxForm;
