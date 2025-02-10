import React, { useState } from 'react'
import './Slider.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

function Slider({ data }) {

    const [slide, setslide] = useState(0);

    const nextSlide = ()=>{
        setslide( slide === data.length -1 ? 0 : slide + 1)
    };
    const prevSlide = ()=>{
        setslide( slide === 0 ? data.length - 1 : slide - 1)
    };
    return (
        <div className='slider'>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
            {data.map((item, index) => {
                return <img src={item.place} alt={item.title} key={index} className={slide === index ? "slide" : "slide slide-hidden"} />
            })}
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
            <span className='indicators'>
                {data.map((_, idx) => {
                    return <button key={idx} onClick={() =>setslide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
                })}
            </span>
        </div>
    )
}

export default Slider
