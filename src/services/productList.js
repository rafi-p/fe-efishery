import { Endpoints } from '../constant/index';
import { convert } from '../helpers/index';
import { customFetch } from '../helpers/index';

export const getProdList = async(params, data) => {
  const setProdList = cats => {
    let newArr = cats.map((cat, i) => {

      return {
        area_kota: cat.area_kota ? cat.area_kota : '-',
        area_provinsi: cat.area_provinsi ? cat.area_provinsi : '-',
        komoditas: cat.komoditas ? cat.komoditas : '-',
        price: cat.price ? convert.customNum(cat.price) : '-',
        size: cat.size ? convert.customNum(cat.size, true) : '-',
        tgl_parsed: cat.tgl_parsed ? convert.customDateFormat(cat.tgl_parsed) : '-',
        timestamp: cat.timestamp ? cat.timestamp : '-',
        uuid: cat.uuid ? cat.uuid : '-',
      };
    });
    return newArr;
  };

  try {

    const response = await customFetch(`${Endpoints.url}${Endpoints.param.list}`, 'GET', data, false);
    // const res = await response.json();

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