// Import action type constants 'ADD_TO_CART', 'REMOVE_FROM_CART', and 'USER_LIST' from './constants'.
import {ADD_TO_CART, REMOVE_FROM_CART, USER_LIST} from './constants';

// Define action creator functions 'addTocart', 'removeFromCart', and 'getUserList'.

// 'addTocart' action creator adds an item to the cart with 'item' as the payload data.
export function addTocart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

// 'removeFromCart' action creator removes an item from the cart with 'item' as the payload data.
export function removeFromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    data: item,
  };
}

// 'getUserList' action creator returns an action of type 'USER_LIST'.
// It is used to trigger fetching the user list data from an external source.
export function getUserList() {
  return {
    type: USER_LIST,
  };
}
