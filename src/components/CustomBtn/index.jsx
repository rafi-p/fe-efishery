import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import { useHistory } from 'react-router-dom'
import { Images, Colors, FontStyles } from '../../constant/index';

const CustomBtn = props => {
  const {text, isReset,className} = props

  return (
    <div
      className={`btn-custom ${isReset ? 'red' : ''} ${className ? className : ''}`}
      onCLick={() => {props.onClick()}}
    >
      {text}
    </div>
  );
};

export default CustomBtn;
