import { combineReducers } from 'redux';
import noteReducer from './noteReducer';
import codeReducer from './codeReducer';

export default combineReducers({
  notes: noteReducer,
  codes: codeReducer,
});