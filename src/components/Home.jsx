 import React, { Component } from 'react';
 import "../assets/styles/App.scss";
import Sidebar from './Sidebar'
import Intro from './Intro'
import Proyects from './Proyects'
import About from './About'
import Navbar from './Navbar'


 class Home extends Component {
  render() {
    return (
      <div>
        
      <Navbar/>

        <div className=" wrapper d-flex align-items-stretch">
         	
          <Sidebar className="col-sm-4"></Sidebar>
          
          <div id="info" className="container-fluid  " >
          <Intro className="col-sm-8"></Intro>
          <About className="col-sm-8"/>
          <Proyects className="col-sm-8"/>
         
         </div>
				
      	</div>
      </div>
    );
  }
 }

 export default Home;