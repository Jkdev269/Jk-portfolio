import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! I'm Jaharuddin, a passionate and motivated MERN stack developer. I recently started my journey as a full-stack developer and have gained hands-on experience in building web applications using the MERN stack (MongoDB, Express, React, Node.js). I enjoy creating dynamic and responsive websites and web apps that offer seamless user experiences.</p>
                    {/* <p>Skill</p>
                    <ul>
                        <li>Frontend: React.js, HTML, CSS, JavaScript, Bootstrap, Tailwind css</li>
                        <li>Backend: Node.js, Express.js</li>
                        <li>Database: MongoDB, Mongoose</li>
                        <li>Version Control: Git, GitHub</li>
                        <li>Deployment: Render, Vercel</li>
                    </ul> */}
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>MongoDB</p> <hr style={{width:"60%"}}/>
                    </div>   
                    <div className="about-skill">
                    <p>Express</p> <hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                    <p>React JS</p> <hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                    <p>Node Js</p> <hr style={{width:"90%"}}/>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
               
                <h1>3+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
            <h1>2+</h1>
            <p>COMMUNITY PROJECTS</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>100%</h1>
                <p>COMMITMENT TO LEARNING</p>
            </div>
            

        </div>
    </div>
  )
}

export default About