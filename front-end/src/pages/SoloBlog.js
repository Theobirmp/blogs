import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react'
import axios from "axios"
import "../css/soloBlog.css"
import health from "../images/topicImages/health.jpg"
import sports from "../images/topicImages/sports.jpg"
import education from "../images/topicImages/education.jpg"
import cooking from "../images/topicImages/cooking.jpg"
import SoloBlogComponent from '../components/SoloBlogComponent'
import { BlogContext } from '../stateManagement/BlogContext'
import {AiTwotoneCalendar} from "react-icons/ai"
const SoloBlog = () => {
    const [currentBlog,setCurrentBlog]=useState({name:'',summary:'',body:'',topic:'',date:'',rating:''})
    const api=axios.create({
        baseURL:`http://localhost:4000/blogs`
    })
    const {name}=useParams();
    useEffect(() => {
        api.get(`${name}`).then(res=>(setCurrentBlog(res.data))).catch(err=>(console.log(err.message)))
        }, [name,api])
        const handleClick=()=>{
            console.log('handleClick')
        }
        // async function handleClick(){
        //     apiFav.post('/favourites',{name:currentBlog.name,summary:currentBlog.summary,body:currentBlog.body,topic:currentBlog.topic,date:currentBlog.date,rating:currentBlog.rating}).then(res=>{
        //         console.log(res.data)
        //     })
        // }
        const {blogs}=useContext(BlogContext)
        const [suggestedBlogs,setSuggestedBlogs]=useState()
        useEffect(()=>{
            var tempBlogs
            var tempCurrBlog
            tempBlogs=blogs.filter(blog=>blog.topic===currentBlog.topic)
            console.log(tempBlogs)
            do{
            tempCurrBlog=tempBlogs[Math.floor(Math.random()*tempBlogs.length)]
            }while(currentBlog===tempCurrBlog)
            setSuggestedBlogs(currBlog=>tempCurrBlog)
        },[blogs,currentBlog.topic,name])
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
    return (
        <>
        <div className='solo-blog-container'>
            <div className='solo-blog-date-topic'>
                <AiTwotoneCalendar className='solo-blog-calendar-icon'/>
                <span className='solo-blog-date bold'>{formatDate(currentBlog.date)}</span>
                <span className='solo-blog-topic bold capitalise'>{currentBlog.topic}</span>
            </div>
            <div className='solo-blog-image-name'>
                <img className='solo-blog-image' src={handleImage(currentBlog.topic)} alt={currentBlog.topic} />
                <p className='solo-blog-name capitalise bold'>{currentBlog.name}</p>
            </div>
        <div className='solo-blog-sumary-body'>
            <p className='solo-blog-summary capitalise'>{currentBlog.summary}</p>
            <p className='solo-blog-body'>{currentBlog.body}</p>
        </div>
        <button className='solo-add-favourites' onClick={handleClick}>add or remove favourites</button>
        </div>
        <div className='blog-suggestions'>
            <h1 className='bold fs-600 '>Also check out</h1>
            {suggestedBlogs?<SoloBlogComponent blog={suggestedBlogs}/>:<h1>error loading suggestions....</h1>}
        </div>
        </>
    )
}

export default SoloBlog
