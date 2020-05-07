import React, { useState, useEffect } from 'react';
import CatFactList from '../components/CatFacts/CatFactList';
import { fetchCatFacts } from '../services/FetchCatFacts';


const CatFactsContainer = () => {

  const [catFacts, setCatFacts] = useState([]);
  const [page, setPage] = useState(1);

  const pageChanger = (upDown) => {
    setPage(prevPage => prevPage + upDown);
  };
  
  useEffect(() => {
    fetchCatFacts()
      .then(res => setCatFacts(res));
  }, []);

  return (
    <section>
      <button onClick={() => pageChanger(1)} disabled={page * 10 >= catFacts.length}>&gt;</button>
      <button onClick={() => pageChanger(-1)} disabled={page === 1}>&lt;</button>
      <CatFactList catFacts={catFacts.slice((page - 1) * 10, page * 10)} />
    </section>
  );
};

export default CatFactsContainer;
