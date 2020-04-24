import React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.module.scss';

const Image = (props) => <img {...props} className={styles.image} />;

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

Image.defaultProps = {
  src: 'http://lorempixel.com/500/200/',
};

export default Image;
