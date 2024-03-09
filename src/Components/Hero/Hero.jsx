import React from 'react'
import "./Hero.css"
import hand_icon from "../Assest/hand_icon.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="left-hero">
              <h1>NEW ARRAVIAL</h1>
              <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt="" />
              </div>
              <p>collections</p>
              <p>everyone</p>
        </div>
        <div className="right-hero">

        </div>
      
    </div>
  )
}

export default Hero
