import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import { useHistory } from 'react-router-dom'
import { Images, Colors, FontStyles } from '../../constant/index';
// import {CustomBtn} from '../index'

const CustomFilter = props => {
  const {
    data,
    header,
    isSearch,
    selectedValue,
  } = props
  const [searchLocal, setSearchLocal] = useState('')

  const onChangeSelect = (e) => {
    props.setSelected && props.setSelected(e.target.value)
    props.setSearchKeyword && props.setSearchKeyword('')
  }

  const CustomInput = () => {
    <div className="search">
      <input
        onChange={props.onChangeSearch}
        defaultValue={props.searchKeyword}
        type="text"
        placeholder='Search...'
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key) && selectedValue.includes('price') ) {
            event.preventDefault();
          }
        }}
      />
    </div>
  }


  return (
    <div className="dropdown-wrapper">
      <div className="text">
        {header} by:
      </div>
      <div className="buttonDrop">
        <select
          // name="category"
          // id="category"
          onChange={onChangeSelect}
          value={selectedValue}
          className={`${isSearch ? 'bg-green' : ''}`}
        >
          <option value="" disabled>Select Category...</option>
          {
            data.map((el, i) => {
              return (
                <option key={i} value={el.value}>{el.label}</option>
              )
            })
          }
        </select>
        {
          isSearch && props.option
          ?
          <select
            // name="category"
            // id="category"
            onChange={props.onChangeSearch}
            value={props.searchKeyword}
            className={'right-option'}
          >
            <option value="" disabled>Select Category...</option>
            {
              props.option.map((el, i) => {
                return (
                  <option key={i} value={el}>{el}</option>
                )
              })
            }
          </select>
          :
          isSearch
            ?
            <div className="search">
              <input
                autoFocus="autoFocus"
                onChange={props.onChangeSearch}
                defaultValue={props.searchKeyword}
                type="text"
                placeholder='Search...'
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key) && selectedValue.includes('price') ) {
                    event.preventDefault();
                  }
                }}
              />
            </div>
            :
            <div
              className="btnSortFilter"
              onClick={() => {
                props.setSortAsc(!props.sortAsc)
              }}
            >
              {
                !props.sortAsc
                ? 'Desc'
                : 'Asc'
              }
            </div>
        }
        <div
          className={`btn-custom ${
            props.disabled && props.disabled
            ? 'disabled'
            : ''
          }`}
          onClick={() => {
            if(isSearch) {
              props.clicked(props.searchKeyword)
            } else {
              props.clicked()
            }
          }}
        >
          {header}
        </div>
      </div>

    </div>
  );
};

export default CustomFilter;
