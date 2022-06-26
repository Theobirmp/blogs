import React, {useRef,useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import filters, { rating } from "../data/filters"
import topics from "../data/topics"
import { FilterTopicContext } from '../stateManagement/FilterTopicContext'
import "../css/filter.css"
import { useSelector } from 'react-redux'
const Filter = () => {
    const blogs=useSelector(state=>state.blogs.blogs)
    const {currBlogs,setCurrBlogs}=useContext(FilterTopicContext)
    const {currFilter,setCurrFilter}=useContext(FilterTopicContext)
    const {currTopic,setCurrTopic}=useContext(FilterTopicContext)
    function topicOnClick(e){
        setCurrTopic(e.currentTarget.id)
    }

    function filterOnClick(e){
        setCurrFilter(e.currentTarget.id)
    }
    
    
    const filtersRef=useRef()
    const topicsRef=useRef()
    function handleFilters(){
        filtersRef.current.classList.toggle('display-none')
    }
    function handleTopics(){
        topicsRef.current.classList.toggle('display-none')
    }
    return (
        <>
            <button className='filter-dropdown-button' onClick={handleFilters}>Filters</button>
        <div ref={filtersRef} className='filter-dropdown display-none'>
            <button className='filter-button' id='DateNewest' onClick={filterOnClick}>Date(newest)</button>
            <button className='filter-button' id='DateOldest' onClick={filterOnClick}>Date(oldest)</button>
            <button className='filter-button' id='rating' onClick={filterOnClick}>Review Grade</button>
        </div>
        <button className='topics-dropdown-button display-block' onClick={handleTopics}>Topics</button>
        <div ref={topicsRef} className='filter-radio display-none'>
            <div className='topics-div' >
                <label htmlFor="allBlogs">All Blogs</label>
                <input type="radio" value={topics.all} id='allBlogs' defaultChecked name='radio' onClick={topicOnClick}/>
            </div>
            <div className='topics-div'>
                <label htmlFor='health'>Health</label>
                <input type="radio" value={topics.health} id='health' name='radio' onClick={topicOnClick}/>
            </div>
            <div className='topics-div'>
                <label htmlFor="sports">Sports</label>
                <input type="radio" value={topics.sports} id='sports' name='radio' onClick={topicOnClick}/>
            </div>
            <div className='topics-div'>
                <label htmlFor="cooking">Cooking</label>
                <input type="radio" value={topics.cooking} id='cooking' name='radio' onClick={topicOnClick}/>
            </div>
            <div className='topics-div'>
                <label htmlFor="education">Education</label>
                <input type="radio" value={topics.education} id='education' name='radio' onClick={topicOnClick}/></div>
            </div>
        </>
    )
}

export default Filter

// function radioOnClick(e){
//         if(e.currentTarget.value==='') return
//         let tempBlogs=blogs.filter(blog=>(blog.topic===e.currentTarget.value))
//         console.log(tempBlogs)
//         setDisplayBlogs(displayBlogs=>(tempBlogs.slice(firstBlog,lastBlog)))
//         setCurrTopic(e.currentTarget.value)
//         setCurrPage(1)
//     }
//     function handleClick(e){
//         // e.preventDefault()
//         var tempBlogs
//         if(e.currentTarget.id===currFilter){
//              return console.log(`current filter is already ${currFilter}`)
//     }else{
//         setCurrFilter(e.currentTarget.id)
//         if(e.currentTarget.id===filters.newest || e.currentTarget.id===filters.oldest){
//             console.log('setstate')
//             tempBlogs=blogs.reverse()
//             setDisplayBlogs(displayBlogs=>(blogs.slice(firstBlog,lastBlog)))
//             setCurrPage(1)
//         }else if(e.currentTarget.id===filters.rating){
//             tempBlogs=blogs.sort(ratingSort)
//             setDisplayBlogs(displayBlogs=>(tempBlogs.slice(firstBlog,lastBlog)))
//         }
//     }
//     }
