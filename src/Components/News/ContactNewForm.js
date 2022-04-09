import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { Input } from './FormControl';
import { required } from './NewSetFormValidators';

const ContactNewForm = ({ handleSubmit, error }) => (
  <form onSubmit={handleSubmit}>
    {<button onClick={() => {}}>SAVE</button>}
    {error && <div>ERROR: {error}</div>}
    <div>
      <b>Name:</b>
      <Field
        component={Input}
        name="fullName"
        placeholder="add data"
        validate={[required]}
      />
      {/* { createField( "Full name", "aboutMe", [require], Input)} */}
    </div>
    <div>
      <b>About Me:</b>
      <Field
        component={Input}
        name="aboutMe"
        placeholder="add data"
        validate={[required]}
      />
    </div>
    <div>
      <b>LookingForAJobDescription:</b>
      <Field
        component={Input}
        name="LookingForAJobDescription"
        placeholder="add data"
        validate={[required]}
      />
    </div>
    <div>
      <b>Contacts :</b>
      {/* <Field name={'fullName'}
                component={Input} placeholder={'contacts'} */}
      {/*   validate={[required]}/> */}
      {/* {props.users.contacts} */}
      <b>github:</b>{' '}
      <Field component={Input} name="github" placeholder="github" validate={[required]} />
      {/* {props.users.github} */}
    </div>
    <div>
      <b>VK:</b>{' '}
      <Field component={Input} name="vk" placeholder="VK" validate={[required]} />
      {/* {props.users.vk} */}
    </div>
    <div>
      <b>Facebook:</b>{' '}
      <Field
        component={Input}
        name="facebook"
        placeholder="facebook"
        validate={[required]}
      />
      {/* {props.users.facebook} */}
    </div>
    <div>
      <b>Instagram: </b>{' '}
      <Field
        component={Input}
        name="instagram"
        placeholder="instagram"
        validate={[required]}
      />
      {/* {props.users.instagram} */}
    </div>
    <div>
      <b>Twitter: </b>{' '}
      <Field
        component={Input}
        name="twitter"
        placeholder="twitter"
        validate={[required]}
      />
      {/* {props.users.twitter} */}
    </div>
    {/* </div> */}
    {/*    <div> */}
    {/*        <div><b>Contacts:</b>
        {Object.keys(props.users.contacts).map(key => { */}
    {/*             return  <Contacts key={key}
        contactTitle={key} contactValue={props.users.contacts[key]} /> */}
    {/*        })}</div> */}
    {/*    </div> */}
    {/*    <div> */}
    {/* <Contacts {...props}/> */}
  </form>
);
ContactNewForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

const ContactNewReduxForm = reduxForm({
  form: 'contactForm',
})(ContactNewForm);

export default ContactNewReduxForm;
