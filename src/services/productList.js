import { Endpoints } from '../constant/index';
import { convert, customFetch } from '../helpers/index';

export const getProdList = async(params, data) => {
  const setProdList = cats => {
    let newArr = cats.map((cat, i) => {
      return {
        area_kota: cat.area_kota,
        area_provinsi: cat.area_provinsi,
        komoditas: cat.komoditas,
        price: cat.price ? Number(cat.price.replace(/[.]+/g,"")) : cat.price,
        size: cat.size ? Number(cat.size.replace(/[.]+/g,"")) : cat.size,
        tgl_parsed: cat.tgl_parsed ,
        timestamp: cat.timestamp,
        uuid: cat.uuid,
      };
    });
    return newArr;
  };

  try {

    const response = await customFetch(`${Endpoints.url}${Endpoints.param.list}`, 'GET', data, false);

    if (response.data) {
      response.data = setProdList(response.data);
    } else {
      response.data = {};
    }
    return response
  } catch (error) {
    throw error;
  }
};

export const addProd = async(params, data) => {

  try {

    const response = await customFetch(`${Endpoints.url}${Endpoints.param.list}`, 'POST', data, false);

    if (response.data) {
      response.data = response.data;
    } else {
      response.data = {};
    }
    return response
  } catch (error) {
    throw error;
  }
};

export const getArea= async(params, data) => {
  const setArea = cats => {
    let payload = {
      cities: [],
      provinces: []
    }
    cats.forEach((cat, i) => {
      payload.cities.push(cat.city)
      payload.provinces.push(cat.province)
    });
    if(params && params.add) {
      return cats
    } else {
      return payload;
    }
  };

  try {

    const response = await customFetch(`${Endpoints.url}${Endpoints.param.area}`, 'GET', data, false);

    if (response.data) {
      response.data = setArea(response.data);
    } else {
      response.data = {};
    }
    return response
  } catch (error) {
    throw error;
  }
};

export const getSize= async(params, data) => {
  const setSize= cats => {
    let newArr = cats.map((cat, i) => {
      return cat.size
    });
    return newArr
  }

  try {

    const response = await customFetch(`${Endpoints.url}${Endpoints.param.size}`, 'GET', data, false);

    if (response.data) {
      response.data = setSize(response.data)
    } else {
      response.data = {};
    }
    return response
  } catch (error) {
    throw error;
  }
};