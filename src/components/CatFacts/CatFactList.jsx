import React from 'react';
import PropTypes from 'prop-types';
import CatFact from '../CatFacts/CatFact';

const CatFactList = ({ catFacts }) => {
  const catFactsToList =  catFacts.map(fact => (
    <li key={`${fact.id}`}>
      <CatFact {...fact} />
    </li>
  ));

  return (
    <section>
      <ul>
        {catFactsToList}
      </ul>
    </section>
  );
};

CatFactList.propTypes = {
  catFacts: PropTypes.arrayOf(PropTypes.shape({
    fact: PropTypes.string.isRequired,
    status: PropTypes.string,
    id: PropTypes.string.isRequired
  }))
};

export default CatFactList;
