import React, { Component } from 'react';
import BashoList from '../components/BashoList';
import styles from '../styles/styles';

class BashoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {bashos: []};
  }
  async componentDidMount(){
    let response = await fetch('/bashos');
    let bashos = await response.json();
    this.setState({bashos: bashos});
  }
  render() {
    return (
      <div style={styles.containerDiv}>
    	 <BashoList bashos={this.state.bashos}/>
      </div>
    );
  }
}

export default BashoListContainer; 