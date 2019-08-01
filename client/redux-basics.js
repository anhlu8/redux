const redux = require('redux');
const createStore = redux.createStore;

// const initialState = 1;
const initialState = {
  counter: 0
};
// Reducer: reducers produce the state of your application. A reducer takes two parameters: the current state and an action
const rootReducer = (currentState = initialState, action) => {
  if (action.type === 'INCREASE_COUNTER') {
    return {
      ...currentState,
      counter: currentState.counter + 1
    };
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...currentState,
      counter: currentState.counter + action.value
    };
  }
  return currentState;
};
// Store
const store = createStore(rootReducer); //createStore takes a reducer as the first argument and in our case we passed in rootReducer.
console.log('this is current store', store.getState()); //as soon as the store receives an action it triggers a reducer
// Subscription: subscribe for listening on state changes
store.subscribe(() => {
  console.log('subscription', store.getState());
});
// Dispatching
store.dispatch({ type: 'INCREASE_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log('this is store in dispatching', store.getState());

// The second principle of Redux says the only way to change the state is by sending a signal to the store.This signal is an action. “Dispatching an action” is the process of sending out a signal.
//third principle of Redux? The state is immutable and cannot change in place.

// getState for accessing the current state of the application
// dispatch for dispatching an action
// subscribe for listening on state changes

// What does mapStateToProps do in react-redux? mapStateToProps does exactly what its name suggests: it connects a part of the Redux state to the props of a React component. By doing so a connected React component will have access to the exact part of the store it needs.
// And what about mapDispatchToProps? mapDispatchToProps does something similar, but for actions. mapDispatchToProps connects Redux actions to React props. This way a connected React component will be able to dispatch actions.
