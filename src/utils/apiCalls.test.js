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

  it('should throw and error if the resonse is not ok', () => {
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

  it('should call getMeds with the correct url', () => {
    getMeds()
    expect(window.fetch).toHaveBeenCalledWith('https://flask-travel-rx.herokuapp.com/api/v1/user/1/medicines');
  });

  it('should return an array of meds', () => {
    expect(getMeds()).resolves.toEqual(mockMeds);
  })

  it('should throw and error if the response is not ok', () => {
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

describe('postMed', () => {
  const med = {
    name: 'Xanax',
    generic_Name: 'ALPRAZOLAM',
    dosage: '20mg',
    frequency: 2,
    food: false,
    userId: 1
  }
  
  const newMed = {
    id: 1,
    name: 'Xanax', 
    generic_name: 'ALPRAZOLAM',
    dosage_amt: '20mg',
    frequency: 2,
    with_food: false,
    user_id: 1
  }

  const mockResponse = [...mockMeds, newMed];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  });

  it('should call postMed with the correct url and options', () => {
    postMed(med)
    const options = {
      method: 'POST',
      body: JSON.stringify({
        name: med.name,
        generic_name: med.genericName,
        dosage_amt: med.dosage,
        frequency: parseInt(med.frequency),
        with_food: med.food,
        user_id: med.userId
      }),
      headers: {
        'content-type': 'application/json'
      }
    }
    expect(window.fetch).toHaveBeenCalledWith('https://flask-travel-rx.herokuapp.com/api/v1/user/1/medicines', options);
  });

  it('should return an array of meds including the added med', () => {
    expect(postMed(med)).resolves.toEqual(mockResponse);
  })

  it('should throw and error if the response is', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });

    expect(postMed(med)).rejects.toEqual(Error('Unable to add medication at this time. Please try again later.'));
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'))
    });

    expect(postMed(med)).rejects.toEqual(Error('fetch failed'));
  });

})

describe('deleteMed', () => {
  const id = 1;
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve()
      })
    })
  });

  it('should call deleteMed with the correct url and options', () => {
    deleteMed(id)
    expect(window.fetch).toHaveBeenCalledWith(`https://flask-travel-rx.herokuapp.com/api/v1/user/1/medicines/${id}`, { method: 'DELETE'});
  });

  it('should throw and error if the repsonse is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });

    expect(deleteMed(id)).rejects.toEqual(Error('Unable to delete your medication. Please try again later.'));
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'))
    });

    expect(deleteMed(id)).rejects.toEqual(Error('fetch failed'));
  });

})

