/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders display
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterActions from 'redux'; 
import { bindActionCreators } from 'redux';

/*const mapStateToProps = store => {
 
};
  
const mapDispatchToProps = dispatch => {
  
};

const componentDidMount = () => { 
  
};

const componentDidUpdate = () => { 

};*/

class MainContainer extends Component { 
  constructor(props) { 
    super(props); 

  }

  render() { 
    return ( 
      <div className="container">
        <h1 id="header">Hello</h1> 
      </div>
    )
  }  
}

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default (MainContainer);