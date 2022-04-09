import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { Textarea } from '../Common/FormControl/formComponent';
import { maxLength30, minLength3, required } from '../../Utility/ValidateForm/validator';

import classes from './Dialog.module.css';

// const maxLength30 =  maxLength(30);
// const minLength2 =  minLength(2);

let DialogForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      {/* <label htmlFor="dialog">Add Message</label> */}
      <Field
        component={Textarea}
        name="newMessageText"
        placeholder="add message"
        validate={[required, maxLength30, minLength3]}
      />
    </div>
    <button className={classes.btn}>Add Message</button>
  </form>
);
DialogForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default DialogForm = reduxForm({
  form: 'dialogMessage',
})(DialogForm);

// export default DialogForm;
