import React from 'react';
import PropTypes from 'prop-types';

const CatFact = ({ fact }) => (
  <li>
    <p>{fact}</p>
  </li>
);

CatFact.propTypes = {
  fact: PropTypes.string.isRequired
};

export default CatFact;
