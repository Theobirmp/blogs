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
                <img className='grid-react-image' src={reactImage} alt="" />
                <section className='search grid-col-span-2 brd-red'>
                    <h1>Discover</h1>
                    <div className="name-topic-random">
                        <div className='name'>
                        <span><BsSearch className='react-icon'/></span>
                        <span className='bold'>By Name</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum.</p>
                    </div>
                    <div className='topic'>
                        <span><GiCookingPot className='react-icon'/> <MdSportsEsports className='react-icon'/> <BsFillCameraFill className='react-icon'/></span>
                        <span className='bold'>By Topic</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, tempora.</p>
                    </div>
                    <div className='random'>
                        <span><GiClover className='react-icon'/></span>
                        <span className='bold'>Get a Random Blog</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, et!</p>
                    </div>
                    </div>
            </section>
            <section className='create grid-col-span-2'>
                    <h1>Create</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, minima?</p>
                    <button className='create-blog-button'>Create Blog</button>
            </section>
            <img className='grid-node-image' src={nodeImage} alt="node" />
            <section className='accordion grid-col-span-3'>
                <h1 className='faq'>Frequently Asked Questions</h1>
                <Accordion/>
            </section>
            <section className='grid-col-span-3'>
                <UsersRating/>
            </section>
        </div>
    )
}

export default Home
