import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import {
  CustomBtn,
  CustomFilter
} from '../../components/index'
import {
  Images
} from '../../constant/index'
import * as prodListActions from '../../store/productList/actions';

const Dashboard = props => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)

  const dataProdList = useSelector(state => state.prodList.data);
  const getProdList = dispatch(prodListActions.getProdList);

  useEffect(() => {
    setLoading(true)
    getProdList()
    .then(res => {})
    .catch(err => {})
    .finally(() => {
      setLoading(false)
    })
  },[])

  const sortData = [
    {
      label: 'Comodity',
      value: 'komoditas'
    },
    {
      label: 'Size',
      value: 'size'
    },
    {
      label: 'Price',
      value: 'price'
    },
    {
      label: 'City',
      value: 'area_kota'
    },
    {
      label: 'Province',
      value: 'area_provinsi'
    },
  ]

  const FilterWrapper = () => {
    return (
      <div className="filter-wrapper">
        <div className="dropWrapper">
          <CustomFilter
            data={sortData}
            header={'Sort'}
          />
          <CustomFilter
            data={sortData}
            header={'Filter'}
            isSearch={true}
          />
        </div>
        <CustomBtn
          text= {'Reset'}
          isReset={true}
          className={'ml-50'}
        />
      </div>
    )
  }

  const dataTh = [
    'No.',
    'Comodity',
    'Price',
    'Size',
    'City',
    'Province',
    'Date Added'
  ]

  const RenderTable = () => {
    return (
      <div className="table-wrapper">
        <table>
          <thead>
            <tr className='row-head'>
              {
                dataTh.map((el, i) => {
                  return (
                    <th key={i}>{el}</th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              !loading &&
              dataProdList &&
              dataProdList.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{el.komoditas}</td>
                    <td>{el.price}</td>
                    <td>{el.size}</td>
                    <td>{el.area_kota}</td>
                    <td>{el.area_provinsi}</td>
                    <td>{el.tgl_parsed}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>
    )
  }

  return (
    <div className='container-dashboard'>
      <div className="wrapper-content">
        <div className="heading">
          eFishery Catalogue
        </div>
        <FilterWrapper/>
        <RenderTable/>
        {
          loading &&
          <div className='loading'>
            <img src={Images.loading} alt="" />
            Loading
          </div>
        }
      </div>
    </div>
  );

};

export default Dashboard;
