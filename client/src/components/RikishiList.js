import React, {Component } from 'react';
import RikishiContainer from '../containers/RikishiContainer';

class RikishiList extends Component {
	render(){
		let rikishiNodes = this.props.rikishis.map(rikishi => {
			return (
				<RikishiContainer 
					rikishi = {rikishi}
					uniqueId = { rikishi['_id']}
					key = {rikishi['_id']}
					handleRikishiDelete = {this.props.handleRikishiDelete}
				/>
			)
		})
		return (
			<div>
				<h3>Rikishi List:</h3>
				{rikishiNodes}
			</div>
		)	
	}
}

export default RikishiList;
