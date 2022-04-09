import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { required } from '../News/NewSetFormValidators';
import { maxLength30, minLength3 } from './validatorSetting';
import { Textarea } from '../News/FormControl';

const SettingForm = ({ handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        name="newMessage"
        placeholder="add data"
        validate={[required, minLength3, maxLength30]}
      />
      <div>
        <button>ADD</button>
      </div>
    </form>
  </div>
);
SettingForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const SettingFormContainer = reduxForm({
  form: 'setOne',
})(SettingForm);

export default SettingFormContainer;
