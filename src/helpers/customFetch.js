/* eslint-disable no-undef */

import {axios} from '../constant/index'

const customFetch = async(url, method, data) => {

  try {
    let response = null

    if(method === 'POST') {
      response = await axios.post(url, JSON.stringify(data))
    } else {
      response = await axios.get(url)
    }

    switch (response.status) {
      case 500:
        break;

      case 404:
        return await response;

      case 403:
        break;
      case 401:
        return await response;

      case 400:
        return await response;

      default:
        return await response;
    }
  } catch (err) {
    throw err;
  }
};
export default customFetch;
