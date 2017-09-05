import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {locations: []};
  }
  async componentDidMount(){
    const response = await fetch('/locations');
    const locations = await response.json();
    this.setState({locations: locations});
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.locations.map(location => { 
            return <li key={location.city}> 
                      <b>{location.city}</b>:
                      {location.info}
                    </li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
