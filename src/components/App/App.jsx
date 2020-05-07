import React from 'react';
import CatFactsContainer from '../../containers/CatFactsContainer';
import { LightDarkProvider } from '../Hooks/LightDarkProvider';


export default function App() {
  return (
    <LightDarkProvider>
      <CatFactsContainer />
    </LightDarkProvider>
  );
}

