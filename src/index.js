  import React from 'react';
  import ReactDOM from 'react-dom';
  import Home from './components/Home';
  import 'bootstrap/dist/css/bootstrap.min.css';
  
  import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
  import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
//   import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
// import '@fortawesome/fontawesome-free/js/brands'

import './assets/styles/App.scss';

import OpenSansRegularRoboto from './assets/fonts/Roboto-Regular.ttf';

const myGlobalCSS = `
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    src:
      url('${OpenSansRegularRoboto}') format('woff2'),
      
  }
  html, body {
    font-family: 'Open Sans', sans-serif;
  }
`;
  

  ReactDOM.render(<Home />, document.getElementById('app'));
