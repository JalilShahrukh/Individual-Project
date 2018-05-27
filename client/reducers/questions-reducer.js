/**
 * ************************************
 *
 * @module  questionsReducer
 * @author
 * @date
 * @description reducer for questions
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = { 
 
};

const questionReducer = (state=initialState, action) => {
  switch (action.type) { 
    case GET_QUESTIONS: { 
      return action.payload.data; 
    }
    default:
      return state; 
  }
}; 

export default questionReducer; 