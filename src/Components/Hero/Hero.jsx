import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span >I'm Jaharuddin,</span> MERN devloper based in India</h1>
        <p>I specialize in creating full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js). With a passion for clean and efficient code, I aim to build applications that are not only functional but also user-friendly and visually appealing. Whether it's building a dynamic front-end or developing a scalable back-end, I am committed to delivering high-quality, maintainable solutions.</p>
        <div className='hero-action'>
            <div className="hero-connect"> <AnchorLink className='anchor-link'offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>

    </div>
  )
}

export default Hero