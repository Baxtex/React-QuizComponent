import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';

let quizData = require('./quiz_data.json');

class Quiz extends Component{
    constructor(props){
        super(props)
        this.state = {quiz_position: 1}//States are internal to the component itself and specified like Key/val 
        // alert(this.props.message) props comes form the parent class and should not be changed in the component. 
    }
    render(){
        return (
            <div> 
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}> </QuizQuestion> 
            </div>
        )
    }
}

export default Quiz;