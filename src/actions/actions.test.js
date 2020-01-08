import * as actions from './index';
import data from './../utils/data';

describe('actions', () => {
  it('should have a type of SET_MEDS', () => {
    const mockMeds = data.meds
    const expectedAction = {
      type: 'SET_MEDS',
      meds: mockMeds
    }
    const result = actions.setMeds(mockMeds)

    expect(result).toEqual(expectedAction)
  })
})