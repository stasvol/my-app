import React from 'react';
import PropTypes from 'prop-types';

export const ContactsNew = ({ contactTitle, contactValue }) => (
  <div>
    <b>{contactTitle}</b> : {contactValue}{' '}
  </div>
);

ContactsNew.propTypes = {
  contactTitle: PropTypes.string.isRequired,
  contactValue: PropTypes.string.isRequired,
};
