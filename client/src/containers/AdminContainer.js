import React, { Component } from 'react';
import FutureDatesAdmin from '../components/FutureDatesAdmin';

class AdminContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {futureDates: []};
    this.handleFutureDateSubmit = this.handleFutureDateSubmit.bind(this);
  }
  async componentDidMount(){
    let response = await fetch('/admin/dates');
    let futureDates = await response.json();
    this.setState({futureDates: futureDates});
  }
  async handleFutureDateSubmit(futureDate){
   console.log('submit to db:', futureDate);
   let response = await fetch('/admin/dates', { 
    method: 'POST',
    body: JSON.stringify(futureDate),
    headers: { 'Content-Type': 'application/json' },
    });
   let thenWhat = await response.json();
   console.log('response is',thenWhat);
  }
  render() {
    return (
      <FutureDatesAdmin 
        futureDates = {this.state.futureDates}
        onFutureDateSubmit = {this.handleFutureDateSubmit}
      />
    );
  }
}

export default AdminContainer; 