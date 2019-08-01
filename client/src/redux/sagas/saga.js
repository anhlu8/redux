import { takeEvery, put } from 'redux-saga/effects';

function* ageUpAsync() {
  yield put({ type: 'AGE_UP_ASYNC', value: 1 });
}

export function* watchAgeUp() {
  yield takeEvery('AGE_UP', ageUpAsync);
}
