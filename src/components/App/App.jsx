import React from 'react';
import CatFactsContainer from '../../containers/CatFactsContainer';
import { LightDarkProvider } from '../Hooks/LightDarkProvider';
import Header from '../Header/Header';


export default function App() {
  return (
    <LightDarkProvider>
      <Header />
      <CatFactsContainer />
    </LightDarkProvider>
  );
}

