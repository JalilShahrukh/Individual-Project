/**
 * ************************************
 *
 * @module  Totals
 * @author
 * @date
 * @description presentation component that displays the total cards and total markets
 *
 * ************************************
 */

import React from 'react';

class Totals extends React.Component { 
  constructor(props) { 
    super(props); 
  }
  
  render() { 
    return ( 
      <div className="innerbox" id="Totals">
        <label htmlFor="totals" class="innerText">Total: {this.props.totals}</label>
      </div>
    )
  }
}

export default Totals;