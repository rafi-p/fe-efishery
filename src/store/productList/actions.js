/* eslint-disable no-undef */
import * as prodListServices from '../../services/productList';

import actionTypes from './actionTypes';

export const getProdListSuccess = payload => ({
  type: actionTypes.GET_PRODLIST_SUCCESS,
  payload: { ...payload },
});

export const getProdList = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    const apiFetch = await prodListServices.getProdList(params, body);

    const { status, data, statusText } = apiFetch;

    if (status === 200) {
      resolve(dispatch(getProdListSuccess({ data: data })));
    } else {
      reject(statusText);
    }
  });
};