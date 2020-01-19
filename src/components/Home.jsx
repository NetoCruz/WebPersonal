 import React, { Component } from 'react';
 import "../assets/styles/App.scss";
import Sidebar from './Sidebar'
import Intro from './Intro'


 class Home extends Component {
  render() {
    return (
      <div>
        <div class="wrapper d-flex align-items-stretch">
         	
          <Sidebar></Sidebar>
          <Intro>
          </Intro>

				
      	</div>
      </div>
    );
  }
 }

 export default Home;