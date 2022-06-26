import React, { useContext } from 'react'
import health from "../images/topicImages/health.jpg"
import sports from "../images/topicImages/sports.jpg"
import education from "../images/topicImages/education.jpg"
import cooking from "../images/topicImages/cooking.jpg"
import StarRating from './StarRating';
import { Link } from 'react-router-dom';
import { BlogContext } from '../stateManagement/BlogContext'
import { useState } from 'react'
import AddRemove from './AddRemove'
import { useEffect } from 'react'
const SoloBlogComponent = ({blog,addRem}) => {
    const {favouriteBlogs,setFavouriteBlogs}=useContext(BlogContext)
    function handleImage(topic){
        switch(topic){
            case "health":
                return health
            case "sports":
                return sports
            case "cooking":
                return cooking
            case "education":
                return education
                default:
                    return
        }
    }
    function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}   
console.log('solo blog rerender')
    return (
        <div className="blog-item"  >
                    <img className='blog-image' src={handleImage(blog.topic)} alt="blog" />
                    <div className="blog-topic-date">
                        <span className='blog-topic capitalise bolder fs-600' >{blog.topic}</span>
                        <span className='blog-date capitalise fs-400 lighter'>{formatDate(blog.date)}</span>
                    </div>
                    <div className="blog-name fs-500 bolder capitalise"><Link className='blog-name-link' to={`/blogs/${blog.name}`}>{blog.name}</Link></div>
                        <div className="blog-summary fs-400 capitalise">{blog.summary}</div>
                        {blog.rating}
                        <StarRating value={blog.rating}/>
                        <div>{blog.isFavourite?<div>true</div>:<div>false</div>}</div>
                    {/* <button className="blog-item-button" onClick={()=>deleteBlog(blog._id)}><BsFillTrashFill/></button> */}
                    <AddRemove addRem={addRem} blog={blog}/>
                </div>)
}

export default SoloBlogComponent
