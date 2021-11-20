import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import Router from './router/index';
import {history, store } from './store/index';
import {Navbar} from './components/index'
import './App.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={'main-container'}>
          <Navbar/>
          <Router history={ history } />
          <ToastContainer/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
