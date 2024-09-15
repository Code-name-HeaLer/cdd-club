import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.avif'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.avif'
import program_4 from '../../assets/program-4.jpg'
import program_icon_1 from '../../assets/www.png'
import program_icon_2 from '../../assets/app1.png'
import program_icon_3 from '../../assets/ML.png'
import program_icon_4 from '../../assets/game-icon.png'



const Programs = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={program_1} alt="" />
                <div className="caption">
                    <img src={program_icon_1} alt="" />
                    <p>Web Development</p>
                </div>
            </div>
            <div className="program">
                <img src={program_2} alt="" />
                <div className="caption">
                    <img src={program_icon_2} alt="" />
                    <p>App Development</p>
                </div>
            </div>
            <div className="program">
                <img src={program_3} alt="" />
                <div className="caption">
                    <img src={program_icon_3} alt="" />
                    <p>AI/ML</p>
                </div>
            </div>
            <div className="program">
                <img src={program_4} alt="" />
                <div className="caption">
                    <img src={program_icon_4} alt="" />
                    <p>Game Development</p>
                </div>
            </div>
        </div>
    )
}

export default Programs
