import React, { useRef, useState, useEffect } from 'react'
import './Projects.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import project_1 from '../../assets/project-1.avif'
import project_2 from '../../assets/project-2.avif'
import project_3 from '../../assets/project-3.jpg'
import project_4 from '../../assets/project-4.jpg'
import project_icon_1 from '../../assets/www.png'
import project_icon_2 from '../../assets/app1.png'
import project_icon_3 from '../../assets/ML.png'
import project_icon_4 from '../../assets/game-icon.png'

const Projects = () => {
    const slider = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = 4;
    const slidesPerView = isMobile ? 1 : 2;

    const slideForward = () => {
        setCurrentSlide(prev => (prev + 1) % (totalSlides - slidesPerView + 1));
    }

    const slideBackward = () => {
        setCurrentSlide(prev => (prev - 1 + totalSlides - slidesPerView + 1) % (totalSlides - slidesPerView + 1));
    }

    useEffect(() => {
        const tx = -currentSlide * (100 / slidesPerView);
        slider.current.style.transform = `translateX(${tx}%)`;
    }, [currentSlide, isMobile]);

    return (
        <div className='projects'>
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>

                    <li>
                        <div className="slide">
                            <div className="project">
                                <img src={project_1} alt="Project 1" />
                                <div className="caption">
                                    <a href="https://github.com/CodingClubPMEC/Web-Dev-Projects"><img src={project_icon_1} alt="View Project" /></a>
                                    <p>Web Dev Projects</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="project">
                                <img src={project_2} alt="Project 2" />
                                <div className="caption">
                                    <a href="https://github.com/CodingClubPMEC/App-Dev-Project"><img src={project_icon_2} alt="View Project" /></a>
                                    <p>App Dev Projects</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="project">
                                <img src={project_3} alt="Project 3" />
                                <div className="caption">
                                    <a href="https://github.com/CodingClubPMEC/ML-Dev-Projects"><img src={project_icon_3} alt="View Project" /></a>
                                    <p>AI/ML Projects</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="project">
                                <img src={project_4} alt="Project 4" />
                                <div className="caption">
                                    <a href="https://github.com/CodingClubPMEC/Game-Dev-Projects"><img src={project_icon_4} alt="View Project" /></a>
                                    <p>Game Dev Projects</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Projects;