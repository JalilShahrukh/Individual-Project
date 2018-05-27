/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux'; 

// import all reducers
import AnswersReducer from './answers-reducer';
import QuestionReducer from './questions.reducer'; 
import ScoreReducer from './score-reducer'; 

// combine reducers
const reducers = combineReducers({ 
  answer: AnswersReducer, 
  question: QuestionsReducer, 
  score: ScoreReducer
}); 

// make the combined reducers available for import
export default reducers; 