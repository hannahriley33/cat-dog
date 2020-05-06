export const fetchCatFacts = () => {
  return fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10')
    .then(res => res.json())
    
    .then(json => json.map(fact => ({
      fact: fact.text,
      status: fact.status.verified,
      id: fact._id
    })));
    
};


