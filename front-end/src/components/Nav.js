import React from 'react'
import { Link } from 'react-router-dom'
import "../css/nav.css"

const Nav = () => {
    return (
        <div className="nav-bar-container">
            {/* <ul className="nav-bar">
                <li className="nav-bar-item"><Link to="/" >Home</Link></li>
                <li className="nav-bar-item"><Link to="/blogs" >Blogs</Link></li>
                <li className="nav-bar-item"><Link to="/createBlog" >Create Blog</Link></li>
                <li className="nav-bar-item"><Link to="/about" >About</Link></li>
            </ul> */}
            <div className="nav-bar">
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