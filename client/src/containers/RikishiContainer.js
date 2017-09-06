import React, { Component } from 'react';
import Rikishi from '../components/Rikishi';

class RikishiContainer extends Component {
  constructor(props) {
    super(props);
    this.deleteRikishi = this.deleteRikishi.bind(this);
  }
  deleteRikishi(e) {
    e.preventDefault();
    let id = this.props.uniqueId;
    console.log('delete', id);
    this.props.handleRikishiDelete(id);
    console.log('bye bye comment');
  }  
  render() {
    return (
      <div>
        <Rikishi
          rikishi={this.props.rikishi}
          onDelete={this.deleteRikishi}
        />
      </div>
    );
  }
}

export default RikishiContainer; 