import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../assets/styles/components/Intro.scss'



export default class Introduction extends Component {
  render() {
    return (
      <div style={{color:"black"}}>
       
       <Carousel  >
  <Carousel.Item >
    <img
      className="d-block w-1000 bk1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label nhbhbbhhbhhbhb</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
 

       
      </div>
    )
  }
}