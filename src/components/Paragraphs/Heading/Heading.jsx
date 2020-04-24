import React, { createElement } from 'react';
import PropTypes from 'prop-types';

const Heading = ({ level, text }) => createElement(`${level}`, null, text);

Heading.propTypes = {
  level: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  level: 'h1',
  text: 'Heading',
};

export default Heading;
