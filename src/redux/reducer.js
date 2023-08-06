// Import the action type constants 'ADD_TO_CART' and 'REMOVE_FROM_CART' from './constants'.
import {ADD_TO_CART, REMOVE_FROM_CART} from './constants';

// Define the initial state of the cart as an empty array.
const initialState = [];

// Create the 'reducer' function to handle actions related to the cart.
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // When the 'ADD_TO_CART' action is dispatched, add the 'action.data' (item) to the cart.
    case ADD_TO_CART:
      return [...state, action.data];
    // When the 'REMOVE_FROM_CART' action is dispatched, remove the item with the matching 'action.data' (item.id) from the cart.
    case REMOVE_FROM_CART:
      let result = state.filter(item => {
        return item.id != action.data;
      });
      return [...result];
    default:
      return state;
  }
};
