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
import Debits from './../components/debits.jsx';
import Credits from './../components/credits.jsx'

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
    this.state = [];
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) { 
    var node = document.createElement("div");  
    node.className = 'appended';
    node.innerHTML = '$';  
    document.getElementById("Debits").appendChild(node);
  }

  onClickCredit(e) { 
    var node = document.createElement("div");  
    node.className = 'appended';
    node.innerHTML = '$';  
    document.getElementById("Credits").appendChild(node);
  }

  render() { 
    return ( 
      <div className="container">
        <h1 id="header">The Money Team</h1> 
          <Debits onClick={this.onClick}/>
          <Credits onClickCredit={this.onClickCredit}/>
      </div>
    )
  }  
}

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default MainContainer;