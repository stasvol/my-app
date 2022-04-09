import React from 'react';
import PropTypes from 'prop-types';

export const Contact = ({ contactTitle, contactValue }) => (
  <div>
    <b>{contactTitle}</b> : {contactValue}{' '}
  </div>
);
Contact.propTypes = {
  contactTitle: PropTypes.string.isRequired,
  contactValue: PropTypes.string.isRequired,
};
