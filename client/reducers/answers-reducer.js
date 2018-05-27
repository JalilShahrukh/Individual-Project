/**
 * ************************************
 *
 * @module  answersReducer
 * @author
 * @date
 * @description reducer for questions
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = { 
 
};

const answerReducer = (state=initialState, action) => {
  switch (action.type) { 
    case CHECK_ANSWER: { 
      return action.payload.data; 
    }
    default:
      return state; 
  }
}; 

export default answerReducer; 