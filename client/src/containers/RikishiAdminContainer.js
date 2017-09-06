import React, { Component } from 'react';
import RikishiList from '../components/RikishiList';
import RikishiForm from './RikishiForm';
import styles from '../styles/styles';

class RikishiAdminContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {rikishis: []};
    this.handleRikishiDelete = this.handleRikishiDelete.bind(this);
  }
  async componentDidMount(){
    let response = await fetch('/rikishis');
    let rikishis = await response.json();
    this.setState({rikishis: rikishis});
  }
  async handleRikishiSubmit(rikishi){
    console.log('submit to db: rikishi', rikishi);
    let response = await fetch('/rikishis', { 
      method: 'POST',
      body: JSON.stringify(rikishi),
      headers: { 'Content-Type': 'application/json' },
    });
    let thenWhat = await response.json();
    console.log('response is',thenWhat);
  }
  async handleRikishiDelete(rikishiId) {
    console.log('attempting to delete ', rikishiId)
    let response = await fetch('/rikishis/' + rikishiId, {
      method: 'DELETE'
    });
    let message = await response.json();
    console.log(message);
  }
  render() {
    return (
      <div style={styles.containerDiv}>
        <h3 style={styles.textCenter}>Rikishi Admin</h3>
        <RikishiForm onSubmit={this.handleRikishiSubmit} />
        <RikishiList 
          rikishis={this.state.rikishis}
          handleRikishiDelete={this.handleRikishiDelete}
        />
      </div>
    );
  }
}

export default RikishiAdminContainer; 