import React, {Component } from 'react';
import styles from '../styles/styles';

class RikishiForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
										name: '', 
										kanji: ''
									};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleKanjiChange = this.handleKanjiChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleNameChange(e) {
		this.setState({name: e.target.value});
	}
	handleKanjiChange(e) {
		this.setState({kanji: e.target.value});
	}
	handleSubmit(e) {
		e.preventDefault();
		let name = this.state.name.trim();
		let kanji = this.state.kanji.trim();
		if (!name || !kanji) {
			return;
		}
		this.props.onSubmit({name: name, kanji: kanji});
		this.setState({name: '', kanji: ''});
	}
	render() {
		return (
			<div style={styles.formDiv}>
				<form onSubmit={this.handleSubmit}>
					<input 
						type = 'text' 
						value = {this.state.name}
						placeholder = 'name, e.g. Hakuho'
						onChange = {this.handleNameChange}
					/>
					<input
						type = 'text'
						value = {this.state.kanji}
						placeholder = 'name in kanji'
						onChange = {this.handleKanjiChange} 
					/>
					<input
						type = 'submit'
						value = 'Post' 
					/>
				</form>
			</div>
		)
	}
}

export default RikishiForm;