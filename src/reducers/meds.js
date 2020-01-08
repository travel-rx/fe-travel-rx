export const meds = (state = [], action) => {
  switch (action.type) {
    case 'SET_MEDS':
      return action.meds
    default:
      return state;
  }
}