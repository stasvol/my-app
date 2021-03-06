import React from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { createField, Input, Textarea } from '../../Common/FormControl/formComponent';

import classes from './ProfilInfo.module.css';

const ProfDataForm = ({ error, profile: { contacts }, ...props }) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Save</button>

      {error ? (
        <div className={classes.formError}>{error}</div>
      ) : (
        <div>
          <b>FullName</b> : {createField('FullName', 'fullName', [], Input)}
        </div>
      )}

      <div>
        <b>LookingForAJob</b> :{' '}
        {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
        {/*  {props.profile.lookingForAJob ? 'Yes' : 'No'} */}
        {/* <img className={classes.smail} src={smail} alt={'image'}/> */}
      </div>
      {/*    {props.profile.lookingForAJob && */}
      <div>
        <b>My professional skills</b> :
        {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        {/*        {props.profile.lookingForAJobDescription}</div>{/*    } */}
      </div>
      <div>
        <b>About Me</b> : {createField('About Me', 'aboutMe', [], Textarea)}
        {/*        {props.profile.aboutMe}</div> */}
      </div>
      <div>
        <h4>
          <b>Contacts</b> :{' '}
        </h4>{' '}
        {Object.keys(contacts).map(key => {
          return (
            <div key={key}>
              <i>{key} : </i>
              {createField(key, `contacts.${key}`, [], Input)}
            </div>
          );
        })}
        {/* return <Contact key={key} contactTitle={key}
        contactValue={props.profile.contacts[key]}/>})} */}
      </div>
    </form>
  );
};
ProfDataForm.propTypes = {
  error: PropTypes.string.isRequired,
  profile: PropTypes.arrayOf(PropTypes.shape({ contacts: PropTypes.string })).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
const ProfDataFormReduxForm = reduxForm({ form: 'editProfile' })(ProfDataForm);

export default ProfDataFormReduxForm;
