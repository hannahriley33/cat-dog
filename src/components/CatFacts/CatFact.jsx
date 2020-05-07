import React from 'react';
import PropTypes from 'prop-types';

const CatFact = ({ fact }) => (
  <p>
    <span>{fact}</span>
  </p>
);

CatFact.propTypes = {
  fact: PropTypes.string.isRequired
};

export default CatFact;
