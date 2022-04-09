import React from 'react';
import PropTypes from 'prop-types';

import { Contact } from './Contact';

import classes from './ProfilInfo.module.css';
import smail from '../../../Photo/Images/smail.png';

const ProfData = ({
  isOwner,
  goToEditMode,
  profile: { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts },
}) => (
  <div>
    {isOwner && <button onClick={goToEditMode}>Edit</button>}
    <div>
      <b>FullName</b> : {fullName}
    </div>
    <div>
      <b>About Me</b> : {aboutMe}{' '}
    </div>
    <div>
      <b>LookingForAJob</b> : {lookingForAJob ? 'Yes' : 'No'}
      <img alt="" className={classes.smail} src={smail} />
    </div>
    {lookingForAJob && (
      <div>
        <b>My professional skills</b> : {lookingForAJobDescription}
      </div>
    )}
    <h4>
      <b>Contacts</b> :{' '}
    </h4>{' '}
    {Object.keys(contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={contacts[key]} />;
    })}
    {/* <div> Facebook : {props.profile.contacts.facebook}</div> */}
    {/* <div> VK : {props.profile.contacts.vk}</div> */}
    {/* <div> Twitter : {props.profile.contacts.twitter}</div> */}
    {/* <div> Instagram : {props.profile.contacts.instagram}</div> */}
    {/* <div> Git Hub : {props.profile.contacts.github}</div> */}
    {/* <div> Youtube : {props.profile.contacts.Youtube}</div> */}
    {/* <div>MainLink : {props.profile.mainLink}</div> */}
    {/* <div> FullName : {props.profile.fullName}</div> */}
    {/* <div>Photos : {props.profile.photos} </div> */}
  </div>
);
ProfData.propTypes = {
  isOwner: PropTypes.bool.isRequired,
  goToEditMode: PropTypes.func.isRequired,
  profile: PropTypes.arrayOf(
    PropTypes.shape({
      fullName: PropTypes.string,
      aboutMe: PropTypes.string,
      lookingForAJob: PropTypes.string,
      lookingForAJobDescription: PropTypes.string,
      contacts: PropTypes.string,
    }),
  ).isRequired,
};

export default ProfData;
