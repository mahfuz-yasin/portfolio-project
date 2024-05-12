import React, { useEffect, useState } from 'react'
import HomeSlider from '../Slider/HomeSlider.js'
function Home() {


  const slides = [
    <div key={1} style={{ backgroundColor: 'red', height: '400px' }}>Slide 1</div>,
    <div key={2} style={{ backgroundColor: 'blue', height: '400px' }}>Slide 2</div>,
    <div key={3} style={{ backgroundColor: 'green', height: '400px' }}>Slide 3</div>
  ];

  
  return (
    <div>
      <h1> Welcome to Home Page </h1>
      <HomeSlider  slides={slides}/>
      <p> Others Contents here </p>
    </div>
  )
}

export default Home