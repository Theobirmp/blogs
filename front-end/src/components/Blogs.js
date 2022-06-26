import React from 'react'
import "../css/blogs.css"
import { v4 as uuidv4 } from 'uuid';    
import { useContext } from 'react';
import { FilterTopicContext } from '../stateManagement/FilterTopicContext';
import SoloBlogComponent from "./SoloBlogComponent"
import { useSelector } from 'react-redux';

const Blogs = ({displayBlogs}) => {
    const {blogsPerPage,firstBlog,lastBlog}=useContext(FilterTopicContext)
    const blogs=useSelector(state=>state.blogs.blogs)
    // const [currBlogs,setCurrBlogs]=useState(blogs)
    
    return (
        <div className="blog-container">
            {displayBlogs.map(blog=>(
                    <SoloBlogComponent key={uuidv4()} blog={blog}/>
    ))}
        </div>
    )
}

export default Blogs
