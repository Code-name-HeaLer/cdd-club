import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {

  const handleClick = () => {
    window.location.href = 'https://google.com'; // Replace with your desired URL
  };

  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>our Cutteing-edge curriculum is designed to empower students
            with knowledge, skills, and experirnce neede to excel in
            the dynamic field of education    
            </p>
            <button onClick={handleClick} className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
