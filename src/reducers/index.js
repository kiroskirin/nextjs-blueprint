const initialState = {
  name: null
};

export const reducer = (state = initialState, action) => {
  switch (action) {
    case 'LOGIN':
    return { ...state, name: 'username' }
    default:
      return state;
  }
};
