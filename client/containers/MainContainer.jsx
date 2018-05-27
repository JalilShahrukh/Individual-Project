/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders question display
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterActions from 'redux'; 
import { bindActionCreators } from 'redux';

import { checkAnswer } from '../actions/check-answer';
import { getQuestions } from '../actions/get-questions';
import { updateScore } from '../actions/update-score';

const mapStateToProps = store => {
  return {
    question: store.question, 
    answer: store.answer, 
    score: score.answer
  }; 
};
  
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ checkAnswer, getQuestions, updateScore }, dispatch);
};

const componentDidMount = () => { 
  this.props.getQuestions; 
};

const componentDidUpdate = () => { 
  if (this.props.answer.correct === true && this.props.score.updated === false) { 
    this.props.updatedScore({ 
      score: this.props.score.score, 
      updated: true
    }); 
  }//end if
}; 

class Question extends Component { 
  constructor(props) { 
    super(props); 

    this.clickHandler = this.clickHandler.bind(this); 
    this.renderAnswers = this.renderAnswers.bind(this);
    this.renderResponse = this.renderResponse.bind(this);
  }

  clickHandler(e) { 
    //User shouldn't be able to click after selecting wrong answer
    if (e.target.tagName === 'LI' && this.props.score.updated === false && this.props.answer.correct !== false) {
        const currentCountry = this.props.question.country;
        this.props.checkAnswer(currentCountry, e.target.id);
      } else if (e.target.tagName === 'BUTTON') {
        this.props.getQuestions();
        this.props.updateScore({
        score: this.props.score.score,
        justUpdated: false,
      });
    }//end if 
  }//end clickHandler
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);