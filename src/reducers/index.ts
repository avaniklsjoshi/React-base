import { combineReducers } from 'redux';
import user from './user.reducer';
import counter from './counter.reducer';

const rootReducer = combineReducers({
  user,
  counter,
});

export default rootReducer;
