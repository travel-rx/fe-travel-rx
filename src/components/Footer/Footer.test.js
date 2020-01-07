import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import { Footer } from './Footer';
import { shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Footer', () => {
  it.only('should return true', () => {
    expect(true).toEqual(true);
  })
})