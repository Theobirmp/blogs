import React from 'react'
import reactLogo from "../images/react.svg"
import nodeLogo from "../images/nodeLogo.png"
import "../css/about.css"
const Home = () => {
    return (
        <div className='about-container'>
            {/* <h1 className='about-header'>About the Project</h1> */}
            <div className='about-project-container'>
                <div className='front'>
                    <h1>Front-End Development</h1>
                    <img src={reactLogo} alt="react" className='react'/>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className='back'>
                    <h1>Back-End Development</h1>
                <img src={nodeLogo} alt="node" className='node' />
                <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        
                    </ul>
                </div>
            </div>
            <div className='about-me-container'>
                <img className='react' src={reactLogo} alt="react" />
                <div>
                    <h1 className='about-header'>Hello! My name is Fanis Birmpilis</h1>
                <p>My passion is Web Development. Unfortunately i had close to no Web Development courses in University so i decided to become
                    a self-taught web developer focusing on front end. After quite some time i feel comfortable with web technologies such as HTML5,CSS3 and React and i have experience with backend technologies such as Node.js and Express.js
                </p>
                <p>
                    Since i learned programming both on my own and in University i can leverage my formal education as well as my passion for development to rapidly learn new concepts and technologies. Currently i am looking forward my first job in the world of Development.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Home
