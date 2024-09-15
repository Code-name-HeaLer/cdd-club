import React, { useRef } from 'react'
import './Projects.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import open_icon from '../../assets/open.png'
import project_1 from '../../assets/project-1.avif'
import project_2 from '../../assets/project-2.avif'
import project_3 from '../../assets/project-3.jpg'
import project_4 from '../../assets/project-4.jpg'

const Projects = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

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
                                    <img src={open_icon} alt="View Project" />
                                    <p>Project 1</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="project">
                                <img src={project_2} alt="Project 2" />
                                <div className="caption">
                                    <img src={open_icon} alt="View Project" />
                                    <p>Project 2</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="project">
                                <img src={project_3} alt="Project 3" />
                                <div className="caption">
                                    <img src={open_icon} alt="View Project" />
                                    <p>Project 3</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="project">
                                <img src={project_4} alt="Project 4" />
                                <div className="caption">
                                    <img src={open_icon} alt="View Project" />
                                    <p>Project 4</p>
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
