// Import necessary modules from Redux Saga.
import {put, takeEvery} from 'redux-saga/effects';
import {SET_USER_DATA, USER_LIST} from './constants';

// Define the generator function 'userList' to handle fetching user data from an external source.
function* userList() {
  const url = 'https://dummyjson.com/users';
  let data = yield fetch(url);
  data = yield data.json();
  yield put({type: SET_USER_DATA, data});
}

// Define the generator function 'SagaData' to handle watching for the 'USER_LIST' action and triggering the 'userList' generator function.
function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}

// Export the 'SagaData' generator function.
export default SagaData;
