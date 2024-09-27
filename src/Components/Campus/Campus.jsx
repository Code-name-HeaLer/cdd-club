import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/pic-1.jpeg'
import gallery_2 from '../../assets/pic-2.jpeg'
import gallery_3 from '../../assets/pic-3.jpeg'
import gallery_4 from '../../assets/pic-4.jpeg'
import white_arrow from '../../assets/instagram.png'

const Campus = () => {
    return (
        <div className='campus'>
            <div className="gallery">
                <img src={gallery_1} alt="" />
                <img src={gallery_2} alt="" />
                <img src={gallery_3} alt="" />
                <img src={gallery_4} alt="" />
            </div>
            <button className='btn dark-btn'>See More Here <img src={white_arrow} alt="" /></button>
        </div>
    )
}

export default Campus
