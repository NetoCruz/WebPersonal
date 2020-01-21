import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../assets/styles/components/Intro.scss'



export default class Introduction extends Component {
  render() {
    return (
      <div className="carrousel">
       
       <Carousel indicators={false} interval={3000} >
  <Carousel.Item >
    <div
      className="d-block mw-100 bk1"
      alt="First slide"
    >
      <div className=" txt text-center">
      <h2>FrontEnd Developer</h2>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
      </div>  
    </div>
    
      

  </Carousel.Item>
  
  <Carousel.Item>
    <div
      className="d-block mw-100 bk2"
      
      alt="Third slide"
    >
       <div className=" txt text-center">
      <h2>UI/UX Designer</h2>
       <p>Son conceptos diferentes, no te confundas...</p> 
      </div>
    </div>

    
  </Carousel.Item>
  <Carousel.Item>
    <div
      className="d-block mw-100 bk3"
      
      alt="Third slide"
    >
     <div className=" txt text-center">
      <h2>Marketer</h2>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </div>

    </div>

    
  </Carousel.Item>
</Carousel>
      
 

       
      </div>
    )
  }
}