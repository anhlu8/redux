import reducerA from './reducerA';
import reducerB from './reducerB';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  reducerA,
  reducerB
});
export default reducer;
