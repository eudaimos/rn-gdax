import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
// import { PublicClient } from 'gdax';
import * as api from '../../lib/api';
import * as types from './types';
import * as actions from './actions';

// const gdaxClient = new PublicClient();

function* fetchProducts() {
  try {
    // const products = yield call(gdaxClient.getProducts);
    const products = yield call(api.getProducts);
    yield put(actions.productsList());
  }
  catch (err) {
    yield put(actions.productsError(err));
  }
}

function* productsSaga() {
  yield takeLatest(types.PRODUCTS_FETCH, fetchProducts);
}

export default productsSaga;