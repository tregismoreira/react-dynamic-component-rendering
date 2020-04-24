import React, { createElement } from 'react';
import PropTypes from 'prop-types';

const Heading = ({ level, content }) =>
  createElement(`${level}`, null, content);

Heading.propTypes = {
  level: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  level: 'h1',
  content: 'Heading',
};

export default Heading;
