import React, {Component } from 'react';

class FutureDateForm extends Component {
	constructor(props) {
		super(props);
		this.state = { startDate: '', city: ''};
		this.handleCityChange = this.handleCityChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleDateChange(e) {
		this.setState({startDate: e.target.value});
	}
	handleCityChange(e) {
		this.setState({city: e.target.value});
	}
	handleSubmit(e) {
		e.preventDefault();
		let startDate = this.state.startDate;
		let city = this.state.city.trim();
		if (!city || !startDate) {
			return;
		}
		this.props.onSubmit({city: city, startDate: startDate});
		this.setState({startDate: '', city: ''});
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input 
					type = 'date' 
					value = {this.state.startDate}
					onChange = {this.handleDateChange}
				/>
				<input
					type = 'text'
					placeholder = 'city'
					value = {this.state.city}
					onChange = {this.handleCityChange} 
				/>
				<input
					type = 'submit'
					value = 'Post' 
				/>
			</form>
		)
	}
}

export default FutureDateForm;