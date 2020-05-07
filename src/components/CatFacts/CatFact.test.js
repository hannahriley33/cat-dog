import React from 'react';
import { shallow } from 'enzyme';
import CatFact from './CatFact';

describe('CatFact component', () => {
  it('matches snapshot', () => {
    const fact = [
      { text: 'this is a fact', _id: '12345' } 
    ];
    const wrapper = shallow(<CatFact fact={fact} />);
    expect(wrapper).toMatchSnapshot();
  });
});
