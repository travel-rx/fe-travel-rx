import data from './data';

 export const getDrug = async (drug) => {
   const response = await fetch(`https://flask-travel-rx.herokuapp.com/api/v1/search?drug=${drug}`)
   if (!response.ok) {
     throw Error('Unable to get the Generic Name. Please try again later')
   }
  const names = await response.json();
  return names.generic_name
}

export const getMeds = async () => {
  //const response = await fetch('')
  // if (!response.ok) {
  //   thorw Error('Unable to retrieve medications. Try again later')
  // }
  // const meds = await response.json();
  const { meds } = data;
  return meds;

}

export const postMed = async (med) => {
  // const options = {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     name: med.name,
  //     generic_name: med.genericName,
  //     dosage_amt: med.dosage,
  //     frequency: parseInt(med.frequency),
  //     food: med.food,
  //     user_id: med.userId
  //   }),
  //   headers: {
  //     'content-type': 'application/json'
  //   }
  // }
  // const response = await fetch('url', options)
  // if (!response.ok) {
  //   throw Error('Unable to add medication at this time. Please try again later.')
  // }
  // const addedMeds = await response.json();

  const newMed = {
    name: med.name,
    generic_name: med.genericName,
    dosage_amt: med.dosage,
    frequency: med.frequency,
    food: med.food,
    user_id: med.userId
  }
  let addedMeds = [...data.meds, newMed]
  return addedMeds;
}

export const deleteMed = async (id) => {
  const options = {
    method: 'DELETE'
  }
  const response = await fetch(`url${id}`, options)
  if (!response.ok) {
    throw Error('Unable to delete your medication. Please try again later.')
  }
  const cleanedMeds = await response.json();
  return cleanedMeds;

}