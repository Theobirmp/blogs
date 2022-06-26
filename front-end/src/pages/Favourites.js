import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';    
import { useContext } from 'react'
import {BlogContext} from '../stateManagement/BlogContext'
import { useSelector } from 'react-redux';
import SoloBlogComponent from "../components/SoloBlogComponent"
const Favourites = () => {
    const blogs=useSelector(state=>state.blogs.blogs)
    const fabvBlogs=useSelector(state=>state.blogs.blogs.filter(blog=>blog.isFavourite===true))
    const [favouriteBlogs,setFavouriteBlogs]=useState(fabvBlogs)
    useEffect(() => {
        setFavouriteBlogs(favouriteBlogs=>fabvBlogs)
        console.log('use effect fetchind blogs')
    }, [blogs])
    return (
                <div className="blog-container">
            {favouriteBlogs.map(blog=>(<SoloBlogComponent blog={blog} addRem={true} key={uuidv4()}/>))}
        </div>
    )
}

export default Favourites