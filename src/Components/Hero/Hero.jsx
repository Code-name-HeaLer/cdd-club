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
            <h1>Where Code Meets Creativity, Magic Happens</h1>
            <p>At CDD Club, we are passionate about pushing the 
              boundaries of technology and creativity. Our club 
              is a vibrant community of developers, designers, 
              and tech enthusiasts who come together to explore 
              the latest trends, tools, and techniques in coding, 
              design, and development.   
            </p>
            <button onClick={handleClick} className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
