import React, { Component } from 'react';
import Banner from '../components/Banner';

class BannerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {bashoInfo: {},
                  isLoading: true};
  }
  async componentDidMount(){
    let response = await fetch('/admin/dates/latest');
    let bashoInfo = await response.json();
    this.setState({
                    bashoInfo: bashoInfo,
                    isLoading: false
                  });
  }
  render() {
    return (
      <Banner isLoading={this.state.isLoading} bashoInfo={this.state.bashoInfo} />
    );
  }
}

export default BannerContainer; 