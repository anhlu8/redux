const initialState = {
  b: 3
};

const reducerB = (state = initialState, action) => {
  if (action.type === 'UPDATE_B') {
    return {
      ...state,
      b: state.b + action.a
    };
  }
  return state;
};

export default reducerB;
