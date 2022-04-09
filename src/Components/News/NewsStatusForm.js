import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { minLength3, maxLength30, required } from './NewSetFormValidators';
import { Input } from './FormControl';

const NewsStatusForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      component={Input}
      name="newPutStatus"
      placeholder="add status"
      validate={[required, maxLength30, minLength3]}
    />
  </form>
);
NewsStatusForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export const NewsStatusFormRedux = reduxForm({ form: 'newsForm' })(NewsStatusForm);
