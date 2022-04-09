import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { Textarea } from '../News/FormControl';
import { required } from '../News/NewSetFormValidators';
import { maxLength30, minLength3 } from './validatorSetting';

import classes from './Setting.module.css';

const SetMessageForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        component={Textarea}
        name="newPostMesText"
        placeholder="add post2"
        validate={[required, minLength3, maxLength30]}
      />
    </div>
    <div>
      <button className={classes.button}>Add Post</button>
    </div>
  </form>
);
SetMessageForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export const SetMessageFormRedux = reduxForm({
  form: 'setTwo',
})(SetMessageForm);
