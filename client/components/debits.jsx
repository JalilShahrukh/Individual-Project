/**
 * ************************************
 *
 * @module  Debits
 * @author
 * @date
 * @description presentation component that displays the total cards and total markets
 *
 * ************************************
 */

import React from 'react';

class Debits extends React.Component { 
  constructor(props) { 
    super(props); 
  }

  render() { 
     {/* <div className="checkings">
     <label htmlFor="checkings">The money you have:</label>
     <input placeholder="Got money?" form="text"></input>
     <button id="addCheckings">$</button>
    </div>  */}

  {/* <span></span> */}

    {/* <div className="savings">  
      <label htmlFor="savings">:</label>
      <input placeholder="Got money?" form="text"></input>
      <button id="addSavings">$</button>
    </div>   */}
    return ( 
      <div className="innerbox" id="Debits">
        <label htmlFor="debits">Debits:</label>  
        <button className="buttons" id="addDebits" onClick={this.props.onClick}>$</button>
      </div>
    )
  }
}

export default Debits;