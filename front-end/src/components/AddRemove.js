import React, { useContext } from 'react'
import { useState } from 'react'
import "../css/addRemove.css"
import {BsFillOctagonFill, BsFillTrashFill} from "react-icons/bs"
import { BlogContext } from '../stateManagement/BlogContext'
import { useDispatch } from 'react-redux'
import { favBlog, unFavBlog } from '../redux/blogs/blogActions'
const AddRemove = ({addRem,blog}) => {
    const {favouriteBlogs,setFavouriteBlogs}=useContext(BlogContext)
    // const apiFav=axios.create({
    //     baseUrl:`http://localhost:5000/favourites`
    // })
    const dispatch=useDispatch()
    
    function deleteBlog(blog){
        if(blog.hasOwnProperty('blogId')){
            console.log('from favourites')
            dispatch(unFavBlog(blog.blogId))
        }else{
            console.log('from blogs')
            dispatch(unFavBlog(blog._id))
        }
    }
    const postBlog=(blogId)=>{
        dispatch(favBlog(blogId));
    }
    // async function postBlog(blog){
    //         apiFav.post('/favourites',{name:blog.name,summary:blog.summary,body:blog.body,topic:blog.topic,date:blog.date,rating:blog.rating,blogId:blog._id}).then(res=>{
    //             const tempFavouriteBlogs=[...favouriteBlogs]
    //             tempFavouriteBlogs.push(blog)
    //             setFavouriteBlogs(favouriteBlogs=>tempFavouriteBlogs)
    //             dispatch(favBlog(blog._id))
    //             console.log('favourite blogs')
    //             console.log(tempFavouriteBlogs)
    //         }).catch(err=>console.log(err))
    //     }
    return (
        <div>
            {!addRem?<button onClick={()=>postBlog(blog._id)} className='blog-item-button blog-item-button-add'>Add</button>:<button onClick={()=>deleteBlog(blog)}className='blog-item-button blog-item-button-add'><BsFillTrashFill/></button>}
        </div>
    )
}

export default AddRemove

