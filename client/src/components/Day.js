import React from 'react';
import MatchContainer from '../containers/MatchContainer';
import '../styles/day.css';

const Day = (props) => {
	let matchNodes = null;
	if (props.day.length > 0) {
		matchNodes = props.day.map((match, index) => {
			return (
				<MatchContainer key={index} match={match} />
			)
		})
	}
	return (
		<div className='day'>
			{matchNodes}
		</div>
	)
}

export default Day;