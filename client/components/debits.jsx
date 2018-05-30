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
    return ( 
      <div className="innerbox" id="Debits">
        <label htmlFor="debits" class="innerText">Debits:</label>
        <form class="forms"><input type="text" name="name" className="inputs"></input></form>
        <button className="buttons" id="addDebits" onClick={this.props.onClick}>Add</button>
        <br/>
      </div>
    )
  }
}

export default Debits;