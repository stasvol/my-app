import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import {
  required,
  maxLength20,
  minLength2,
} from '../../../Utility/ValidateForm/validator';
import { Textarea } from '../../Common/FormControl/formComponent';

import classes from './MyPost.module.css';

let MyPostForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className={classes.block}>
      {/* <label htmlFor="Post">Post</label> */}
      <Field
        component={Textarea}
        name="newText"
        placeholder="add post"
        validate={[required, maxLength20, minLength2]}
      />
    </div>
    <button className={classes.btn}>Add post</button>
  </form>
);
MyPostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default MyPostForm = reduxForm({ form: 'postMessage' })(MyPostForm);

// export default MyPostForm;
