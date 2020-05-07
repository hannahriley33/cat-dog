import React from 'react';
import Toggle from '../Toggle/Toggle';
import { useLightDark, useToggle } from '../Hooks/LightDarkProvider';

const Header = () => {
  const lightDark = useLightDark();
  const toggle = useToggle();

  return (
    <section>
      <h1>Cat Facts</h1>
      <Toggle value={lightDark === 'light'} toggle={toggle} />
    </section>
  );
};

export default Header;
