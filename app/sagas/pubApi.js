/*
 * @Author: Lockie
 * @Date: 2017-03-27 17:45:52
 * @Last Modified by: laijie
 * @Last Modified time: 2017-06-28 15:58:16
 */

import { fork, take, put } from 'redux-saga/effects';
import { pubApiActions, popupActions } from '../actions';

function* watchAd() {
  while (true) {
    const response = yield take('pubApi/test/ad/success');
    console.log(response); //包含了req和res
  }
}

export default function* () {
  yield fork(watchAd);
}
