import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import {
  CustomInput
} from '../../components/index'
import {
  Images
} from '../../constant/index'
import { v4 as uuid } from 'uuid';
import { convert } from '../../helpers/index';
import { toast } from 'react-toastify';
import * as prodListActions from '../../store/productList/actions';

const AddProduct = props => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [comodity, setComodity] = useState('')
  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [dataProvince, setDataProvince] = useState([])
  const [dataCity, setDataCity] = useState([])

  const dataArea = useSelector(state => state.prodList.dataArea);
  const getArea = dispatch(prodListActions.getArea);
  const dataSize = useSelector(state => state.prodList.dataSize);
  const getSize = dispatch(prodListActions.getSize);
  const addProd = dispatch(prodListActions.addProd);

  useEffect(() => {
    getArea({add: true})
    getSize()
  }, [])

  useEffect(() => {
    let temp = []
    if(Array.isArray(dataArea)) {
      dataArea.forEach((el, i) => {
        if(!temp.includes(el.province)) {
          temp.push(el.province)
        }
      })
    }
    setDataProvince(temp)
  }, [dataArea])

  useEffect(() => {
    let temp = []
    if(province && Array.isArray(dataArea)) {
      temp = dataArea.filter(el => el.province === province)
      temp = temp.map((el,i) => el.city)
    }
    setDataCity(temp)
  }, [province])

  useEffect(() => {
    if(price) {
      let arr = price.split('')
      let first = ''
      if(arr[0] === '0') {
        first = arr.shift();
      }
      setPrice(arr.join(''))
    }
  },[
    price
  ])

  const disabled = () => {
    if(
      !comodity ||
      !province ||
      !city ||
      !size ||
      !price
    ) {
      return true
    }
  }

  const submit = () => {
    const currentDate = new Date();
    const payload = [{
      uuid: uuid(),
      area_provinsi: province,
      area_kota: city,
      size,
      price: price,
      komoditas: comodity,
      tgl_parsed: currentDate.toISOString(),
      timestamp: currentDate.getTime()
    }];
    setLoading(true)
    addProd({}, payload)
    .then(res => {
      toast.success("Success Adding Product!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
      let order= {
        category: 'tgl_parsed',
        asc: false
      }
      props.history.push({
        pathname: '/',
        state: { order: order}
      })
    })
    .catch(err => {
    })
    .finally(() => {setLoading(false)})
  }

  return (
    <div className='container-dashboard'>
      <div className="wrapper-content-addProd">
        <div className="heading">
          <div
            className='container-img'
            onClick={() => {props.history.push('/')}}
          >
            <img src={Images.back} alt="" />
          </div>
          Add Product
        </div>
        <div className="wrapper-input">
          <CustomInput
            label='Comodity'
            onChange={(e) => (setComodity(e.target.value))}
            value={comodity}
          />
          <CustomInput
            isDropdown = {true}
            label='Province'
            onChange={(e) => (setProvince(e.target.value))}
            value={province}
            data={dataProvince}

          />
          <CustomInput
            isDropdown = {true}
            label='City'
            onChange={(e) => (setCity(e.target.value))}
            value={city}
            data={dataCity}
          />
          <CustomInput
            isDropdown = {true}
            label='Size'
            onChange={(e) => (setSize(e.target.value))}
            value={size}
            data={dataSize}
          />
          <CustomInput
            label='Price'
            onChange={(e) => (setPrice(e.target.value))}
            value={price}
          />
        </div>
        <div
          className={`btn-custom cust-width-btn ${
            disabled() || loading
            ? 'disabled'
            : ''
          }`}
          onClick={() => { submit() }}
        >
          {'Submit'}
        </div>
      </div>
    </div>
  );

};

export default AddProduct;
