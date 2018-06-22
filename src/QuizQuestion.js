import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
	
	constructor(props){
		super(props);
	}

	handleClick(buttonText){
		console.log(buttonText  === this.props.quiz_question.answer);
		if ( buttonText  === this.props.quiz_question.answer ) {
			this.props.showNextQuestionHandler();
		}
	}

	render(){

		const options = this.props.quiz_question.answer_options.map((answer_option , index)=>{
			return <QuizQuestionButton 
					clickHandler = {this.handleClick.bind(this)} 
					key={index} 
					button_text={answer_option} />
		})

		return(
			<main>
		        <section>
		 	        <p>{this.props.quiz_question.instruction_text}</p>
		        </section>
		        <section className="buttons">
		        	<ul>
		        		{options}
		          	</ul>
		        </section>
		    </main>
		)
	}	
}

export default QuizQuestion;