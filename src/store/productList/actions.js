/* eslint-disable no-undef */
import * as prodListServices from '../../services/productList';

import actionTypes from './actionTypes';

export const getProdListSuccess = payload => ({
  type: actionTypes.GET_PRODLIST_SUCCESS,
  payload: { ...payload },
});

export const getAreaSuccess = payload => ({
  type: actionTypes.GET_AREA_SUCCESS,
  payload: { ...payload },
});

export const getSizeSuccess = payload => ({
  type: actionTypes.GET_SIZE_SUCCESS,
  payload: { ...payload },
});

export const sortingProductSuccess = payload => ({
  type: actionTypes.SORT_DATA,
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

export const addProd = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    const apiFetch = await prodListServices.addProd(params, body);

    const { status, data, statusText } = apiFetch;

    if (status === 200) {
      resolve(dispatch(getProdListSuccess({ data: data })));
    } else {
      reject(statusText);
    }
  });
};

export const getArea = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    const apiFetch = await prodListServices.getArea(params, body);

    const { status, data, statusText } = apiFetch;

    if (status === 200) {
      resolve(dispatch(getAreaSuccess({ data: data })));
    } else {
      reject(statusText);
    }
  });
};

export const getSize = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    const apiFetch = await prodListServices.getSize(params, body);

    const { status, data, statusText } = apiFetch;

    if (status === 200) {
      resolve(dispatch(getSizeSuccess({ data: data })));
    } else {
      reject(statusText);
    }
  });
};