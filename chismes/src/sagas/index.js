import { fork, all } from 'redux-saga/effects';

import { watchChismeCreation } from './users';


function* mainSaga() {
  yield all([
    fork(watchChismeCreation),
  ]);
}

export default mainSaga