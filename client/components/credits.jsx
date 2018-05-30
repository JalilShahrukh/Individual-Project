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
        <label htmlFor="credits">Credits:</label>  
        <button className="buttons" id="addCredits">$</button>
      </div>    
    )    
  }
}

export default Credits;