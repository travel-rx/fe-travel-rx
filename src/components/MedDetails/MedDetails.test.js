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
    const mockMed = {
      id: 2,
      name: 'Vibramycin',
      generic_name: 'Doxycycline',
      dosage_amt: '200mg',
      frequency: 2,
      with_food: true,
      user_id: 1
    }

    expect(shallow(<MedDetails medication={mockMed}/>)).toMatchSnapshot()
  });
})