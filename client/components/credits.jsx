/**
 * ************************************
 *
 * @module  Credits
 * @author
 * @date
 * @description presentation component that displays the total cards and total markets
 *
 * ************************************
 */

import React from 'react';

class Credits extends React.Component { 
  constructor(props) { 
   super(props); 
  }

  render() { 
    return( 
      <div className="innerbox" id="Credits">
        <label htmlFor="credits" class="innerText">Credits:</label>
        <form className="forms"><input type="text" name="name" className="inputs" id="creditForm" onChange={this.props.handleInput}></input></form>
        <button className="buttons" type="submit" form="creditForm" onClick={this.props.onClickCredit}>Add</button>
        <br/>
      </div>    
    )    
  }
}

export default Credits;