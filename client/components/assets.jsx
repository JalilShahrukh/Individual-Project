/**
 * ************************************
 *
 * @module  assets
 * @author
 * @date
 * @description presentation component that displays the total cards and total markets
 *
 * ************************************
 */

import React from 'react';

const Assets = props => ( 
  <div className="innerbox" id="assets">
   <label htmlFor="checkings">Checkings:</label>
   <span id="checkings" className="propsText"></span>
     <p>
   <label htmlFor="savings">Savings:</label>
   <span id="savings" className="propsText"></span>
     </p>  
  </div>
);

export default Assets;