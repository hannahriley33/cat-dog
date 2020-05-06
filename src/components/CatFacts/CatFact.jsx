import React from 'react';
import PropTypes from 'prop-types';

const CatFact = ({ fact, status }) => (
  <section>
    <p>{fact}</p>
    <p>status: {status ? 'true' : 'false'}</p>
  </section>
);

CatFact.propTypes = {
  fact: PropTypes.string.isRequired,
  status: PropTypes.string
};

export default CatFact;
