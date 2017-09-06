import React, { Component } from 'react';
import BashoListContainer from './BashoListContainer';
import RikishiAdminContainer from './RikishiAdminContainer';
import AdminContainer from './AdminContainer';
import BannerContainer from './BannerContainer';
import styles from '../styles/styles';

class MainContainer extends Component {
	render() {
    return (
    	<div>
    		<h1 style={styles.textCenter}>相撲 Results Viewer</h1>
    		<BannerContainer />
    		<BashoListContainer/>
    		<RikishiAdminContainer/>
            <AdminContainer />
    	</div>
    );
  }
}

export default MainContainer; 