import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ content }) => <p>{content}</p>;

Text.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Text;
