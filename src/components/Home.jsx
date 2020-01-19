 import React, { Component } from 'react';
 import "../assets/styles/App.scss";
import Sidebar from './Sidebar'
import Intro from './Intro'


 class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
         	
          <Sidebar className="col-sm-4"></Sidebar>
          <Intro className="col-sm-8">
          </Intro>

				
      	</div>
      </div>
    );
  }
 }

 export default Home;