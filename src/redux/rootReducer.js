// Import the 'combineReducers' function from Redux to combine multiple reducers into one root reducer.
import {combineReducers} from 'redux';

// Import the 'reducer' and 'userReducer' from their respective files.
import {reducer} from './reducer';
import {userReducer} from './userReducer';

// Combine the 'reducer' and 'userReducer' using the 'combineReducers' function to create the rootReducer.
export default combineReducers({
  cart: reducer,
  userList: userReducer,
});
