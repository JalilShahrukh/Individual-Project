/**
 * ************************************
 *
 * @module  scoreReducer
 * @author
 * @date
 * @description reducer for questions
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = { 
  score: 0, 
  updated: false
};

const scoreReducer = (state=initialState, action) => {
  switch (action.type) { 
    case UPDATE_SCORE: { 
      let updatedScore = action.payload.score;
      if (action.payload.updated === true) { 
        updatedScore = action.payload.score + 1;
      }//end if 
      return {
        score: updatedScore, 
        updated: true
      };//return 
    }//end case
    default:
      return { 
       score: state.score,  
       updated: false
      };
  }
}; 

export default answerReducer; 