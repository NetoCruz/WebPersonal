import React, { Component } from 'react'
import '../assets/styles/components/Navbar.scss'


export default class Navbar extends Component {
  render() {
    return (
      
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top nn">
        <a class="navbar-brand" href="#">Ernesto Cruz</a>
        
        
                <li className="nav-item" style={{listStyleType:"none"}}><a class="nav-link" href="https://github.com/netocruz" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-lg"></i></a></li>
                <li className="nav-item" style={{listStyleType:"none"}}><a class="nav-link" href="https://www.behance.net/GalaxyNet0e228" target="_blank" rel="noopener noreferrer"><i className="fab fa-behance fa-lg"></i></a></li>
                <li className="nav-item" style={{listStyleType:"none"}}><a class="nav-link" href="https://dribbble.com/Neto_Cruz" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble fa-lg" /></a></li>
                <li className="nav-item" style={{listStyleType:"none"}}><a class="nav-link" href="https://twitter.com/Ernesto_CB10" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-lg" /></a></li>
                <li className="nav-item" style={{listStyleType:"none"}}><a class="nav-link" href="https://www.instagram.com/ernestocruz_developer" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg" /></a></li>
                <li className="nav-item" style={{listStyleType:"none"}}><a class="nav-link" href="https://www.linkedin.com/in/ernesto-cruz-designer/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-lg" /></a></li>
                
           
                  
        
      </nav>
    )
  }
}