import React from 'react'
import woman from "../images/showcase.svg"
import "../css/home.css"
import {GiClover} from "react-icons/gi"
import {BsSearch} from "react-icons/bs"
import {GiCookingPot} from "react-icons/gi"
import {MdSportsEsports} from "react-icons/md"
import {BsFillCameraFill} from "react-icons/bs"
import Accordion from '../components/Accordion.js'
import reactImage from "../images/react.svg"
import nodeImage from "../images/fundamentals.svg"
import UsersRating from '../components/UsersRating'
const Home = () => {
    return (
        <div className='home-page-container'>
                <section className='top-section brd-red'>
                    <div className='top-section-left-panel'>
                        <h1>All Blogs - One Place</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis incidunt commodi tenetur aspernatur quis inventore delectus, quasi omnis earum eveniet repellendus tempora exercitationem? </p>
                        <button className='get-started-button'>Get Started</button>
                    </div>
                    <div className='top-section-image-container'>
                    <img className='top-section-image' src={woman} alt="woman reading"/>
                    </div>
                </section>
                <section className='search'>
                    <div className='search-left-panel'>
                    <h1 className='discover'>Discover</h1>
                    <div className='search-left-panel-inner'>
                    <div className="search-left-panel-inner-div">
                        <div className='search-left-panel-inner-div-inner'>
                            <span style={{fontSize:'1.5rem'}}><BsSearch className='react-icon'/></span>
                            <span style={{fontSize:'1.5rem'}} className='bold'>By Name</span>
                        </div>
                        <p style={{fontSize:'1.25rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum.</p>
                    </div>
                    <div className="search-left-panel-inner-div">
                        <div className='search-left-panel-inner-div-inner'>
                            <span style={{fontSize:'1.5rem'}}><GiCookingPot className='react-icon'/> <MdSportsEsports className='react-icon'/> <BsFillCameraFill className='react-icon'/></span>
                            <span style={{fontSize:'1.5rem'}}className='bold'>By Topic</span>
                        </div>
                        <p style={{fontSize:'1.25rem'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, tempora.</p>
                    </div>
                    <div className="search-left-panel-inner-div">
                        <div className='search-left-panel-inner-div-inner'>
                            <span style={{fontSize:'1.5rem'}}><GiClover className='react-icon'/></span>
                            <span style={{fontSize:'1.5rem'}} className='bold'>Get a Random Blog</span>
                        </div>
                        <p style={{fontSize:'1.25rem'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, et!</p>
                    </div>
                    </div>
                    </div>
                    <img  className='search-right-panel' src={reactImage} alt="" />
            </section>
            <section className='create'>
                    <img className='create-left-panel' src={nodeImage} alt="node" />
                    <div className='create-right-panel'>
                        <h3 className='create-right-panel-h3'>Create</h3>
                        <p className='create-right-panel-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, minima?</p>
                        <button className='create-right-panel-button'>Create Blog</button>
                    </div>
            </section>
            <section className='accordion-container'>
                <h1 className='faq'>Frequently Asked Questions</h1>
                <Accordion/>
            </section>
            <section className='users-ratings'>
                <UsersRating/>
            </section>
        </div>
    )
}

export default Home
