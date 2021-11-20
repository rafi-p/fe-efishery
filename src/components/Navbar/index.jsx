import React, { useState, useEffect, useRef } from 'react';
import './Navbar.scss';
import { useHistory, useLocation } from 'react-router-dom'
import { Images, Colors, FontStyles } from '../../constant/index';
import {
} from '../index';


const NavbarComponent = props => {
  const history = useHistory()
  const { pathname } = useLocation();

  const isActive = (path) => {
    if(path === pathname) {
      return true
    }
  }

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
      <div
        className={`btn-add ${isActive('/add-product') ? 'active' : ''}`}
        onClick={() => {history.push('/add-product')}}
      >
        Add Product
      </div>
    </div>
  );
};

export default NavbarComponent;
