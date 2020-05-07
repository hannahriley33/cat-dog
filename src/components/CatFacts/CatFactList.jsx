import React from 'react';
import PropTypes from 'prop-types';
import CatFact from '../CatFacts/CatFact';
import { useLightDark } from '../Hooks/LightDarkProvider';
import stylesLight from '../CatFacts/stylesLight.css';
import stylesDark from '../CatFacts/stylesDark.css';


const CatFactList = ({ catFacts }) => {

  const lightDark = useLightDark(); 

  const catFactsToList =  catFacts.map(fact => (
    <li key={`${fact.id}`}>
      <CatFact {...fact} />
    </li>
  ));

  const stylesToUse = lightDark === 'dark' ? stylesDark : stylesLight;

  return (
    <ul className={stylesToUse.StyleClass}>
      {catFactsToList}
    </ul>

  );
};

CatFactList.propTypes = {
  catFacts: PropTypes.arrayOf(PropTypes.shape({
    fact: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }))
};

export default CatFactList;
