import React, { Component } from 'react';
import Basho from '../components/Basho';
import styles from '../styles/styles';

class BashoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: [],
      matches: [],
      isLoadingMatches: false
    };
    this.handleExpand = this.handleExpand.bind(this);
  }
  async handleExpand(e) {
    console.log('trying to expand!', this.props.basho['_id']);
    let response = await fetch('/bashos/' + this.props.basho['_id']);
    let matches = await response.json();
    this.setState({matches: matches, isLoadingMatches: true});    
  }
  sortIntoDays(matches) {
    let sortedMatches = [[]];
    if (matches.length === 0)
      return null;

    let currentIndex = 0;
    let currentDay = matches[0].dayNumber;

    for (let i = 0; i < matches.length; i++) {
      if(matches[i].dayNumber === currentDay) {
        sortedMatches[currentIndex].push(matches[i]);
      }
      else {
        currentIndex++;
        sortedMatches[currentIndex] = [];
        sortedMatches[currentIndex].push(matches[i]);
        currentDay = matches[i].dayNumber;
      }
    }

    return sortedMatches;    
  }
  render() {
    return (
      <div style={styles.containerDiv}>
        <Basho 
          basho={this.props.basho} 
          matches={this.state.matches}
          isLoadingMatches={this.state.isLoadingMatches}
          expanded={this.state.expanded}
          onExpand={this.handleExpand}
          sortIntoDays={this.sortIntoDays}
        />
      </div>
    );
  }
}

export default BashoContainer; 