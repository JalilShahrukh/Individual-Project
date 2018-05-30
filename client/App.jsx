/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, {Component} from 'react'; 
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './index.js'
import Wrapper from './containers/MainContainer.jsx';

class App extends Component { 
  constructor(props) {
    super(props);
  }
  
  render() { 
    return( 
      <div>
        <Wrapper /> 
        <h1>Hello World</h1>;
      </div>
    )
  }
}

export default App; 

render(<App />, document.getElementById('contents'));