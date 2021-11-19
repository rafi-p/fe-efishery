import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import { useHistory } from 'react-router-dom'
import { Images, Colors, FontStyles } from '../../constant/index';
import {CustomBtn} from '../index'

const CustomFilter = props => {
  const {
    data,
    header,
    isSearch,
    onChangeSelect,
    valueSelect
  } = props

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
          value={valueSelect}
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
          isSearch
          ?
          <div className="search">
            <input type="text" placeholder='Search...'/>
          </div>
          :
          <div className="btnSortFilter">
            {
              true
              ? 'Desc'
              : 'Asc'
            }
          </div>
        }
        <CustomBtn
          text= {header}
        />
      </div>

    </div>
  );
};

export default CustomFilter;
