import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/nav.css"
import Logo from '../images/React-icon.png'
import HamMenu from '../images/hamburgerMenu.png'
const Nav = () => {
    const [mobileIsOpen,setMobileIsOpen]=useState(false)
    function handleClick(e){
        e.preventDefault()
        setMobileIsOpen(mobileIsOpen=>!mobileIsOpen)
    }
    return (
        <div className="nav-bar-container">
            <img className='logo' src={Logo} alt="logo" />
            <div className="nav-bar">
                <Link to="/" className="nav-bar-item">Home</Link>
                <Link to="/blogs" className="nav-bar-item">Blogs</Link>
                <Link to="/createBlog" className="nav-bar-item">Create Blog</Link>
                <Link to="/favourites" className="nav-bar-item">Favourites</Link>
                <Link to="/about" className="nav-bar-item">About</Link>
            </div>
            <button className='ham-menu-button' onClick={handleClick}><img  src={HamMenu}  alt="ham menu" /></button>
            <div className='mobile-menu' id={mobileIsOpen?'mobile-menu-active':''}>
                <Link to="/" className="nav-bar-item">Home</Link>
                <Link to="/blogs" className="nav-bar-item">Blogs</Link>
                <Link to="/createBlog" className="nav-bar-item">Create Blog</Link>
                <Link to="/favourites" className="nav-bar-item">Favourites</Link>
                <Link to="/about" className="nav-bar-item">About</Link>
            </div>
        </div>
    )
}

export default Nav