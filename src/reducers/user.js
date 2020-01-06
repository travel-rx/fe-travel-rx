export const user = (state = 'amy', action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user
    default:
      return state
  }
}