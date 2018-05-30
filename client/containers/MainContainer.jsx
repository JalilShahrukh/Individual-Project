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
import Credits from './../components/credits.jsx'; 
import Totals from './../components/totals.jsx';

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
    this.state = {
      total: 0, 
      input: '',
      accounts: []
    } 
    this.onClick = this.onClick.bind(this);
    this.onClickCredit = this.onClickCredit.bind(this); 
    this.handleInput = this.handleInput.bind(this); 
  }

  handleInput(e) { 
    // console.log(e.target.value); 
    this.setState({ 
      input: e.target.value
    });
  }

  onClick(e) {
    if (this.state.input === '' || this.state.input < 1) return;
    // console.log('input', this.state.input); 
    var node = document.createElement("div");  
    node.className = 'appended';
    node.innerHTML = this.state.input;  
    document.getElementById("Debits").appendChild(node);
    let total = this.state.total + Number(this.state.input); 
    this.setState({ 
      total: total
    });
    // console.log('Debit', this.state.total); 
  }

  onClickCredit(e) { 
    if (this.state.input === '' || this.state.input < 1) return;
    // console.log('input', this.state.input); 
    var node = document.createElement("div");  
    node.className = 'appended';
    node.innerHTML = this.state.input;  
    document.getElementById("Credits").appendChild(node);
    let total = this.state.total - Number(this.state.input);
    this.setState({ 
      total: total
    }); 
    // console.log('Credit', this.state.total);
  }

  render() { 
    return ( 
      <div className="container">
        <h1 id="header">The Money Team</h1> 
          <Totals totals={this.state.total} /> 
          <Debits onClick={this.onClick} handleInput={this.handleInput}/>
          <Credits onClickCredit={this.onClickCredit} handleInput={this.handleInput}/>
      </div>
    )
  }  
}

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default MainContainer;