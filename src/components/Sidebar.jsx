import React, { Component } from 'react'
import '../assets/styles/components/Sidebar.scss'

export default class Sidebar extends Component {
  render() {
    return (
      <div >
      <nav id="sidebar" className="text-center ">
				<div className="p-4 pt-5">
		  		<a href="#" className="img logo rounded-circle mb-2"   ></a>
          <h1 className="pb-2" style={{color:"white",fontSize:"28px"}}>Ernesto Cruz</h1>
                  
	       
          <nav id="colorlib-main-menu" className="text-center ">
              <ul className="list-group" style={{listStyleType:"none"}}>
                <li><a href="https://github.com/netocruz" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-lg"></i></a></li>
                <li><a href="https://www.behance.net/GalaxyNet0e228" target="_blank" rel="noopener noreferrer"><i className="fab fa-behance fa-lg"></i></a></li>
                <li><a href="https://dribbble.com/Neto_Cruz" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble fa-lg" /></a></li>
                <li><a href="https://twitter.com/Ernesto_CB10" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-lg" /></a></li>
                <li><a href="https://www.instagram.com/ernestocruz_developer" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg" /></a></li>
                <li><a href="https://www.linkedin.com/in/ernesto-cruz-designer/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-lg" /></a></li>
                
              </ul>
            </nav>

	        <div className="footer">
	        	<p style={{paddingTop:"35px"}}>Created by Ernesto Cruz</p>
	        </div>
          
	      </div>
    	</nav>
      </div>
    )
  }
}