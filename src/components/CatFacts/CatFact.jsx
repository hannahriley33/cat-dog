import React from 'react';
import PropTypes from 'prop-types';

const CatFact = ({ fact }) => (
  <p>
    <span>{fact}</span>
  </p>
);

CatFact.propTypes = {
  fact: PropTypes.array.isRequired
};

export default CatFact;
