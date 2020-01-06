export const user = (state = 'User', action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user
    default:
      return state
  }
}