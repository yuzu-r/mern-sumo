import React from 'react';
import styles from '../styles/styles';

const Banner = (props) => {
	let message = 'loading...' ;
	console.log(message, props.isLoading, props.bashoInfo.basho);
	if (props.isLoading === false) {
		if (props.bashoInfo.inProgress === true) {
			message = 'It\'s Day ' + props.bashoInfo.matchDay + ' of the ' + props.bashoInfo.basho.city + ' basho!';
		}
		else {
			console.log('not in progress!', props.bashoInfo);
			message = 'The next basho is in ' + props.bashoInfo.basho.city + ' on ' + props.bashoInfo.basho.startDate;
		}		
	}
	return (
		<div>
			<h2 style={styles.textCenter}>{message}</h2>
		</div>
	)
}

export default Banner;