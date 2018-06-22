import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			incorrectAnswer : false
		}
	}

	handleClick(buttonText){
		console.log(buttonText  === this.props.quiz_question.answer);
		this.setState({
			incorrectAnswer : true
		})
		if ( buttonText  === this.props.quiz_question.answer ) {
			this.setState({
				incorrectAnswer : false
			})
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
		        {this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p> : null }
		    </main>
		)
	}	
}

export default QuizQuestion;