import React from 'react';
import PropTypes from 'prop-types';

import Heading from './Heading';
import Text from './Text';
import Image from './Image';
import Undefined from './Undefined';

import styles from './Paragraph.module.scss';

const ParagraphTypes = {
  heading: Heading,
  text: Text,
  image: Image,
  und: Undefined,
};

const Paragraph = (props) => {
  const ParagraphComponent = ParagraphTypes[props.type]
    ? ParagraphTypes[props.type]
    : ParagraphTypes['und'];

  return (
    <div className={styles.wrapper}>
      <ParagraphComponent {...props} />
    </div>
  );
};

PropTypes.Paragraph = {
  type: PropTypes.string.isRequired,
};

export default Paragraph;
