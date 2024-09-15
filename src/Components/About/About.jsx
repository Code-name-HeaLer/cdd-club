import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
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
                <h2>Your all in one stop for everything TECH</h2>
                <p>Embark on a transformative educational journey with our 
                、EDUs university's comprehensive education programs. 
                Our cutting-edge curriculum is designed to empower students 
                with the knowledge, asset inents skills, and experiences needed 
                to excel in the dynamic field of education</p>
                <p>With a focus on innovation, hands-on learning, 
                and personalized mentorship, our programs prepare 
                aspiring educators to make meaningful impact in classrooms, 
                schools, and communities</p>
                <p>Whether you aspire to become a teacher, administrator, 
                Titie css counselor, or educational leader, our diverse 
                range of programs offers the perfect pathway to achieve 
                your goals and unlock your full potential in shaping the 
                future of education </p>
            </div>
        </div>
    )
}

export default About
