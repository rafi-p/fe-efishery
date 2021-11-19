import React, { useState, useEffect, useRef } from 'react';
import './Navbar.scss';
import { useHistory } from 'react-router-dom'
import { Images, Colors, FontStyles } from '../../constant/index';
import {
} from '../index';


const NavbarComponent = props => {
  const history = useHistory()
  return (
    <div
      className={'container text'}
    >
      <img
        className='logo'
        src={Images.logo}
        alt=""
        onClick={() => {history.push('/')}}
      />
    </div>
  );
};

export default NavbarComponent;
