import React, { Component } from 'react';
import Match from '../components/Match';

class MatchContainer extends Component {
	render() {
		console.log(this.props.match);
    return (
    	<div>
        <Match match={this.props.match} />
    	</div>
    );
  }
}

export default MatchContainer; 