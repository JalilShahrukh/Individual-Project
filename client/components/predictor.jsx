/**
 * ************************************
 *
 * @module  Predictor
 * @author
 * @date
 * @description presentation component that displays the total cards and total markets
 *
 * ************************************
 */

import React from 'react';

class Predictor extends React.Component { 
  constructor(props) { 
    super(props); 
  }
  
  render() { 
    return ( 
      <div className="innerbox" id="Predictor">
        <label htmlFor="predictor" class="innerText">Predictor: </label>
        <form class="forms"><input type="text" name="pNames" className="inputs" id="pNames" placeholder="Name" onChange={this.props.hNC}></input></form>
        <form class="forms"><input type="number" name="pPrice" className="inputs" id="pPrice" placeholder="Price" onChange={this.props.hPC}></input></form>
        <form class="forms"><input type="number" name="pDays" className="inputs" id="pDays" placeholder="Days" onChange={this.props.hDC}></input></form>
        <button className="buttons" type="submit" onClick={this.props.onClickPred}>Calculate</button>
      </div>
    )
  }
}

export default Predictor;