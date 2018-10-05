import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchUser() {
  console.log('--fetch user');
}

function* mySaga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
}

export default mySaga;
