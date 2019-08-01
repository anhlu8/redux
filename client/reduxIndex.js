const { createStore } = require('redux');

const initialState = {
  age: 20
};

const myReducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === 'ADD') {
    newState.age += action.val;
  }
  if (action.type === 'MINUS') {
    newState.age -= action.val;
  }
  return newState;
};

const store = createStore(myReducer);
store.subscribe(() => {
  console.log('subscribed to state', store.getState());
});

store.dispatch({ type: 'ADD', val: 10 });
store.dispatch({ type: 'ADD', val: 5 });
store.dispatch({ type: 'ADD', val: 5 });
store.dispatch({ type: 'MINUS', val: 15 });
