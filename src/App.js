import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import Router from './router/index';
import {history, store } from './store/index';
import {Navbar} from './components/index'
import './App.scss'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={'main-container'}>
          <Navbar/>
          <Router history={ history } />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
