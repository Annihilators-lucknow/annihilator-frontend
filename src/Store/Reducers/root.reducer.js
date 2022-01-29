import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import cricketReducer from './cricket.reducer'

export default combineReducers({
  authReducer,
  cricketReducer
});