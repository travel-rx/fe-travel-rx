import React from 'react';
import 'react-native';
import { Home } from './Home';
import { shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Home', () => {
  it('should return true', () => {
    expect(true).toEqual(true);
  });

  it('should match the snapshot', () => {
    expect(shallow(<Home />)).toMatchSnapshot()
  })
})