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
import { convert } from '../../helpers/index';
import * as prodListActions from '../../store/productList/actions';

const Dashboard = props => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('')
  const [selectedSort, setSelectedSort] = useState('')
  const [sortingId, setSortingId] = useState('')
  const [sortAsc, setSortAsc] = useState(true)
  const [dataMain, setDataMain] = useState([])
  const [dataSort, setDataSort] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [firstLoad, setFirstLoad] = useState(true)

  const dataProdList = useSelector(state => state.prodList.data);
  const getProdList = dispatch(prodListActions.getProdList);
  const dataArea = useSelector(state => state.prodList.dataArea);
  const getArea = dispatch(prodListActions.getArea);
  const dataSize = useSelector(state => state.prodList.dataSize);
  const getSize = dispatch(prodListActions.getSize);

  useEffect(() => {
    setLoading(true)
    getProdList()
    .then(res => {})
    .catch(err => {})
    .finally(() => {
      setLoading(false)
      setFirstLoad(false)
    })
    getArea()
    getSize()
  },[])

  useEffect(() => {
    if(dataProdList) {
      setDataMain(dataProdList)
    }
  },[
    dataProdList,
  ])

  useEffect(() => {
    if(
      props.history.location &&
      props.history.location.state &&
      props.history.location.state.order &&
      Object.keys(props.history.location.state.order) !== 0 &&
      dataProdList && firstLoad
    ) {
      let order = props.history.location.state.order
      setSelectedSort(order.category)
      setSortAsc(order.asc)
      setSortingId(order.category)
      clickSort(dataProdList, order)
    }
  }, [firstLoad,dataProdList, props.history])

  useEffect(() => {
    if(dataSort) {
      setDataMain(dataSort)
      setLoading(false)
    }
  },[
    dataSort
  ])

  const filterData = [
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
    {
      label: 'Data added',
      value: 'tgl_parsed'
    },
  ]

  const selectCategory = (type) => {
    switch (type) {
      case 'area_kota':
        return dataArea.cities
      case 'area_provinsi':
        return dataArea.provinces
      case 'size':
        return dataSize
      default:
        break;
    }
  }

  const sortingData = (data, order) => {
    let temp= [...data]
    temp.sort((a, b) => {
      if(order.category.includes('size') || order.category.includes('price')) {
        if(order.asc) {
          return (b[order.category] === null) - (a[order.category] === null) || (a[order.category] - b[order.category])
        } else {
          return (a[order.category] === null) - (b[order.category] === null) || (b[order.category] - a[order.category])
        }

      } else {
        if(order.asc) {
          return (b[order.category] === null) - (a[order.category] === null) || ('' + a[order.category]).localeCompare(b[order.category]);
        } else {
          return (a[order.category] === null) - (b[order.category] === null) || ('' + b[order.category]).localeCompare(a[order.category]);
        }
      }
    })
    setDataSort(temp)
  }

  const clickFilter = (keyword) => {
    let filter = {
      category: selectedFilter,
      keyword: selectedFilter.includes('size') || selectedFilter.includes('price') ? Number(keyword) : keyword
    }
    setLoading(true)
    getProdList(filter)
    .then((res) => {
      clickSort(res.payload.data)
    })
    .catch((err) => {
    })
    .finally(() => {
      setLoading(false)
    })
  }

  const clickSort = (main, param) => {
    let data = main ? main : dataMain
    let order = param ? param : {
      category: selectedSort,
      asc:  sortAsc
    }
    setSortingId(selectedSort)
    if(selectedSort) {
      sortingData(data, order)
    }
  }

  const handleReset = () => {
    setSelectedFilter('')
    setSelectedSort('')
    setSortAsc(true)
    setSearchKeyword('')
    setLoading(true)
    setSortingId('')
    getProdList()
    .then(res => {})
    .catch(err => {})
    .finally(() => {
      setLoading(false)
    })
  }
  const onChangeSearch = (e) => {
      setSearchKeyword(e.target.value)
  }

  useEffect(() => {
    if(selectedFilter.includes('price') && searchKeyword) {
      let arr = searchKeyword.split('')
      let first = ''
      if(arr[0] === '0') {
        first = arr.shift();
      }
      setSearchKeyword(arr.join(''))
    }
  },[
    searchKeyword,
    selectedFilter
  ])

  const FilterWrapper = () => {
    return (
      <div className="filter-wrapper">
        <div className="dropWrapper">
          <CustomFilter
            data={sortData}
            header={'Sort'}
            sortAsc={sortAsc}
            setSortAsc={setSortAsc}
            clicked = {clickSort}
            setSelected={setSelectedSort}
            selectedValue={selectedSort}
            disabled={!selectedSort}
          />
          <CustomFilter
            data={filterData}
            header={'Filter'}
            isSearch={true}
            setSelected={setSelectedFilter}
            selectedValue={selectedFilter}
            option={selectCategory(selectedFilter)}
            clicked = {clickFilter}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            onChangeSearch={onChangeSearch}
            disabled={!searchKeyword || !selectedFilter ? true : false}
          />
        </div>
        <div
          className={`btn-custom red ml-50`}
          onClick={() => {
            handleReset()
          }}
        >
          Reset
        </div>
      </div>
    )
  }



  const dataTh = [
    {
      label: 'No.',
      value: 'no'
    },
    {
      label: 'Comodity',
      value: 'komoditas'
    },
    {
      label: 'Price',
      value: 'price'
    },
    {
      label: 'Size',
      value: 'size'
    },
    {
      label: 'City',
      value: 'area_kota'
    },
    {
      label: 'Province',
      value: 'area_provinsi'
    },
    {
      label: 'Data added',
      value: 'tgl_parsed'
    },
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
                    <th className={`${el.value === sortingId ? 'green-head' : ''}`} key={i}>{el.label}</th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              !loading &&
              dataMain &&
              dataMain.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{el.komoditas ? el.komoditas : '-'}</td>
                    <td>{el.price ? convert.customNum(el.price) : '-'}</td>
                    <td>{el.size ? convert.customNum(el.size, true) : '-'}</td>
                    <td>{el.area_kota ? el.area_kota : '-'}</td>
                    <td>{el.area_provinsi ? el.area_provinsi : '-'}</td>
                    <td>{el.tgl_parsed ? convert.customDateFormat(el.tgl_parsed) : '-'}</td>
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
          (loading || firstLoad) &&
          <div className='loading'>
            <img src={Images.loading} alt="" />
            Loading
          </div>
        }
        {
          !loading && dataMain.length === 0 && !firstLoad &&
          <div className='loading'>
            <img src={Images.noData} className='noData' alt="" />
            No Data
          </div>
        }
      </div>
    </div>
  );

};

export default Dashboard;
