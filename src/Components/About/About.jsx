import React from 'react'
import './About.css'
import about_img from '../../assets/club-logo.jpeg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img'/>
                <img src={play_icon} alt="" className='play-icon' onClick={()=>{
                    setPlayState(true)
                }} />
            </div>
            <div className="about-right">
                <h3>ABOUT OUR CLUB</h3>
                <h2>All Things Tech, All in One Place</h2>
                <p>At CDD Club, embark on a transformative 
                    journey into the world of technology and 
                    creativity. Our vibrant community of developers, 
                    designers, and tech enthusiasts offers a 
                    comprehensive program designed to equip you with 
                    the knowledge, skills, and experiences needed to 
                    excel in the dynamic field of coding, design, and 
                    development.</p>
                <p>With a focus on hands-on learning, collaboration, and 
                    mentorship, our programs provide opportunities to engage in 
                    workshops, work on innovative projects, build a strong network, 
                    and enhance your technical abilities.</p>
                <p>Our mission is to foster an inclusive environment where creativity 
                    meets technology. Whether you're a seasoned professional or just 
                    starting out, CDD Club provides the tools, resources, and community 
                    support to help you thrive in the fast-evolving world of coding and 
                    design.</p>
            </div>
        </div>
    )
}

export default About
