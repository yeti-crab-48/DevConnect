import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import TopNavBar from './components/TopNavbar';
import './core.scss';
import Footer from './components/Footer';

render(
  <Provider store={store}>
    <TopNavBar/>
    <App/>
    <Footer/>
  </Provider>, 
  document.getElementById('root')
);



