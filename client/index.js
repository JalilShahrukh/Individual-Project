/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application.  Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; 
import App from './App.jsx';
import store from './store'; 
// import reducers from './reducers/reducers.js';

render(
  //Wrap the App in the Provider and pass in the store
  <Provider store={store}>
    <App store={store}/>
  </Provider>
  ,document.getElementById('contents')
); 

