import React, { useState } from 'react'
import "../css/form.css"
import axios from 'axios'
import { useHistory } from 'react-router'
import { useContext } from 'react'
import {BlogContext} from '../stateManagement/BlogContext'
import { useDispatch } from 'react-redux'
import { fetchBlogs } from '../redux/blogs/blogActions'
const Form = () => {
    const {blogs}=useContext(BlogContext)
    const history=useHistory();
    const [currBlog,setCurrBLog]=useState({name:'',summary:'',body:'',topic:''})
    const api=axios.create({
        baseURL:`http://localhost:4000/blogs`
    })
    const dispatch=useDispatch()
    function handleSubmit(){
        api.post('/',{name:currBlog.name,summary:currBlog.summary,body:currBlog.body,topic:currBlog.topic}).then((res)=>{
            dispatch(fetchBlogs)
        })
        setCurrBLog({name:'',summary:'',body:'',topic:''})
        history.push('/blogs')
    }
    return (
        <>
        <h1 className="fs-700 capitalise bolder sumbit-new-blog-text">Submit your New Blog</h1>
        <form autoComplete="off" className="blog-form" onSubmit={handleSubmit}>
           <div className="blog-form-name">
                <label htmlFor="blog-form-item-1" className="fs-500">Title</label>
                <input placeholder="Set the Title of the Blog" required value={blogs.name} onChange={(e)=>setCurrBLog(blog=>({...blog,name:e.target.value}))} type="text" id="blog-form-item-1"/>
           </div>
            <div className="blog-form-summary">
                <label htmlFor="blog-form-item-2" className="fs-500">Summary</label>
                <input placeholder="Brief description" required value={blogs.summary} onChange={(e)=>setCurrBLog(blog=>({...blog,summary:e.target.value}))} type="text"  id="blog-form-item-2"/>
            </div>
            <div className="blog-form-body">
                <label htmlFor="blog-form-item-3" className="fs-500">Body</label>
                <textarea rows="10" columns="50"  required value={blogs.body} onChange={(e)=>setCurrBLog(blog=>({...blog,body:e.target.value}))} type="text"  id="blog-form-item-3"/>
            </div>
            <div className="blog-form-select">
                <label htmlFor="form-select" className="fs-500">Topic</label>
                <select name="form-select" id="form-select" onChange={(e)=>setCurrBLog(blog=>({...blog,topic:e.target.value}))}>
                    <option disabled selected value='DEFAULT'>Select Blog Category</option>
                    <option value="health">Health</option>
                    <option value="sports">Sports</option>
                    <option value="cooking">Cooking</option>
                    <option value="education">Education</option>
                </select>
            </div>
            <button className="form-button" type="submit">Add blog</button>
        </form>
        </>
    )
}

export default Form
