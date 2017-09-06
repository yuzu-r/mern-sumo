import React, {Component } from 'react';
import FutureDate from './FutureDate';
import FutureDateForm from '../containers/FutureDateForm';

class FutureDatesAdmin extends Component {
	render(){
		let dateNodes = this.props.futureDates.map(fd => {
			return (
				<FutureDate 
					city = {fd.city}
					startDate = {fd.startDate}
					uniqueId = { fd['_id']}
					key = {fd['_id']}
				/>
			)
		})
		return (
			<div>
				<h2>Upcoming Basho:</h2>
				{dateNodes}
				<FutureDateForm onSubmit={this.props.onFutureDateSubmit} />
			</div>
		)
	}
}

export default FutureDatesAdmin;
