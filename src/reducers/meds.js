export const meds = (state = [], action) => {
  switch (action.type) {
    case 'SET_MEDS':
      return action.meds
    case 'ADD_MED':
      return state.push(med)
    case 'DELETE_MED':
      return state.filter(med => med.id != action.med.id)
    default:
      return state;
  }
}