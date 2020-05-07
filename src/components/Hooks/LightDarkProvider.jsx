import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const LightDarkContext = createContext();

export const LightDarkProvider = ({ children }) => {
  
  const [lightDark, setLightDark] = useState('light');

  const toggle = ({ target }) => {
    console.log('!!!!!!');
    console.log(lightDark);
    if(!target.checked) setLightDark('dark');
    if(target.checked) setLightDark('light');
  };
  //this is when ryan said the value in the provider needs 2 things
  // provide checked state (light/dark)
  // provide way to change checked state

  return (
    <LightDarkContext.Provider value={{ lightDark, toggle }}>
      {children}
    </LightDarkContext.Provider>
  );
};

LightDarkProvider.propTypes = {
  children: PropTypes.node
};

export const useLightDark = () => {
  const lightDark = useContext(LightDarkContext);
  return lightDark;
};

export const useToggle = () => {
  const { toggle } = useContext(LightDarkContext);
  return toggle;
};
