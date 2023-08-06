// Import the action type constant 'SET_USER_DATA' from './constants'.
import {SET_USER_DATA} from './constants';

// Define the initial state of the user data as an empty array.
const initialState = [];

// Create the 'userReducer' function to handle actions related to user data.
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // When the 'SET_USER_DATA' action is dispatched, update the state with the new user data from the 'action.data'.
    case SET_USER_DATA:
      return [action.data];
    default:
      return state;
  }
};
