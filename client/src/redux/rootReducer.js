import {combineReducers} from 'redux'
import authReducer from './auth/authReducers'
import chatAreaReducer from './chatArea/chatAreaReducer';
import leftPanelReducer from './leftPanel/leftPanelReducer';
import searchReducer from './searchResult/reducer'


const rootReducer = combineReducers({
  auth: authReducer,
  searchResult: searchReducer,
  chatArea: chatAreaReducer,
  leftPanel: leftPanelReducer
});

export default rootReducer;