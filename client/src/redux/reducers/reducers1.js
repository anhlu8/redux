const initialState = {
  age: 20,
  history: []
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'AGE_UP_ASYNC':
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.value
        })
      };

    case 'AGE_DOWN':
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.value
        })
      };
    case 'DEL_ENTRY':
      return {
        ...state,
        history: newState.history.filter(el => el.id !== action.id)
      };
  }
  return newState;
};

export default reducer;
