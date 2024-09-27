import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {

  const handleClick = () => {
    window.location.href = 'https://linktr.ee/CDD_Club'; // Replace with your desired URL
  };

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>When Code Meets Creativity, Magic Happens</h1>
        <p>CDD Club is the place where Innovation Meets Community.
          Join us in a dynamic space where tech enthusiasts
          collaborate, explore, and create the future.
        </p>
        <button onClick={handleClick} className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>

    </div>
  )
}

export default Hero
