import React from 'react'
import './hero.css';
import hand_icon from "../assests/Frontend_Assets/hand_icon.png";
import arrow_icon from "../assests/Frontend_Assets/arrow.png";
import hero_img from "../assests/Frontend_Assets/hero_image.png";

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
            <div className="hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="hand-icon" />
            </div>
            <p>collection</p>
            <p>for everyone</p>
            <div className="hero-latest-btn">
                <div className='latest-collection'>Latest Collection</div>
                <img src={arrow_icon} alt="arrow_icon" />
            </div></div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="hero_img" />
        </div>
    </div>
  )
}

export default Hero