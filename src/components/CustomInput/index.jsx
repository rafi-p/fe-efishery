import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import { useHistory } from 'react-router-dom'
import { Images, Colors, FontStyles } from '../../constant/index';

const CustomInput = props => {
  const {

  } = props

  return (
    <div className="container-input">
      <div className="text-header">
        {props.label}
      </div>
      {
        !props.isDropdown
        ?
        <input
          autoFocus="autoFocus"
          onChange={props.onChange}
          value={props.value}
          type="text"
          placeholder={props.label}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key) && (props.label ? props.label : '').toLowerCase().includes('price') ) {
              event.preventDefault();
            }
          }}
        />
        :
        <select
          // name="category"
          // id="category"
          onChange={props.onChange}
          value={props.value}
          className={``}
        >
          <option value="" disabled>Select {props.label}...</option>
          {
            props.data &&
            props.data.map((el, i) => {
              return (
                // <option key={i} value={el.value}>{el.label}</option>
                <option key={i} value={el}>{el}</option>
              )
            })
          }
        </select>
      }
    </div>
  );
};

export default CustomInput;
