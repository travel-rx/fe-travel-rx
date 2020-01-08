export const getDrug = async (drug) => {
  const response = await fetch(`https://flask-travel-rx.herokuapp.com/api/v1/search?drug=${drug}`)
  if (!response.ok && response.status >= 500) {
     throw Error('Unable to find this medication. Please check the spelling and try again.')
  } else if (!response.ok && response.status < 500) {
     throw Error('Looks like a problem with the network. Please try again later.')
  }
  const names = await response.json();
  return names.generic_name
}

export const getMeds = async () => {
  const response = await fetch('https://flask-travel-rx.herokuapp.com/api/v1/user/1/medicines')
  if (!response.ok) {
    throw Error('Unable to retrieve medications. Try again later')
  }
  const meds = await response.json();
  return meds;
}

export const postMed = async (med) => {
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
  const response = await fetch('https://flask-travel-rx.herokuapp.com/api/v1/user/1/medicines', options)
  if (!response.ok) {
    throw Error('Unable to add medication at this time. Please try again later.')
  }
  const addedMeds = await response.json();
  return addedMeds;
}

export const deleteMed = async (id) => {
  const options = {
    method: 'DELETE',
    header: {
      'content-type': 'application/json'
    }
  }
  const response = await fetch(`https://flask-travel-rx.herokuapp.com/api/v1/user/1/medicines/${id}`, options)
  if (!response.ok) {
    throw Error('Unable to delete your medication. Please try again later.')
  }
  const cleanedMeds = await response.json();
  return cleanedMeds;

}