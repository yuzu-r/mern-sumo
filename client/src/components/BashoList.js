import React, {Component } from 'react';
import BashoContainer from '../containers/BashoContainer';
import styles from '../styles/styles';

class BashoList extends Component {
	render(){
		let bashoNodes = this.props.bashos.map(basho => {
			return (
				<BashoContainer
					basho  = {basho}
					key = {basho['_id']}
				/>
			)
		})
		return (
			<div>
				<h3 style={styles.textCenter}>Basho List:</h3>
				{bashoNodes}
			</div>
		)
	}
}

export default BashoList;
