import React, { useState, useEffect } from 'react';
import CatFactList from '../components/CatFacts/CatFactList';
import { fetchCatFacts } from '../services/FetchCatFacts';


const CatFactsContainer = () => {

  const [catFacts, setCatFacts] = useState([]);

  useEffect(() => {
    fetchCatFacts()
      .then(res => setCatFacts(res));
  }, []);

  return (
    <section>
    
      <CatFactList catFacts={catFacts} />
    </section>
  );
};

export default CatFactsContainer;
