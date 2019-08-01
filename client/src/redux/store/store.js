import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// import reducer from '../reducers/reducer';
import reducer1 from '../reducers/reducers1';
import { logAction } from '../middlewares/middleware';
import { watchAgeUp } from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducer);
const store = createStore(
  reducer1,
  //   applyMiddleware(logAction, thunk, sagaMiddleware)
  applyMiddleware(logAction, sagaMiddleware)
);
sagaMiddleware.run(watchAgeUp);
export default store;
