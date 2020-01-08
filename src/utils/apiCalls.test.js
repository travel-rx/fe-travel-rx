import { getDrug, getMeds, postMed, deleteMed } from './apiCalls';
import data from './data';

const mockMeds = data.meds;
const mockDrug = {
  name: 'Phenergan',
  generic_name: 'Promethazine'
}

describe('getDrug', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockDrug)
      })
    })
  });

  it('should call getDrug with the correct url', () => {
    getDrug('Phenergan')
    expect(window.fetch).toHaveBeenCalledWith('https://flask-travel-rx.herokuapp.com/api/v1/search?drug=Phenergan');
  });

  it('should return an object with the drug name and generic name', () => {
    expect(getDrug('Pheneragan')).resolves.toEqual(mockDrug);
  })

  it('should throw and error if the resonse is', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });

    expect(getDrug()).rejects.toEqual(Error('Unable to find this medication. Please check the spelling and try again.'));
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Looks like a problem with the network. Please try again later.'))
    });

    expect(getDrug()).rejects.toEqual(Error('Looks like a problem with the network. Please try again later.'));
  });

})

describe('getMeds', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMeds)
      })
    })
  });

  it('should call getDrug with the correct url', () => {
    getMeds()
    expect(window.fetch).toHaveBeenCalledWith('https://flask-travel-rx.herokuapp.com/api/v1/user/1/medicines');
  });

  it('should return an object with the drug name and generic name', () => {
    expect(getMeds()).resolves.toEqual(mockMeds);
  })

  it('should throw and error if the resonse is', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });

    expect(getMeds()).rejects.toEqual(Error('Unable to retrieve medications. Try again later'));
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'))
    });

    expect(getMeds()).rejects.toEqual(Error('fetch failed'));
  });

})