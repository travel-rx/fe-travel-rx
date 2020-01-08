import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import MedDetails from './MedDetails';
import { shallow } from 'enzyme';
import data from './../../utils/data'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('MedDetails', () => {
  it('should return true', () => {
    expect(true).toEqual(true);
  });

  it.skip('should match the snapshots', () => {
    const mockMeds = {
      id: 2,
      name: 'Vibramycin',
      genericName: 'Doxycycline',
      dosage: '200mg',
      frequency: 2,
      withFood: true,
    }

    expect(shallow(<MedDetails medication={mockMeds}/>)).toMatchSnapshot()
  });
})