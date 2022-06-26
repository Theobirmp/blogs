import React from 'react'
import { useState,createContext,useEffect } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';

export const BlogContext=createContext();
export function BlogProvider ({children}) {
    const [blogs,setBlogs]=useState([])
    const favBlogs=useSelector(state=>state.blogs.blogs.filter(blog=>blog.isFavourite===true))
    const [favouriteBlogs,setFavouriteBlogs]=useState(favBlogs)
    const values={blogs,setBlogs,favouriteBlogs,setFavouriteBlogs}
    return (
        <BlogContext.Provider value={values}>
            {children}
        </BlogContext.Provider>
    )
}

// export default BlogContext.Provider
