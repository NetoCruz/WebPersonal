import React, { Component } from 'react'
import '../assets/styles/components/Sidebar.scss'

export default class Sidebar extends Component {
  render() {
    return (
      <div >
      <nav id="sidebar" className="text-center ">
				<div className="p-4 pt-5">
		  		<a href="#" className="img logo rounded-circle mb-5"   ></a>
          <h1 className="pb-4" style={{color:"white"}}>Ernesto Cruz</h1>
                  
	        {/* <ul className="list-unstyled components mb-5">
	          <li className="active">
	            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
	            <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                </li>
                <li>
                    <a href="#">Home 2</a>
                </li>
                <li>
                    <a href="#">Home 3</a>
                </li>
	            </ul>
	          </li>
	          <li>
	              <a href="#">About</a>
	          </li>
              
	          <li>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                    <a href="#">Page 1</a>
                </li>
                <li>
                    <a href="#">Page 2</a>
                </li>
                <li>
                    <a href="#">Page 3</a>
                </li>
              </ul>
	          </li>
	          <li>
              <a href="#">Portfolio</a>
	          </li>
	          <li>
              <a href="#">Contact</a>
	          </li>
	        </ul> */}
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
	        	<p> Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
						  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
						  Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
	        </div>
          
	      </div>
    	</nav>
      </div>
    )
  }
}