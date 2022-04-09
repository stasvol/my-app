import React from 'react';
import PropTypes from 'prop-types';

const ContactUserNew = ({
  isOwnerNew,
  editContactNew,
  users: {
    fullName,
    aboutMe,
    LookingForAJobDescription,
    contacts,
    github,
    vk,
    facebook,
    instagram,
    twitter,
  },
}) => (
  <div>
    {isOwnerNew && <button onClick={editContactNew}>EDIT</button>}
    <div>
      <span>
        <b>Name :</b> {fullName}
      </span>
    </div>
    <div>
      <span>
        <b>About Me :</b> {aboutMe}
      </span>
    </div>
    <div>
      <span>
        <b>LookingForAJobDescription :</b> {LookingForAJobDescription}
      </span>
    </div>
    <div>
      <span>
        <b>Contacts :</b> {contacts}
      </span>
    </div>
    {/* <div> */}
    {/*    <div><b>Contacts:</b> {Object.keys(props
    .users.contacts).map(key => { */}
    {/* return  <Contacts key={key} contactTitle={key}
     contactValue={props.users.contacts[key]} /> */}
    {/*    })}</div> */}
    {/* </div> */}
    <div>
      <span>github: {github}</span>
    </div>
    <div>
      <span>VK: {vk}</span>
    </div>
    <div>
      <span>Facebook: {facebook}</span>
    </div>
    <div>
      <span>Instagram: {instagram}</span>
    </div>
    <div>
      <span>Twitter: {twitter}</span>
    </div>
  </div>
);
ContactUserNew.propTypes = {
  isOwnerNew: PropTypes.bool.isRequired,
  editContactNew: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      fullName: PropTypes.string,
      aboutMe: PropTypes.string,
      LookingForAJobDescription: PropTypes.string,
      contacts: PropTypes.arrayOf(
        PropTypes.shape({
          github: PropTypes.string,
          vk: PropTypes.string,
          facebook: PropTypes.string,
          instagram: PropTypes.string,
          twitter: PropTypes.string,
        }),
      ),
      // followed: PropTypes.bool,
      // name: PropTypes.string,
      // status: PropTypes.string,
    }),
  ).isRequired,
};

export default ContactUserNew;
