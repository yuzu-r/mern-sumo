import React, { Component } from 'react';
import Day from '../components/Day';
import '../styles/day.css';

class DayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.toggleExpand = this.toggleExpand.bind(this);
  }
  toggleExpand() {
    console.log('trying to toggle');
    this.setState({isExpanded: !this.state.isExpanded});
  }
	render() {
    return (
    	<div className={'dayContainer' + (this.state.isExpanded ? ' expanded' : '')} >
        <h4 onClick={this.toggleExpand}>Day {this.props.day[0].dayNumber}</h4>
        <Day day={this.props.day} isExpanded={this.state.isExpanded} />
    	</div>
    );
  }
}

export default DayContainer; 