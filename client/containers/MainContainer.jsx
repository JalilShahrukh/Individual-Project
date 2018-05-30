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
import Predictor from './../components/predictor.jsx'; 

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
      days: 0, 
      price: 0, 
      name: '',
      willSpend: '' 
    } 
    this.onClick = this.onClick.bind(this);
    this.onClickCredit = this.onClickCredit.bind(this); 
    this.handleInput = this.handleInput.bind(this); 

    this.onClickPredictor = this.onClickPredictor.bind(this); 
    this.handleDaysChange = this.handleDaysChange.bind(this); 
    this.handlePriceChange = this.handlePriceChange.bind(this); 
    this.handleNameChange = this.handleNameChange.bind(this); 
  }

  handleInput(e) { 
    // console.log(e.target.value); 
    this.setState({ 
      input: e.target.value
    });
  }

  handlePriceChange (e) {
    this.setState({ price: e.target.value });
  }

  handleDaysChange (e) {
    this.setState({ days: e.target.value });
  }

  handleNameChange (e) {
    this.setState({ name: e.target.value });
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

  onClickPredictor(e) { 
    if (this.state.name === '' || this.state.price < 1 || this.state.days < 1) return; 
    var node = document.createElement("div");  
    node.className = 'appended';
    let product = this.state.days * this.state.price; 
    let output = "Over the next " + this.state.days + " days you will spend $" + product + " on " + this.state.name; 
    node.innerHTML = output;  
    document.getElementById("Predictor").appendChild(node);
  }

  render() { 
    return ( 
      <div className="container">
        <h1 id="header">The Money Team</h1> 
          <Totals totals={this.state.total} /> 
          <Debits onClick={this.onClick} handleInput={this.handleInput}/>
          <Credits onClickCredit={this.onClickCredit} handleInput={this.handleInput}/>
          <Predictor onClickPred={this.onClickPredictor} hPC={this.handlePriceChange} hDC={this.handleDaysChange} hNC={this.handleNameChange}/>
      </div>
    )
  }  
}

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default MainContainer;