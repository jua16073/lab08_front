import {
  call,
  takeEvery,
  put,
} from 'redux-saga/effects';

import { saveChisme } from '../api/users';
import * as types from '../types';
import * as actions from '../actions/users';


function* addChismeGenerator(action) {
  const {
    payload: {
      titulo,
      contenido
    }
  } = action;

  const returnedChisme = yield call(
    saveChisme,
    titulo,
    contenido,
  );

  yield put(actions.confirmChisme(id));
}


export function* watchChismeCreation() {
  yield takeEvery(
    types.POST_ADDED,
    addChismeGenerator,
  );
}
